import { create } from "zustand";
import { BASE_URL, fetchData } from "../services/api";
import { getFilmsName } from "../utils/planet.utl";
import { PlanetType } from "../types/planet.type";

type StateType = {
  getData: (allFilms?: object, allPlanets?: PlanetType[]) => void; // Function to fetch and update data
  loading: boolean; // Flag indicating if data is currently being loaded
  filmPlanets: PlanetType[]; // Array of planet data
  allPlanets: PlanetType[]; // Array of planet data
  film: string; // Title of the selected film
  films?: object; // Object containing film data
};

// Initial state values
const initialState = {
  loading: false, // Initially not loading
  film: "", // No film selected initially
  films: undefined, // No films data initially
  filmPlanets: [], // No planet data initially
  allPlanets: [], // No planet data initially
};

const useStore = create<StateType>((set) => ({
  ...initialState, // Spread the initial state
  getData: async (allFilms, allPlanets = []): Promise<void> => {
    set({ loading: true, filmPlanets: [] }); // Set loading state and clear existing data

    const randomIndex = Math.floor(Math.random() * 5); // Generate a random index to select a film
    const films = allFilms || (await fetchData("/films/")).results; // Fetch films data if not provided
    const randomFilm = films[randomIndex]; // Select a random film

    // Extract planet URLs from the selected film, filter out those already in allPlanets to prevent extra API calls
    const newPlanetsUrls = randomFilm.planets
      .filter((url: string) => !allPlanets.some((planet) => planet.url === url))
      .map((url: string) => url.split(BASE_URL)[1]);

    // Fetch planet data for the filtered URLs
    const newPlanets = await Promise.all(
      newPlanetsUrls.map((url: string) => fetchData(url))
    );

    // Add film names to each newly fetched planet
    const newPlanetsWithFilmNames = newPlanets.map((planet) => ({
      ...planet,
      filmNames: getFilmsName(films, planet.films),
    }));

    // Combine the existing planets with the newly fetched ones
    const updatedAllPlanets = [...allPlanets, ...newPlanetsWithFilmNames];

    // Map the URLs from the selected film to the corresponding planet data
    const filmPlanets = randomFilm.planets.map((url: string) =>
      updatedAllPlanets.find((planet) => planet.url === url)
    );

    // Update the state with the fetched data
    set({
      loading: false,
      filmPlanets,
      film: randomFilm.title,
      allPlanets: updatedAllPlanets,
      films,
    });
  },
}));

export default useStore;
