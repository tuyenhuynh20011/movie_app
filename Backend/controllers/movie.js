const express = require("express");
const Movies = require("../models/Movies");

exports.fetchAll = (req, res) => {
  const results = {}
  Movies.fetchAll((movies) => {
    results.results= movies
    res.send(JSON.stringify(results));
  });
};

exports.getIndex = (req, res) => {
  res.render("home", {
    path: "/home",
  });
};

exports.trendingMovies = (req, res) => {
  const page = parseInt(req.query.page);
  Movies.trendingMovies(page,(movies) => {
    res.send(JSON.stringify(movies));
  });
};

exports.ratingMovies = (req, res) => {  
  const page = parseInt(req.query.page);
  Movies.ratingMovies(page,(movies) => {
    res.send(JSON.stringify(movies));
  });
};

exports.discover = (req, res) => {
  const discoverId = parseInt(req.params.id);
  const page = parseInt(req.query.page);
  Movies.findGerneById(discoverId,page, (movies)  => {
    res.send(JSON.stringify(movies));
  });
};

exports.trailerVideo = (req, res) => {
  const videoId = parseInt(req.params.id);
  Movies.getVideoById(videoId, (videos) => {
    if(!videos.results || videos.results==undefined) 
    {
      res.status(404).send("Not found video")
    }
      res.send(JSON.stringify(videos))
  });
};

exports.postTrailerVideo= (req, res) => {
    const bodyValues=JSON.parse(JSON.stringify(req.body))
    const id=parseInt(bodyValues.film_id);
    if(!bodyValues)
    {
        res.status(400).send('Not found film_id parram')
    }
    else{
        res.redirect(`/api/movies/video/${id}`)
    }
}


exports.searchByKw=(req, res) => {
  const page = parseInt(req.query.page);
  const kw=(req.params.keyword)
  const genre= parseInt(req.query.genre)
  const mediaType=req.query.mediaType
  const language=req.query.language
  const year=parseInt(req.query.year)
  Movies.searchByKw(year,language,mediaType,genre,kw,page,movies => {
    
      res.send(JSON.stringify(movies))
  })


}
