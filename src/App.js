import React from "react";

import CasesWorldwide from "./components/CasesWorldwide";
import Introduction from "./components/Introduction";
import WrappedCountry from "./components/CasesByCountry";
// import CountryLocationMap from "./components/CountryLocationMap";

import { Container, Header, Segment, Icon, Grid } from "semantic-ui-react";

function App() {
  return (
    <>
      <Segment inverted padded color="red">
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
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <CasesWorldwide />
          </Grid.Column>
          <Grid.Column>
            <Introduction />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <WrappedCountry />
      {/* <CountryLocationMap lat={countryCases.lat} lng={countryCases.lng} /> */}
      {/* <CountryLocationMap /> */}
    </>
  );
}

export default App;
