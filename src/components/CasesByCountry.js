import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  getCountryCasesAction,
  getAllAvailableCountriesAction,
} from "../redux/Actions";

import { Form } from "semantic-ui-react";

function CasesByCountry({
  countryOptions,
  getAllAvailableCountries,
  getCountryCases,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAvailableCountries());
  }, [dispatch]);

  const onDropdownOptionSelect = (e, result) => {
    console.log(result.value);
    dispatch(getCountryCases(result.value));
  };

  return (
    <div>
      <Form.Dropdown
        placeholder="Select Country"
        fluid
        selection
        search
        onChange={(result, e) => dispatch(getCountryCases(e.value))}
        //{(result) => dispatch(getCountryCases(result.value))}
        options={
          countryOptions &&
          countryOptions.map((c) => {
            return {
              key: c.ISO2,
              text: c.Country,
              value: c.Country,
            };
          })
        }
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    countryOptions: state.data,
    countryData: state.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllAvailableCountries: () => dispatch(getAllAvailableCountriesAction),
  getCountryCases: () => dispatch(getCountryCasesAction),
});

export default connect(mapStateToProps, mapDispatchToProps)(CasesByCountry);
