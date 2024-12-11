import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Randomizer = () => {
  const navigate = useNavigate();
  const [regions, setRegions] = useState([]);

  // fetching regions from JSON
  useEffect(() => {
    fetch("/data/regions.json")
      .then((response) => response.json())
      .then((data) => {
        setRegions(data.regions); // Save to state
      })
      .catch((error) => {
        console.error("Error fetching regions data:", error);
      });
  }, []);

  // random municipality pick
  const getRandomMunicipality = () => {
    if (regions.length === 0) return null;

    // random region pick
    const randomRegion = regions[Math.floor(Math.random() * regions.length)];

    // random municipality pick from selected region
    const randomMunicipality =
      randomRegion.images[
        Math.floor(Math.random() * randomRegion.images.length)
      ];

    return {
      regionName: randomRegion.name,
      municipalityName: randomMunicipality.municipality,
    };
  };

  // handler for btn Surprise me
  const handleSurpriseMeClick = () => {
    const randomMunicipality = getRandomMunicipality();

    if (!randomMunicipality) {
      console.error("No random municipality found.");
      return;
    }

    // redirects to random municipality page
    const { regionName, municipalityName } = randomMunicipality;
    navigate(`/municipality/${regionName}/${municipalityName}`);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleSurpriseMeClick}>
        Surprise Me!
      </Button>
    </div>
  );
};

export default Randomizer;
