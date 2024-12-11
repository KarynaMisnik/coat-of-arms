import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Box, Typography } from "@mui/material";
import regionsData from "../../data/regions.json";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center", // Ensures vertical alignment of content
  justifyContent: "space-between", // Adjust content placement
  borderRadius: "50px",
  border: "1px solid var(--white)",
  backgroundColor: "var(--black)",
  padding: "0.2rem 0.5rem", // Minimal padding to avoid excessive width
  width: "fit-content", // Shrinks the container to fit its content
  transition: "transform 0.3s linear",
  margin: "0.5rem", // Add space between the search bar and the navigation links

  "&:hover": {
    transform: "scale(1.03)",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0.15rem 0.4rem", // Slightly reduced padding for smaller screens
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  fontSize: "0.9rem", // Reduced font size to make the bar narrower
  lineHeight: 1.2, // Keeps the text compact
  "& .MuiInputBase-input": {
    padding: "0", // Removes internal padding
    margin: "0", // Removes additional margin
    width: "8ch", // Sets a specific width for the input
    transition: theme.transitions.create("width"),

    [theme.breakpoints.up("sm")]: {
      width: "10ch", // Default width for medium screens
    },
    [theme.breakpoints.down("sm")]: {
      width: "7ch", // Smaller width on small screens
    },
    [theme.breakpoints.down("xs")]: {
      width: "5ch", // Narrowest width for extra small screens
    },
  },
}));

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      const searchTerm = searchQuery.toLowerCase();

      // Search for matching region or municipality
      const matchedRegion = regionsData.regions.find(
        (region) => region.name.toLowerCase() === searchTerm
      );

      if (matchedRegion) {
        navigate(`/region/${matchedRegion.name}`);
        setSearchQuery("");
      } else {
        let matchedMunicipality = null;
        regionsData.regions.forEach((region) => {
          const foundMunicipality = region.images.find(
            (image) => image.municipality.toLowerCase() === searchTerm
          );
          if (foundMunicipality) {
            matchedMunicipality = {
              regionName: region.name,
              municipality: foundMunicipality.municipality,
            };
          }
        });

        if (matchedMunicipality) {
          navigate(
            `/municipality/${matchedMunicipality.regionName}/${matchedMunicipality.municipality}`
          );
          setSearchQuery("");
        } else {
          navigate("/search-error");
        }
      }
    }
  };

  return (
    <Box>
      <Search>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch} // Handles Enter key press
        />
      </Search>
    </Box>
  );
};

export default Searchbar;
