import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getCountryCasesAction,
  getAllAvailableCountriesAction,
} from "../redux/Actions";

// Custom Components
import { Form, Segment, List } from "semantic-ui-react";
import { Bar } from "react-chartjs-2";
import CountryLocationMap from "./CountryLocationMap";
import Error from "./Error";
import Footer from "./Footer";

// Styling and Alerts
import "../assets/MediaQueries.css";
import Swal from "sweetalert2";

function CasesByCountry(props) {
  const dispatch = useDispatch();

  const availableCountries = useSelector((state) => state.availableCountries);
  const countryCases = useSelector((state) => state.countryCases);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getAllAvailableCountriesAction());
  }, [dispatch]);

  const handleChange = (country) => {
    if (country === "United Kingdom") {
      Swal.fire({
        title: "Sorry 😔",
        confirmButtonText: "OK",
        html:
          "The API used in this app doesn't have the total number of COVID-19 recoveries for the UK at present.<br /><br />" +
          "Head over <a href='https://www.coronatracker.com/country/united-kingdom/' target='_blank'>here</a>" +
          " to see the actual number of recoveries in the UK",
        icon: "error",
      });
    }

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
          availableCountries.map((country) => {
            return {
              key: country.ISO2,
              text: country.Country,
              value: country.Country,
            };
          })
        }
      />

      {countryCases ? (
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
          <Footer topMargin={100} />
        </>
      ) : null}

      {error ? (
        <>
          <Error />
          <Footer />
        </>
      ) : null}
    </>
  );
}

export default CasesByCountry;
