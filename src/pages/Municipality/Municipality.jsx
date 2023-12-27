import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";

const Municipality = () => {
  const { regionName, municipalityName } = useParams();
  const [municipalityData, setMunicipalityData] = useState(null);

  useEffect(() => {
    // Fetch data for the specific municipality based on regionName and municipalityName
    fetch(`/src/data/regions.json`)
      .then((response) => response.json())
      .then((jsonData) => {
        // Find the selected region in the data
        const selectedRegion = jsonData.regions.find(
          (region) => region.name === regionName
        );

        // Find the selected municipality in the region
        const selectedMunicipality = selectedRegion.images.find(
          (image) => image.municipality === municipalityName
        );

        setMunicipalityData(selectedMunicipality);
      })
      .catch((error) => {
        console.error("Error fetching municipality data:", error);
      });
  }, [regionName, municipalityName]);

  if (!municipalityData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <Paper
        elevation={3}
        style={{
          marginBottom: "1rem",
          padding: "1rem",
        }}
      >
        <div style={{ display: "flex", paddingBottom: "1rem" }}>
          <img
            src={municipalityData.url}
            style={{
              maxWidth: "35px",
              maxHeight: "auto",
              marginRight: ".5rem",
            }}
          />
          <h1>{municipalityData.municipality}</h1>
        </div>
        <p>Population: 112</p>
        <p>Weather Info: -3</p>
      </Paper>
    </div>
  );
};

export default Municipality;
