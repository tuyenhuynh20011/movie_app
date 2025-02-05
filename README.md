# Movie App

## Overview

The Movie App is a web application that allows users to browse, search, and view details about movies. It utilizes React for the frontend and Node.js with Express for the backend. The application fetches movie data from a third-party API and provides a user-friendly interface for movie exploration.

## Features

- **Browse Movies**: Users can view trending, top-rated, and genre-specific movies.
- **Search Functionality**: Users can search for movies by keywords, genre, media type, language, and year.
- **Movie Details**: Users can view detailed information about each movie, including trailers.
- **Responsive Design**: The application is designed to be responsive and works well on various devices.

## Technologies Used

- **Frontend**: 
  - React
  - React Router
  - Axios
  - CSS for styling
- **Backend**: 
  - Node.js
  - Express
  - EJS for templating
  - CORS for handling cross-origin requests
- **Database**: 
  - JSON files for storing movie data and user tokens

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Clone the Repository



### Setup Backend

1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```

### Setup Frontend

1. Navigate to the `FrontEnd` directory:
   ```bash
   cd FrontEnd
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend application:
   ```bash
   npm start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` to access the application.
2. Use the navigation bar to browse different movie categories or use the search feature to find specific movies.

## API Endpoints

### Movies

- **GET /api/movies**: Fetch all movies.
- **GET /api/movies/trending**: Fetch trending movies.
- **GET /api/movies/top-rate**: Fetch top-rated movies.
- **GET /api/movies/discover/:id**: Fetch movies by genre ID.
- **GET /api/movies/video/:id**: Fetch trailer video by movie ID.

### Authentication

- **POST /api/movies/video**: Post a request to get a movie trailer.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the movie data API.
- [React](https://reactjs.org/) for the frontend framework.
- [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/) for the backend server.
