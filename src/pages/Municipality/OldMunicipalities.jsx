/*=== REACT HOOKS, OTHERS ===*/
import React from "react";
/*=== MUI COMPONENTS ===*/
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const OldMunicipalities = ({ consolidatedData, regionName }) => {
  if (!consolidatedData || consolidatedData.length === 0) {
    return null; // No old municipalities to show, error
  }

  return (
    <div className="oldMunicipalities-grid">
      <Grid container spacing={2}>
        {consolidatedData.map((oldMunicipality, index) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            lg={3}
            xl={2}
            key={`${regionName}-${oldMunicipality.oldMunicipality}-${index}`} // Unique key, added bc old municipalities have repeating names, caused errors
          >
            <Paper
              className="paper-oldMunicipality-content-container"
              elevation={3}
              style={{ padding: "1rem" }}
            >
              {/*
              <h3 className="previous-municipalities-name">
                {oldMunicipality.oldMunicipality}
              </h3>
*/}
              <img
                className="oldMunicipalities-img"
                src={oldMunicipality.url}
                alt={oldMunicipality.alt}
              />
              <h4
                className="previous-municipalities-name"
                style={{ textAlign: "center" }}
              >
                {oldMunicipality.oldName}
              </h4>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OldMunicipalities;
