// src/components/Population.js

import React, { useState, useEffect } from "react";
import { fetchPopulationData } from "../utils/apiHelper";

const Population = ({ areaCode }) => {
  const [population, setPopulation] = useState(null);

  useEffect(() => {
    const getPopulationData = async () => {
      const data = await fetchPopulationData(areaCode);
      setPopulation(data);
    };

    getPopulationData();
  }, [areaCode]);

  return (
    <div>
      {population !== null ? (
        <span>{population}</span>
      ) : (
        <span>Loading population data...</span>
      )}
    </div>
  );
};

export default Population;
