/*=== REACT HOOKS ===*/
import React, { useState, useEffect } from "react";
/*=== CUSTOM COMPONENTS ===*/
import { fetchPopulationData } from "../utils/apiHelper";
/*=== MUI ICONS ===*/
import GroupsIcon from "@mui/icons-material/Groups";

const Population = ({ areaCode, month = "2023M12" }) => {
  const [population, setPopulation] = useState(null);

  useEffect(() => {
    const getPopulation = async () => {
      const data = await fetchPopulationData(areaCode, month);

      if (data) {
        // Accessing the population value from the JSON response structure
        const populationValue = data.value?.[0]; // assumes population in `data.value[0]`
        setPopulation(populationValue);
      } else {
        setPopulation("Data not available");
      }
    };

    getPopulation();
  }, [areaCode, month]);

  return (
    <div className="population-value-statFi">
      <GroupsIcon
        className="mui-icon population-icon"
        style={{ marginRight: ".5rem" }}
      />{" "}
      {population ? population : "Loading..."}
    </div>
  );
};

export default Population;
