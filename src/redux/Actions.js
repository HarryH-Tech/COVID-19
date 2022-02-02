import axios from 'axios';

export const GET_WORLDWIDE_SUMMARY = 'GET_WORLDWIDE_SUMMARY';
export const GET_COUNTRY_CASES = 'GET_COUNTRY_CASES';
export const GET_COUNTRY_TOTAL_CASES = 'GET_COUNTRY_CASES';
export const GET_ALL_AVAILABLE_COUNTRIES = 'GET_ALL_COUNTRIES';
export const SET_ERROR = 'SET_ERROR';

//Get Total Deaths, Recoveries, Confirmed Cases, Etc
export const getWorldwideSummaryAction = () => async (dispatch, getState) => {
  const response = await axios.get('https://api.covid19api.com/summary ');
  return dispatch({
    type: GET_WORLDWIDE_SUMMARY,
    payload: response.data,
  });
};

// Get all countries to populate dropdown menu
export const getAllAvailableCountriesAction =
  () => async (dispatch, getState) => {
    const response = await axios.get('https://api.covid19api.com/countries');

    //Sort response so it lists the countries in
    //alphabetical order
    response.data.sort(function (a, b) {
      return a.Country < b.Country ? -1 : a.Country > b.Country ? 1 : 0;
    });

    return dispatch({
      type: GET_ALL_AVAILABLE_COUNTRIES,
      payload: response.data,
    });
  };

// Get number of confirmed cases in a country
// to create chart
export const getCountryCasesAction =
  (country) => async (dispatch, getState) => {
    const confirmedCasesSinceDay1Response = await axios.get(
      `https://api.covid19api.com/dayone/country/${country}`
    );

    const currentAllCasesInCountryResponse = await axios.get(
      `https://api.covid19api.com/live/country/${country}`
    );

    Promise.all([
      confirmedCasesSinceDay1Response,
      currentAllCasesInCountryResponse,
    ]);

    if (
      confirmedCasesSinceDay1Response.data.length > 0 &&
      currentAllCasesInCountryResponse.data.length > 0
    ) {
      /*
  *****Removes responses that do not contain a province.*****
  Needed as some countries (such as UK or France) return
  number of cases for different territories, distorting the 
  graph. 
  Now it only returns the number of cases for the main country.
  This may have unreliable results for some countries but I haven't
  found any yet. 
  */
      const confirmedCasesSinceDay1ResponseWithoutProvinces =
        confirmedCasesSinceDay1Response.data.filter((confirmedCase) => {
          if (!confirmedCase.Province) {
            return confirmedCase;
          } else {
            return null;
          }
        });

      /* 
  Create a formatted object to pass to
  the "data" prop in the bar chart. It must
  be formatted as below to work correctly.
  */
      let dataPoints = {
        lat: '',
        lng: '',
        countryData: [],
        labels: [],
        datasets: [
          {
            barThickness: 4,
            label: 'Number of Confirmed COVID-19 Cases',
            backgroundColor: '#4477ff',
            borderColor: '#4477ff',
            data: [],
          },
          {
            barThickness: 4,
            label: 'Number of COVID-19 Deaths',
            backgroundColor: '#000',
            borderColor: '#000',
            data: [],
          },
          {
            barThickness: 4,
            label: 'Number of COVID-19 Recoveries',
            backgroundColor: '#55ff55',
            borderColor: '#55ff55',
            data: [],
          },
        ],
      };

      for (
        var i = 0;
        i < confirmedCasesSinceDay1ResponseWithoutProvinces.length;
        i++
      ) {
        dataPoints.labels.push(
          confirmedCasesSinceDay1ResponseWithoutProvinces[i].Date.slice(0, -10)
        );
        dataPoints.datasets[0].data.push(
          confirmedCasesSinceDay1ResponseWithoutProvinces[i].Confirmed
        );
        dataPoints.datasets[1].data.push(
          confirmedCasesSinceDay1ResponseWithoutProvinces[i].Deaths
        );
        dataPoints.datasets[2].data.push(
          confirmedCasesSinceDay1ResponseWithoutProvinces[i].Recovered
        );
      }

      dataPoints.countryData.push(
        confirmedCasesSinceDay1ResponseWithoutProvinces
      );

      dataPoints.lat = confirmedCasesSinceDay1Response.data[0].Lat;
      dataPoints.lng = confirmedCasesSinceDay1Response.data[0].Lon;

      return dispatch({
        type: GET_COUNTRY_CASES,
        payload: dataPoints,
        error: false,
      });
    } else {
      return dispatch({
        type: SET_ERROR,
        payload: true,
      });
    }
  };
