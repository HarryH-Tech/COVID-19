import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountryCasesAction,
  getAllAvailableCountriesAction,
} from "../redux/Actions";

import { Form, Segment, List, Icon, Grid } from "semantic-ui-react";
import { Bar } from "react-chartjs-2";
import CountryLocationMap from "./CountryLocationMap";

function CasesByCountry(props) {
  const dispatch = useDispatch();

  const availableCountries = useSelector((state) => state.availableCountries);
  const countryCases = useSelector((state) => state.countryCases);
  const error = useSelector((state) => state.error);

  console.log(countryCases);

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

      {countryCases ? (
        <>
          {getAllTypesOfCases()}
          <Segment
            style={{
              width: "95%",
              margin: "10px auto",
            }}
          >
            <Bar
              data={countryCases}
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
              height={400}
              width={800}
            />
          </Segment>

          <CountryLocationMap lat={countryCases.lat} lng={countryCases.lng} />
        </>
      ) : (
        ""
      )}

      {error ? (
        <Segment
          inverted
          color="red"
          tertiary
          style={{ width: "80%", margin: "auto" }}
          textAlign="center"
        >
          <Icon name="star" size="huge" />
          <h2>
            {" "}
            This country does not have any reported cases or we don't have any
            information available about that country at the moment.
          </h2>
        </Segment>
      ) : (
        ""
      )}
    </>
  );
}

export default CasesByCountry;
