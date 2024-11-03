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
        <p className="population-info">
          Population:
          <Population areaCode={municipalityData.areaCode} />{" "}
          {/* Use dynamic areaCode */}
        </p>

        <p className="weather-info">Weather Info: -3</p>
      </Paper>
    </div>
  );
};

export default Municipality;
