{
  /* MAYBE I SHOULD SPLIT LOCATION AND MUNI-S GRID INTO 2 COMPONENTS */
}

import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useParams, NavLink } from "react-router-dom";
import { color, display } from "@mui/system";

const Region = () => {
  const { regionName } = useParams();
  const [regionData, setRegionData] = useState(null);

  useEffect(() => {
    // Dynamic import using import()
    import("/src/data/regions.json")
      .then((module) => module.default)
      .then((jsonData) => {
        // Find the selected region in the imported data
        const selectedRegion = jsonData.regions.find(
          (region) => region.name === regionName
        );
        setRegionData(selectedRegion);
      })
      .catch((error) => {
        console.error("Error importing region data:", error);
      });
  }, [regionName]);

  if (!regionData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="region-component-wrapper">
      <div className="region-map-wrapper">
        <Paper elevation={3} className="paper-region-info">
          <div className="content-paper-region-info">
            <div className="regionIcon-regionName">
              <img
                className="regionIcon"
                src={regionData.src}
                alt={regionData.alt}
              />
              <h1 className="regionName" style={{ fontSize: "var(--h1)" }}>
                {regionData.name}
              </h1>
            </div>
            <h3>{regionData.regionDescription}</h3>
          </div>
        </Paper>

        <Paper sx={{ flex: 1 }}>
          <div className="content-paper-region-location">
            <img
              className="locationImg"
              src={regionData.location}
              alt={regionData.locationAlt}
            />
          </div>
        </Paper>
      </div>
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
            id="municipalities-grid"
          >
            <NavLink
              className="nav-link nav-link-muniipalities"
              to={`/municipality/${regionName}/${image.municipality}`}
            >
              <Paper elevation={3} style={{ padding: "1rem", flex: 1 }}>
                <img
                  className="imgMunicipality"
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                />
                <h3 className="municipality-name">{image.municipality}</h3>
              </Paper>
            </NavLink>
          </Grid>
        ))}
      </Grid>
      <div className="oldMunicipalities-container">
        <h1 className="oldMunicipalities-name">Old municipalities</h1>
        {/* ATTENTION: HERE WILL BE OLD MUNICIPALITIES GRID */}

        <Grid container spacing={2}>
          {regionData.consolidated.map((consolidatedImg) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={4}
              lg={3}
              xl={2}
              key={consolidatedImg.oldMunicipality}
              id="oldMunicipalities-grid"
            >
              {/* <NavLink
                className="nav-link oldMunicipality-nav-lik"
                to={`/municipality/${regionName}/${consolidatedImg.oldMunicipality}`}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              > */}
              <Paper elevation={3} style={{ padding: "1rem", flex: 1 }}>
                {/* Give them class name, old munis should have small font, look at those which have mlk.  */}
                <h3 style={{ textAlign: "center", fontSize: "var(--h3)" }}>
                  {consolidatedImg.oldName}
                </h3>
                <img
                  className="oldMunicipalities-img"
                  src={consolidatedImg.url}
                  alt={consolidatedImg.alt}
                />
                <h4 className="previousMunicipalities-name" s>
                  {consolidatedImg.oldMunicipality}
                </h4>
              </Paper>
              {/*</NavLink>*/}
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Region;
