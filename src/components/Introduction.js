import React from "react";
import { Container, Segment, Header } from "semantic-ui-react";

function Introduction(props) {
  return (
    <div>
      <Container>
        <Segment>
          <Header textAlign="center">About COVID-19</Header>
          <Segment>COVID-19 is</Segment>
        </Segment>
      </Container>
    </div>
  );
}

export default Introduction;
