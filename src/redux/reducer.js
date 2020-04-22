import {
  GET_WORLDWIDE_SUMMARY,
  GET_ALL_AVAILABLE_COUNTRIES,
  GET_COUNTRY_CASES,
  SET_ERROR,
  /////Game Imports/////
  CREATE_BOARD,
} from "./Actions";

const covidInitialState = {
  data: "",
  availableCountries: "",
  countryCases: "",
  allTypesOfCountryCases: "",
  error: false,
};

export const covidReducer = (state = covidInitialState, action) => {
  switch (action.type) {
    case GET_WORLDWIDE_SUMMARY:
      return {
        ...state,
        data: action.payload,
      };

    case GET_ALL_AVAILABLE_COUNTRIES:
      return {
        ...state,
        availableCountries: action.payload,
      };

    case GET_COUNTRY_CASES:
      return {
        ...state,
        countryCases: action.payload,
        error: false,
      };

    case SET_ERROR:
      return {
        ...state,
        countryCases: "",
        error: action.payload,
      };

    default:
      return state;
  }
};
