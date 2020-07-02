import React from "react";
import { Grid } from "semantic-ui-react";

//Import Custom Components
import Title from "./components/Title";
import CasesWorldwide from "./components/CasesWorldwide";
import Introduction from "./components/Introduction";
import CasesByCountry from "./components/CasesByCountry";

function App() {
  return (
    <>
      <Title />
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Introduction />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <CasesWorldwide />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <CasesByCountry />
    </>
  );
}

export default App;
