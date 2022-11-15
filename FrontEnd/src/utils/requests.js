const API_KEY = '8qlOkxz4wq';

const requests = {
	fetchTrending: `http://localhost:3001/api/movies/trending`,
	fetchNetflixOriginals: `http://localhost:3001/api/movies`,
	fetchTopRated: `http://localhost:3001/api/movies/top-rate`,
	fetchActionMovies: `http://localhost:3001/api/movies/discover/28`,
	fetchComedyMovies: `http://localhost:3001/api/movies/discover/35`,
	fetchHorrorMovies: `http://localhost:3001/api/movies/discover/27`,
	fetchRomanceMovies: `http://localhost:3001/api/movies/discover/10749`,
	fetchDocumentaries: `http://localhost:3001/api/movies/discover/99`,
	fetchSearch: `/search`,
};

export default requests;
