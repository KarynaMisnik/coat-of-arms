import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import Population from "../../components/Population";

const Municipality = () => {
  const { regionName, municipalityName } = useParams();
  const [municipalityData, setMunicipalityData] = useState(null);

  useEffect(() => {
    // Fetch data for the specific municipality based on regionName and municipalityName
    import("/src/data/regions.json")
      .then((module) => module.default)
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
    <div className="municipality-page-wrapper">
      <Paper className="paper-municipality-page" elevation={3}>
        <div className="municipality-card-content">
          <img className="municipality-img" src={municipalityData.url} />
          <h1>{municipalityData.municipality}</h1>
        </div>
        <p className="population-info">Population:</p>
        <Population areaCode="KU020" />
        <p className="weather-info">Weather Info: -3</p>
      </Paper>
    </div>
  );
};

export default Municipality;
