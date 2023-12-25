{
  /* MAYBE I SHOULD SPLIT LOCATION AND MUNI-S GRID INTO 2 COMPONENTS */
}

import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useParams, NavLink } from "react-router-dom";

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
    <div style={{ padding: "1rem" }}>
      <Paper
        elevation={3}
        style={{
          marginBottom: "1rem",
          padding: "1rem",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            paddingRight: ".5rem",
          }}
        >
          <div style={{ display: "flex", paddingBottom: "1rem" }}>
            <img
              src={regionData.src}
              alt={regionData.alt}
              style={{
                maxWidth: "30px",
                maxHeight: "auto",
                marginRight: ".5rem",
              }}
            />
            <h1 style={{ fontSize: "var(--h1)" }}>{regionData.name}</h1>
          </div>
          <h3 style={{ fontSize: "var(--h3)" }}>
            {regionData.regionDescription}
          </h3>
        </div>
        <div>
          <img
            className="location-img"
            src={regionData.location}
            alt={regionData.locationAlt}
            style={{
              maxWidth: "100%",
              maxHeight: "auto",
              objectFit: "cover",
            }}
          />
        </div>
      </Paper>

      <Grid container spacing={2}>
        {regionData.images.map((image) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            lg={3}
            xl={2}
            key={image.municipality}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NavLink
              className="nav-link"
              to={`/municipality/${regionName}/${image.municipality}`}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Paper elevation={3} style={{ padding: "1rem", flex: 1 }}>
                <img
                  src={image.url}
                  alt={image.alt}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    alignItems: "center",
                  }}
                />
                <h3 style={{ textAlign: "center", fontSize: "var(--h3)" }}>
                  {image.municipality}
                </h3>
              </Paper>
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Region;
