/*=== REACT HOOKS AND OTHERS ===*/
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
/*=== MUI COMPONENTS ===*/
import Paper from "@mui/material/Paper";

/*=== CUSTOM COMPONENTS ===*/
import Population from "../../components/Population";
import Map from "../../components/Map";
import Weather from "../../components/Weather";
import NavigationButton from "../../components/NavigationButton";

const Municipality = () => {
  const { regionName, municipalityName } = useParams();
  const navigate = useNavigate();
  const [municipalityData, setMunicipalityData] = useState(null);
  const [regionData, setRegionData] = useState(null);

  useEffect(() => {
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

        setRegionData(selectedRegion);

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

  if (!municipalityData || !regionData) {
    return <div>Loading...</div>;
  }

  const { lat, lon, municipality } = municipalityData;

  if (!lat || !lon) {
    return <div>Location data is not available for this municipality.</div>;
  }

  // Get the index of the current municipality
  const currentIndex = regionData.images.findIndex(
    (image) => image.municipality === municipalityName
  );

  // Calculate previous and next municipality indices
  const prevIndex =
    currentIndex === 0 ? regionData.images.length - 1 : currentIndex - 1;
  const nextIndex =
    currentIndex === regionData.images.length - 1 ? 0 : currentIndex + 1;

  const prevMunicipality = regionData.images[prevIndex];
  const nextMunicipality = regionData.images[nextIndex];

  // Handlers for navigation
  const handleGoBackToRegion = () => {
    navigate(`/region/${regionName}`);
  };

  const handleNavigateToMunicipality = (municipality) => {
    navigate(`/municipality/${regionName}/${municipality}`);
  };

  return (
    <div className="municipality-page-wrapper">
      <div className="municipality-navigation-buttons-container">
        <NavigationButton
          onClick={() =>
            handleNavigateToMunicipality(prevMunicipality.municipality)
          }
        >
          Previous
        </NavigationButton>
        <NavigationButton onClick={handleGoBackToRegion}>
          Region
        </NavigationButton>
        <NavigationButton
          onClick={() =>
            handleNavigateToMunicipality(nextMunicipality.municipality)
          }
        >
          Next
        </NavigationButton>
      </div>

      <Paper className="paper-municipality-page" elevation={3}>
        <div className="municipality-card-content">
          <img
            className="municipality-img"
            src={municipalityData.url}
            alt={municipalityData.municipality}
          />
          <h1>{municipalityData.municipality}</h1>
        </div>
        <p>Region: {regionName}</p>
        <p className="population-info">
          <Population areaCode={municipalityData.areaCode} />
        </p>

        <Weather lat={lat} lon={lon} municipalityName={municipalityName} />
      </Paper>
      <div className="municipality-img-description-wrapper">
        <Paper
          className="paper-municipality-page-fullImg"
          elevation={3}
          sx={{ flex: "1" }}
        >
          <div className="municipality-img-content-container">
            <p className="municipality-description ">
              <span className="blazon">The blazon reads:</span>{" "}
              {municipalityData.blazon}
            </p>
            <img
              className="municipality-full-img"
              src={municipalityData.url}
              alt={municipalityData.municipality}
              loading="lazy"
            />
            <p className="municipality-description ">
              <span className="designer">Designed by:</span>{" "}
              {municipalityData.designer}
            </p>
          </div>
        </Paper>

        <Paper
          className="paper-municipality-page-description"
          elevation={3}
          sx={{ flex: "1" }}
        >
          <div>
            <p className="municipality-description details">
              {municipalityData.municipalityDescription}
            </p>

            <Map lat={lat} lon={lon} municipality={municipality} />
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Municipality;
