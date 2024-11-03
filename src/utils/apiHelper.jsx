// src/utils/apiHelper.js

export async function fetchPopulationData(areaCode) {
  const url = `https://pxdata.stat.fi:443/PxWeb/api/v1/en/StatFin/vaerak/statfin_vaerak_pxt_11s5.px`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    // Find the data for the provided areaCode
    const populationData = data.find((item) => item.key[0] === areaCode);

    // Return the population value if found, or null otherwise
    return populationData ? populationData.values[0] : null;
  } catch (error) {
    console.error("Failed to fetch population data:", error);
    return null;
  }
}
