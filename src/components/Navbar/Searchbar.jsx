/*=== REACT HOOKS AND OTHERS ===*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Box, Typography } from "@mui/material";
/*=== JSON DATA ===*/
import regionsData from "../../data/regions.json";

/*~~~ Customizing Search bar component here ~~~*/
const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "3px",
  borderBottom: "1px solid var(--gray)",
  borderRight: "1px solid var(--gray)",
  backgroundColor: "var(--black)",
  padding: "0.2rem 0.5rem",
  width: "fit-content", //to fit content in container
  transition: "transform 0.3s linear",
  margin: "0.5rem",

  "&:hover": {
    transform: "scale(1.03)",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0.15rem 0.4rem", // for mobile screen
  },
}));

/*~~~ Customizing Search bar placeholder here ~~~*/
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  fontSize: "0.9rem",
  lineHeight: 1.2,
  "& .MuiInputBase-input": {
    padding: "0",
    margin: "0",
    width: "8ch", // charachters
    transition: theme.transitions.create("width"),

    [theme.breakpoints.up("sm")]: {
      width: "10ch",
    },
    [theme.breakpoints.down("sm")]: {
      width: "7ch",
    },
    [theme.breakpoints.down("xs")]: {
      width: "5ch",
    },
  },
}));

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const normalize = (str) => str.trim().toLowerCase();

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      const searchTerm = normalize(searchQuery);

      // Try to match region (using includes)
      const matchedRegion = regionsData.regions.find((region) =>
        normalize(region.name).includes(searchTerm)
      );

      if (matchedRegion) {
        navigate(`/region/${matchedRegion.name}`);
        setSearchQuery("");
      } else {
        let matchedMunicipality = null;

        regionsData.regions.forEach((region) => {
          const foundMunicipality = region.images.find((image) =>
            normalize(image.municipality).includes(searchTerm)
          );
          if (foundMunicipality && !matchedMunicipality) {
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
          onKeyDown={handleSearch} // on Enter press
        />
      </Search>
    </Box>
  );
};

export default Searchbar;
