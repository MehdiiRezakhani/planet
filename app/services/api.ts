const BASE_URL = "https://swapi.dev/api"; // Base URL for the Star Wars API

/**
 * Fetch data from a given URL.
 * @param {string} url - The endpoint to fetch data from, appended to the BASE_URL.
 * @returns {Promise<any>} - A promise that resolves to the JSON response from the API.
 * @throws {Error} - Throws an error if the network response is not ok.
 */
const fetchData = async (url: string) => {
  const response = await fetch(BASE_URL + url); // Fetch data from the full URL

  if (!response.ok) throw new Error("Network response was not ok"); // Throw an error if the response is not ok

  return response.json(); // Parse and return the JSON response
};

export { BASE_URL, fetchData };
