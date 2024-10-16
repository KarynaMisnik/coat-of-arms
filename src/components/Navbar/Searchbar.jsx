import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Box, Typography } from "@mui/material";
import regionsData from "../../data/regions.json";

const Search = styled("div")(({ theme }) => ({
  borderRadius: "50px",
  border: "1px solid var(--white)",
  margin: "0  10px",
  padding: 1,
  backgroundColor: "var(--black)",
  transition: "transform .3s linear",

  "&:hover": {
    transform: "scale(1.03)",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    margin: "0 10px",

    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "10ch",
    },
    [theme.breakpoints.up("xs")]: {
      width: "15ch",
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
