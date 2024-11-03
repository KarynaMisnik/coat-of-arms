// Population.js
import React, { useEffect, useState } from "react";

const Population = ({ areaCode }) => {
  const [population, setPopulation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the API URL and request parameters
    const apiUrl =
      "https://pxdata.stat.fi:443/PxWeb/api/v1/en/StatFin/vaerak/statfin_vaerak_pxt_11s5.px";

    const requestPayload = {
      query: [
        {
          code: "Alue",
          selection: {
            filter: "item",
            values: [areaCode], // Use the areaCode prop passed to the component
          },
        },
        {
          code: "Kuukausi",
          selection: {
            filter: "item",
            values: ["2023M12"], // Example of a fixed date; adjust as needed
          },
        },
      ],
      response: { format: "json" },
    };

    // Fetch population data
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestPayload),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch population data");
        }

        const data = await response.json();

        // Extract the population value from the response
        const populationValue = data.data[0].values[0];
        setPopulation(populationValue);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [areaCode]);

  if (error) return <p>Error: {error}</p>;
  if (!population) return <p>Loading...</p>;

  return (
    <div>
      <p>{population}</p>
    </div>
  );
};

export default Population;
