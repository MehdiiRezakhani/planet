/**
 * Get the names of films based on their URLs.
 * @param {Array<{ url: string; title: string }>} films - Array of film objects with url and title properties.
 * @param {string[]} planetFilms - Array of film URLs associated with a planet.
 * @returns {string[]} - Array of film titles corresponding to the planet's film URLs.
 */
export const getFilmsName = (
  films: { url: string; title: string }[],
  planetFilms: string[]
) =>
  // Map each planet film URL to its corresponding film title
  planetFilms.map((film) => films.find((item) => item.url === film)?.title);
