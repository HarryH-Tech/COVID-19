import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getWorldwideSummaryAction } from '../redux/Actions';
import { Container, Segment } from 'semantic-ui-react';

function Worldwide({ data, getWorldwideSummary }) {
  useEffect(() => {
    getWorldwideSummary();
  }, [getWorldwideSummary]);

  return (
    <Container textAlign="center">
      <Segment.Group raised compact>
        <Segment color="red">
          <h1>Cases Worldwide</h1>
        </Segment>
        <Segment>
          <p>
            <strong>Total Confirmed Cases: </strong>
            {data && data.TotalConfirmed.toLocaleString()}
          </p>
        </Segment>
        <Segment>
          <p>
            <strong>Total New Cases Today: </strong>{' '}
            {data && data.NewConfirmed.toLocaleString()}
          </p>
        </Segment>
        <Segment>
          <p>
            <strong>Total Deaths:</strong>{' '}
            {data && data.TotalDeaths.toLocaleString()}
          </p>
        </Segment>
        <Segment>
          <p>
            <strong>Total Deaths Today:</strong>{' '}
            {data && data.NewDeaths.toLocaleString()}
          </p>
        </Segment>
        <Segment>
          <p>
            <strong>Total Recoveries:</strong>{' '}
            {data && data.TotalRecovered.toLocaleString()}
          </p>
        </Segment>
        <Segment>
          <p>
            <strong>Total Recoveries Today:</strong>{' '}
            {data && data.NewRecovered.toLocaleString()}
          </p>
        </Segment>
      </Segment.Group>
    </Container>
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
