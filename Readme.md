# Planet

This project is a state management application developed using Next.js, React.js, TypeScript, Zustand, and Tailwind CSS. It aims to save, update, and dispatch actions for data stored in objects/classes, focusing on the Star Wars API (SWAPI).

## Features

- **State Management**: Utilizes Zustand for managing application state efficiently.
- **Data Handling**: Capable of saving and updating data in objects/classes.
- **Action Dispatching**: Automatically dispatches an action whenever the object/class data changes.
- **API Integration**: Fetches data from the SWAPI, specifically planets (`/planets`) and species (`/species`) associated with people (`/people`) who have appeared in movies.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   git clone https://github.com/MehdiiRezakhani/planet.git
2. Navigate to the project directory:
   cd planet
3. Install dependencies:
   npm install
4. Run the development server:
   npm run dev

## Promise

The application promises to return a list of planets that have appeared in at least one movie and whose residents have reptiles among their species. The base URL for fetching data is `https://swapi.dev/api/`.

## Documentation

For detailed information about the endpoints used in this project, refer to the following documentation links:

- [Planets](https://swapi.dev/documentation#planets)
- [People](https://swapi.dev/documentation#people)
- [Species](https://swapi.dev/documentation#species)

## Technologies

- **Frontend**: Next.js, React.js, TypeScript
- **State Management**: Zustand
- **Styling**: Tailwind CSS

## Contributing

Contributions are welcome Please feel free to submit a pull request or open an issue if you encounter any problems or have suggestions for improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
