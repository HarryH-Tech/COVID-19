import React from "react";
import { Container, Segment, Header } from "semantic-ui-react";

function Introduction(props) {
  return (
    <>
      <Container>
        <Segment color="red">
          <Header textAlign="center">
            <h1>About COVID-19</h1>
          </Header>
          <Segment>
            <p style={{ textAlign: "justify" }}>
              COVID-19 first originated at the end of 2019 in Wuhan, China. It
              is an infectious disease caused by severe acute respiratory
              syndrome coronavirus 2 (SARS-COV-2). The most common symptoms
              include fever and a cough. However other symptoms such as fatigue,
              muscle pain, diarrhea and loss of smell have also been reported.
              The time from exposure to onset of symptoms is typically around
              five days, but may range from two to fourteen days. While the
              majority of cases result in mild symptoms, some progress to viral
              pneumonia and multi-organ failure.
            </p>
          </Segment>
        </Segment>
      </Container>
    </>
  );
}

export default Introduction;
