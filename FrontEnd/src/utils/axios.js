import axios from 'axios';

/** base url to make request to the themoviedatabase */

const instance = axios.create({
	baseURL: 'http://localhost:3001/api/movies',
	headers: { 
	// 	"Content-Type": "application/json",
	// 	'Accept':'*/*',
	// 	"Cache-Control": "no-cache",
	// 	"Access-Control-Allow-Origin" : "*",
	// 	"Content-type": "Application/json",
	// 	'Access-Control-Expose-Headers': 'Content-Length',
		'Authorization': 'Bearer RYoOcWM4JW' ,
	// 	'Access-Control-Allow-Headers': '*'
	  }

});

// instance.get('/foo-bar');
// https://api.themoviedb.org/3/foo-bar

export default instance;
