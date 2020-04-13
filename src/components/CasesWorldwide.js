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
            <p>Total Confirmed Cases: {data && data.TotalConfirmed}</p>
          </Segment>
          <Segment>
            <p>Total New Cases Today: {data && data.NewConfirmed}</p>
          </Segment>
          <Segment>
            <p>Total Deaths: {data && data.TotalDeaths}</p>
          </Segment>
          <Segment>
            <p>Total Deaths Today: {data && data.NewDeaths}</p>
          </Segment>
          <Segment>
            <p>Total Recoveries: {data && data.TotalRecovered}</p>
          </Segment>
          <Segment>
            <p>Total Recoveries Today: {data && data.NewRecovered}</p>
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
