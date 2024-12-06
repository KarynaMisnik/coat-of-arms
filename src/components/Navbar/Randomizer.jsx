import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Randomizer = () => {
  const navigate = useNavigate();

  // Fetch the regions data from the JSON file dynamically
  const fetchRegions = async () => {
    try {
      const response = await fetch(
        `${process.env.PUBLIC_URL}/data/regions.json`
      );
      const data = await response.json();
      return data.regions;
    } catch (error) {
      console.error("Error fetching regions data:", error);
      return [];
    }
  };

  // Function to pick a random municipality
  const getRandomMunicipality = async () => {
    const regions = await fetchRegions();
    if (regions.length === 0) return null;

    // Randomly pick a region
    const randomRegion = regions[Math.floor(Math.random() * regions.length)];

    // Randomly pick a municipality from the selected region
    const randomMunicipality =
      randomRegion.images[
        Math.floor(Math.random() * randomRegion.images.length)
      ];

    return {
      regionName: randomRegion.name,
      municipalityName: randomMunicipality.municipality,
    };
  };

  // Handler for the Surprise Me button click
  const handleSurpriseMeClick = async () => {
    const randomMunicipality = await getRandomMunicipality();

    if (!randomMunicipality) {
      console.error("No random municipality found.");
      return;
    }

    // Navigate to the random municipality's page
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

{
  /*
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Randomizer = () => {
  const navigate = useNavigate();
  const [regions, setRegions] = useState([]);

  // Fetch the regions data from the JSON file
  useEffect(() => {
    fetch("/src/data/regions.json")
      .then((response) => response.json())
      .then((data) => {
        setRegions(data.regions); // Save the regions data to state
      })
      .catch((error) => {
        console.error("Error fetching regions data:", error);
      });
  }, []);

  // Function to pick a random municipality
  const getRandomMunicipality = () => {
    if (regions.length === 0) return null;

    // Randomly pick a region
    const randomRegion = regions[Math.floor(Math.random() * regions.length)];

    // Randomly pick a municipality from the selected region
    const randomMunicipality =
      randomRegion.images[
        Math.floor(Math.random() * randomRegion.images.length)
      ];

    return {
      regionName: randomRegion.name,
      municipalityName: randomMunicipality.municipality,
    };
  };

  // Handler for the Surprise Me button click
  const handleSurpriseMeClick = () => {
    const randomMunicipality = getRandomMunicipality();

    if (!randomMunicipality) {
      console.error("No random municipality found.");
      return;
    }

    // Navigate to the random municipality's page
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

*/
}
