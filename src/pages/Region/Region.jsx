import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";

const Region = () => {
  const { regionName } = useParams();
  const [regionData, setRegionData] = useState(null);

  useEffect(() => {
    // Fetch data from your JSON file
    fetch("/src/data/regions.json")
      .then((response) => response.json())
      .then((jsonData) => {
        // Find the selected region in the data
        const selectedRegion = jsonData.regions.find(
          (region) => region.name === regionName
        );
        setRegionData(selectedRegion);
      })
      .catch((error) => {
        console.error("Error fetching region data:", error);
      });
  }, [regionName]);

  if (!regionData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ background: "gray", padding: "1rem" }}>
      <h1>{regionData.name}</h1>
      <Grid container spacing={2}>
        {regionData.images.map((image) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={image.municipality}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Paper elevation={3} style={{ padding: "1rem", flex: 1 }}>
              <img
                src={image.url}
                alt={image.alt}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <p>{image.municipality}</p>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Region;
