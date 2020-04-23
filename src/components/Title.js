import React from "react";
import { Header, Segment, Icon } from "semantic-ui-react";

function Title() {
  return (
    <div>
      <Segment
        inverted
        color="red"
        style={{ width: "100% !important", maxWidth: "100%" }}
      >
        <Header textAlign="center" block color="green">
          <div style={{ textAlign: "center" }}>
            <Icon size="huge" name="globe" />
            <Header.Content>
              <h1
                style={{
                  fontSize: "4rem",
                  paddingLeft: "40px",
                  paddingRight: "40px",
                }}
              >
                COVID-19
              </h1>
            </Header.Content>
            <Icon size="huge" name="bug" />
          </div>
        </Header>
      </Segment>
    </div>
  );
}

export default Title;
