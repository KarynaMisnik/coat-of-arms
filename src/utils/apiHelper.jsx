// src/utils/apiHelper.js
export async function fetchPopulationData(areaCode, month) {
  const url =
    "https://pxdata.stat.fi:443/PxWeb/api/v1/en/StatFin/vaerak/statfin_vaerak_pxt_11s5.px";

  const requestData = {
    query: [
      {
        code: "Alue",
        selection: {
          filter: "item",
          values: [areaCode],
        },
      },
      {
        code: "Kuukausi",
        selection: {
          filter: "item",
          values: [month],
        },
      },
    ],
    response: {
      format: "json-stat2",
    },
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch population data:", error);
    return null;
  }
}

// src/utils/apiHelper.js

const OpenMeteoData = "https://api.open-meteo.com/v1/forecast";

/**
 * Fetch weather data from Open-Meteo API.
 * @param {number} lat - Latitude of the location.
 * @param {number} lon - Longitude of the location.
 * @returns {Promise<Object>} Weather data as JSON.
 */
export const fetchWeatherData = async (lat, lon) => {
  try {
    const response = await fetch(
      `${OpenMeteoData}?latitude=${lat}&longitude=${lon}&current_weather=true`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
