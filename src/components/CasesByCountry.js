import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  //getCountryCasesAction,
  getAllAvailableCountriesAction,
} from "../redux/Actions";

import { Form, Dropdown } from "semantic-ui-react";

function CasesByCountry({ data, getAllAvailableCountries }) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    getAllAvailableCountries();

    setCountryList(data);
    console.log(countryList);
  }, []);

  const onDropdownChange = (e, result) => {
    console.log("result");
    console.log(result);
  };

  return (
    <div>
      <Form.Dropdown
        placeholder="Select Country"
        fluid
        selection
        value={selectedCountry}
        //    onChange={setSelectedCountry()}
        options={
          data &&
          data.map((c) => {
            return {
              key: c.Country,
              text: c.Country,
              value: c.Country,
            };
          })
        }
        //      options={data}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = {
  getAllAvailableCountries: getAllAvailableCountriesAction,
  // getCountryCases: getCountryCasesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(CasesByCountry);
