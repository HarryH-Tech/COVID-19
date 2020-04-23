import React from "react";
import { Segment, Icon } from "semantic-ui-react";

function Error(props) {
  return (
    <div>
      <Segment
        inverted
        color="red"
        tertiary
        style={{ width: "80%", margin: "15px auto" }}
        textAlign="center"
      >
        <Icon name="star" size="huge" />
        <h2>
          {" "}
          Either this country does not have any reported cases or we don't have
          any information available about that country at the moment.
        </h2>
      </Segment>
    </div>
  );
}

export default Error;
