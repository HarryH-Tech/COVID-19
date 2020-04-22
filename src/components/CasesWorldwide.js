import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getWorldwideSummaryAction } from "../redux/Actions";
import { Container, Segment } from "semantic-ui-react";

function Worldwide({ data, getWorldwideSummary }) {
  useEffect(() => {
    getWorldwideSummary();
  }, [getWorldwideSummary]);

  return (
    <div>
      <Container textAlign="center">
        <Segment.Group raised compact>
          <Segment color="red">
            <h1>Cases Worldwide</h1>
          </Segment>
          <Segment>
            <p>
              Total Confirmed Cases:{" "}
              {data && data.TotalConfirmed.toLocaleString()}
            </p>
          </Segment>
          <Segment>
            <p>
              Total New Cases Today:{" "}
              {data && data.NewConfirmed.toLocaleString()}
            </p>
          </Segment>
          <Segment>
            <p>Total Deaths: {data && data.TotalDeaths.toLocaleString()}</p>
          </Segment>
          <Segment>
            <p>Total Deaths Today: {data && data.NewDeaths.toLocaleString()}</p>
          </Segment>
          <Segment>
            <p>
              Total Recoveries: {data && data.TotalRecovered.toLocaleString()}
            </p>
          </Segment>
          <Segment>
            <p>
              Total Recoveries Today:{" "}
              {data && data.NewRecovered.toLocaleString()}
            </p>
          </Segment>
        </Segment.Group>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data.Global,
  };
};

const mapDispatchToProps = {
  getWorldwideSummary: getWorldwideSummaryAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Worldwide);
