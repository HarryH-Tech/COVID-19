import {
  GET_WORLDWIDE_SUMMARY,
  GET_ALL_AVAILABLE_COUNTRIES,
  GET_COUNTRY_CASES,
} from "./Actions";

const initialState = {
  data: "",
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WORLDWIDE_SUMMARY:
      console.log(action.payload);
      return {
        ...state,
        data: action.payload,
      };

    case GET_ALL_AVAILABLE_COUNTRIES:
      console.log(action.payload);
      return {
        ...state,
        data: action.payload,
      };

    case GET_COUNTRY_CASES:
      console.log(action.payload);
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
