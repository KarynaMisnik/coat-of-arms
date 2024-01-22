import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from your JSON file
    fetch("./src/data/regions.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData));
  }, []);

  return (
    <div style={{ padding: ".5rem" }}>
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
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <NavLink
                className="nav-link"
                to={`/region/${region.name}`}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Paper
                  elevation={3}
                  style={{
                    padding: "1rem",
                    border: "2px 2px 2px 0px solid black",
                    boxShadow: "6px 8px 15px -1px #000000",
                  }}
                >
                  <img
                    src={region.src}
                    alt={region.alt}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <h2
                    style={{
                      textAlign: "center",
                      fontSize: "var(--h2)",
                      fontWeight: "var(--boldest)",
                    }}
                  >
                    {region.name}
                  </h2>
                </Paper>
              </NavLink>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Home;
