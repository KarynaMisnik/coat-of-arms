import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Dynamic import using import()
    import("/src/data/regions.json")
      .then((module) => module.default)
      .then((jsonData) => setData(jsonData))
      .catch((error) => {
        console.error("Error importing region data:", error);
      });
  }, []);

  return (
    <div className="home-page-wrapper">
      <Grid container spacing={3}>
        {data &&
          data.regions.map((region) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={4}
              lg={3}
              xl={2}
              key={region.name}
              id="regions-grid"
            >
              <NavLink
                className="nav-link nav-link-regions"
                to={`/region/${region.name}`}
                s
              >
                <Paper elevation={3} className="paper-region-img">
                  <img
                    src={region.src}
                    alt={region.alt}
                    loading="lazy"
                    className="img-region"
                  />
                  <h2 className="region-name">{region.name}</h2>
                </Paper>
              </NavLink>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Home;
