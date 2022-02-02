import React from 'react';
import { Grid } from 'semantic-ui-react';

//Import Custom Components
import Title from './components/Title';
import CasesWorldwide from './components/CasesWorldwide';
import Introduction from './components/Introduction';
import CasesByCountry from './components/CasesByCountry';

import Swal from 'sweetalert2';

function App() {
  // Alert user some of information on API is sometimes incorrect or missing.
  Swal.fire({
    title: 'Hi! 😊',
    confirmButtonText: 'OK',
    html: "The data below comes from <a href='https://covid19api.com/' target='_blank'>this API</a>. Some of the information may be incorrect at certain times but the team is doing its best to keep it up to date 😀",
  });

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
