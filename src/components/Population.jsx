// src/components/Population.js
import React, { useState, useEffect } from "react";
import { fetchPopulationData } from "../utils/apiHelper";

const Population = ({ areaCode, month = "2023M12" }) => {
  const [population, setPopulation] = useState(null);

  useEffect(() => {
    const getPopulation = async () => {
      const data = await fetchPopulationData(areaCode, month);

      if (data) {
        // Accessing the population value from the JSON response structure
        const populationValue = data.value?.[0]; // Assumes population is in `data.value[0]`
        setPopulation(populationValue);
      } else {
        setPopulation("Data not available");
      }
    };

    getPopulation();
  }, [areaCode, month]);

  return (
    <span className="population-value-statFi">
      {population ? population : "Loading..."}
    </span>
  );
};

export default Population;
