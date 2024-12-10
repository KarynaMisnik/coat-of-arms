import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { color, display } from "@mui/system";
import { Button } from "@mui/material";
import OldMunicipalities from "../Municipality/OldMunicipalities";

const Region = () => {
  const { regionName } = useParams();
  const [regionData, setRegionData] = useState(null);
  const navigate = useNavigate();
  const [currentRegionIndex, setCurrentRegionIndex] = useState(0);

  useEffect(() => {
    // Dynamic import using import()
    import("/src/data/regions.json")
      .then((module) => module.default)
      .then((jsonData) => {
        setRegionData(jsonData.regions);

        // Find the index of the current region
        const selectedIndex = jsonData.regions.findIndex(
          (region) => region.name === regionName
        );
        setCurrentRegionIndex(selectedIndex);
      })
      .catch((error) => {
        console.error("Error importing region data:", error);
      });
  }, [regionName]);

  if (!regionData) {
    return <div>Loading...</div>;
  }

  const prevRegionIndex =
    currentRegionIndex === 0 ? regionData.length - 1 : currentRegionIndex - 1;
  const nextRegionIndex =
    currentRegionIndex === regionData.length - 1 ? 0 : currentRegionIndex + 1;

  const prevRegion = regionData[prevRegionIndex];
  const nextRegion = regionData[nextRegionIndex];

  // Navigation Handlers
  const handleNavigate = (regionName) => {
    navigate(`/region/${regionName}`);
  };

  const currentRegion = regionData[currentRegionIndex];

  return (
    <div className="region-component-wrapper">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <Button
          variant="contained"
          onClick={() => handleNavigate(prevRegion.name)}
        >
          {prevRegion.name}
        </Button>
        <Button
          variant="contained"
          onClick={() => handleNavigate(nextRegion.name)}
        >
          {nextRegion.name}
        </Button>
      </div>
      <div className="region-map-wrapper">
        <Paper elevation={3} className="paper-region-info">
          <div className="content-paper-region-info">
            <div className="regionIcon-regionName">
              <img
                className="regionIcon"
                src={currentRegion.src}
                alt={currentRegion.alt}
              />
              <h1 className="regionName" style={{ fontSize: "var(--h1)" }}>
                {currentRegion.name}
              </h1>
            </div>
            <h3>{currentRegion.regionDescription}</h3>
          </div>
        </Paper>

        <Paper sx={{ flex: 1 }}>
          <div className="content-paper-region-location">
            <img
              className="locationImg"
              src={currentRegion.location}
              alt={currentRegion.locationAlt}
            />
          </div>
        </Paper>
      </div>
      <Grid container spacing={2}>
        {currentRegion.images.map((image) => (
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
              to={`/municipality/${currentRegion.name}/${image.municipality}`}
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
        <OldMunicipalities
          consolidatedData={currentRegion.consolidated}
          regionName={currentRegion.name}
        />
      </div>
    </div>
  );
};

export default Region;
