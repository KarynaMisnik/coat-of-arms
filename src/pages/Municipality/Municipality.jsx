import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import Population from "../../components/Population";
import Map from "../../components/Map";
import Weather from "../../components/Weather";

const Municipality = () => {
  const { regionName, municipalityName } = useParams();
  const [municipalityData, setMunicipalityData] = useState(null);

  useEffect(() => {
    // Fetch data for the specific municipality based on regionName and municipalityName

    {
      /*
    import("/src/data/regions.json")
      .then((module) => module.default)
      .then((jsonData) => {
        TESTING
*/
    }

    fetch("/src/data/regions.json")
      .then((response) => response.json())
      .then((jsonData) => {
        // Find the selected region in the data
        const selectedRegion = jsonData.regions.find(
          (region) => region.name === regionName
        );

        if (!selectedRegion) {
          console.error(`Region "${regionName}" not found in data.`);
          return;
        }

        // Find the selected municipality in the region
        const selectedMunicipality = selectedRegion.images.find(
          (image) => image.municipality === municipalityName
        );

        if (!selectedMunicipality) {
          console.error(
            `Municipality "${municipalityName}" not found in region "${regionName}".`
          );
          return;
        }

        setMunicipalityData(selectedMunicipality);
      })
      .catch((error) => {
        console.error("Error fetching municipality data:", error);
      });
  }, [regionName, municipalityName]);

  if (!municipalityData) {
    return <div>Loading...</div>;
  }
  const { lat, lon, municipality } = municipalityData;

  if (!lat || !lon) {
    return <div>Location data is not available for this municipality.</div>;
  }

  return (
    <div className="municipality-page-wrapper">
      <Paper className="paper-municipality-page" elevation={3}>
        <div className="municipality-card-content">
          <img
            className="municipality-img"
            src={municipalityData.url}
            alt={municipalityData.municipality}
          />
          <h1>{municipalityData.municipality}</h1>
        </div>
        <p>Region: {regionName}</p>
        <p className="population-info">
          Population:
          <Population areaCode={municipalityData.areaCode} />
          {/* Use dynamic areaCode */}
        </p>

        <Weather lat={lat} lon={lon} municipalityName={municipalityName} />
      </Paper>
      <div className="municipality-img-description-wrapper">
        <Paper
          className="paper-municipality-page-fullImg"
          elevation={3}
          sx={{ flex: "1" }}
        >
          <div className="municipality-img-content-container">
            <p className="municipality-description blazon">
              The blazon reads: {municipalityData.blazon}
            </p>
            <img
              className="municipality-full-img"
              src={municipalityData.url}
              alt={municipalityData.municipality}
              loading="lazy"
            />
            <p className="municipality-description designer">
              Designed by: {municipalityData.designer}
            </p>
          </div>
        </Paper>

        <Paper
          className="paper-municipality-page-description"
          elevation={3}
          sx={{ flex: "1" }}
        >
          <div>
            <p className="municipality-description details">
              {municipalityData.municipalityDescription}
            </p>
            <div id="map">
              <Map lat={lat} lon={lon} municipality={municipality} />
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Municipality;
