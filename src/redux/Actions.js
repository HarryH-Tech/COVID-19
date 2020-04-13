import axios from "axios";

export const GET_WORLDWIDE_SUMMARY = "GET_WORLDWIDE_SUMMARY";
// export const GET_COUNTRY_CASES = "GET_COUNTRY_CASES";
export const GET_ALL_AVAILABLE_COUNTRIES = "GET_ALL_COUNTRIES";

export const getWorldwideSummaryAction = () => async (dispatch, getState) => {
  // const response = await axios
  //   .get
  //   // "https://cors-anywhere.herokuapp.com/" +
  //   // "process.env.REACT_APP_GET_WORLDWIDE_SUMMARY"
  //   ();
  // console.log(response);
  // return dispatch({
  //   type: GET_WORLDWIDE_SUMMARY,
  //   payload: response.data,
  // });
};

export const getAllAvailableCountriesAction = () => async (
  dispatch,
  getState
) => {
  const response = await axios.get("https://api.covid19api.com/countries");
  console.log(response);

  return dispatch({
    type: GET_ALL_AVAILABLE_COUNTRIES,
    payload: response.data,
  });
};

// export const getCountryCasesAction = () => async (
//   dispatch,
//   getState,
//   country
// ) => {
//   const response = await axios.get(
//     `https://api.covid19api.com/dayone/country/${country}/status/confirmed`
//   );

//   return dispatch({
//     type: GET_COUNTRY_CASES,
//     payload: response.data,
//   });
// };
