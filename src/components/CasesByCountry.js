import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountryCasesAction,
  getAllAvailableCountriesAction,
} from "../redux/Actions";

import { Form, Segment, List } from "semantic-ui-react";
import { Bar } from "react-chartjs-2";
import CountryLocationMap from "./CountryLocationMap";
import Error from "./Error";

import "../assets/MediaQueries.css";

function CasesByCountry(props) {
  const dispatch = useDispatch();

  const availableCountries = useSelector((state) => state.availableCountries);
  const countryCases = useSelector((state) => state.countryCases);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getAllAvailableCountriesAction());
  }, [dispatch]);

  const handleChange = (country) => {
    dispatch(getCountryCasesAction(country));
  };

  const getAllTypesOfCases = () => {
    const length = countryCases.countryData[0].length;
    return (
      <Segment secondary style={{ width: "80%", margin: "auto" }}>
        <List divided inverted relaxed>
          <List.Item>
            <List.Content>
              Total Number of Confirmed Cases As Of Today:{" "}
              <strong>
                {" "}
                {countryCases.countryData[0][
                  length - 1
                ].Confirmed.toLocaleString()}
              </strong>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              Total Number of Confirmed Deaths Due to Coronavirus As Of Today:{" "}
              <strong>
                {" "}
                {countryCases.countryData[0][
                  length - 1
                ].Deaths.toLocaleString()}
              </strong>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              Total Number of Recoveries from Coronavirus As Of Today:{" "}
              <strong>
                {" "}
                {countryCases.countryData[0][
                  length - 1
                ].Recovered.toLocaleString()}
              </strong>
            </List.Content>
          </List.Item>
        </List>
      </Segment>
    );
  };

  return (
    <>
      <Form.Dropdown
        icon="search"
        style={{
          width: "80%",
          margin: "15px auto",
          border: "1px solid #4477ff",
        }}
        placeholder="Select Country"
        fluid
        selection
        search
        onChange={(e, result) => handleChange(result.value)}
        options={
          availableCountries &&
          availableCountries.map((c) => {
            return {
              key: c.ISO2,
              text: c.Country,
              value: c.Country,
            };
          })
        }
      />

      {countryCases && (
        <>
          {getAllTypesOfCases()}
          <Segment
            style={{
              height: 600,
              width: 600,
              margin: "10px auto",
              position: "relative",
            }}
            id="chart-segment"
          >
            <Bar
              id="chart"
              data={countryCases}
              responsive={true}
              options={{
                legend: {
                  display: true,
                  position: "top",
                },
                scales: {
                  yAxes: [
                    {
                      scaleLabel: {
                        display: true,
                        labelString: " Number of Confirmed Cases",
                      },
                    },
                  ],
                  xAxes: [
                    {
                      scaleLabel: {
                        display: true,
                        labelString: "Date",
                      },
                    },
                  ],
                },
              }}
              height={200}
              width={200}
              style={{
                margin: "auto",
              }}
            />
          </Segment>

          <CountryLocationMap lat={countryCases.lat} lng={countryCases.lng} />
        </>
      )}

      {error && (
        <>
          <Error />
        </>
      )}
    </>
  );
}

export default CasesByCountry;
