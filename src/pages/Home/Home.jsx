// ImageGallery.jsx
import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from your JSON file
    fetch("./src/data/regions.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData));
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <Grid container spacing={3}>
        {data &&
          data.regions.map((region) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={2}
              key={region.name}
              style={{ display: "flex", justifyContent: "center" }}
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
                  style={{
                    width: "100%",
                    height: "auto",

                    borderRadius: "8px",
                  }}
                />
                <h3
                  style={{
                    textAlign: "center",
                  }}
                >
                  {region.name}
                </h3>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Home;
