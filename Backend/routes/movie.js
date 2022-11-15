const path = require('path')
const corsOptions=require('../middleware/cors')
const express = require('express')
const auth = require('../middleware/auth')
const moviesController= require('../controllers/movie')

const router =express.Router();

router.get('/',moviesController.getIndex)

 router.get('/api/movies',auth,moviesController.fetchAll)

router.get('/api/movies/trending/',auth,moviesController.trendingMovies)

router.get('/api/movies/top-rate/',auth,moviesController.ratingMovies)

router.get('/api/movies/discover/:id',auth,moviesController.discover)

router.get('/api/movies/discover',(req, res) => {
    res.status(400).send("Not found gerne parram");
})

router.post('/api/movies/video',auth,moviesController.postTrailerVideo)

router.get('/api/movies/video/:id',auth,moviesController.trailerVideo)
router.get('/api/movies/video',(req, res) => {
    res.status(400).send("Not found film_id parram");
})


// router.get('/api/movies/search/:keyword/:genre/:mediaType/:language',auth,moviesController.searchByKw)

router.get('/api/movies/search/:keyword',auth,moviesController.searchByKw)



module.exports =router