const fs = require('fs');
const path = require('path');

const getMoviesList =  cb => {
      const p = path.join(
        path.dirname(process.mainModule.filename),
        'data',
        'movieList.json'
      );
     fs.readFile(p,{encoding:'utf8', flag:'r'},function(err, data) {
      if (err) {
        return cb && cb(err)
          }
        try {
        const object = JSON.parse(data)
        return  cb(object)
        } catch(err) {
          return cb 
       }
     }
  )
}
 const  getGenresList =  cb => {
  const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'genreList.json'
  );
fs.readFile(p,{encoding:'utf8', flag:'r'},function(err, data) {
  if (err) {
    return cb && cb(err)
      }
    try {
    const object = JSON.parse(data)
    return  cb(object)
    } catch(err) {
      return cb 
   }
 }
)
}

const getVideoList = cb => {
  const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'videoList.json'
  );
fs.readFile(p,{encoding:'utf8', flag:'r'},function(err, data) {
  if (err) {
    return cb && cb(err)
      }
    try {
    const object = JSON.parse(data)
    return  cb(object)
    } catch(err) {
      return cb 
   }
 }
)
}

// const paging = (page,movies) => {
//       const results  = {};
//       const endIndex = page * limit;
//       const startIndex =endIndex-20
//       results.page =page;
//       results.totalPage=movies.length%limit;
//       results.results = movies
//       results.results = movies.slice(startIndex, endIndex);
//       if (!page || page == 0) {
//         results.results = movies.slice(0, limit);
//       }
//       console.log(results)
// }

module.exports = class Movies {
  constructor() {}
   static fetchAll(cb)
   {
    getMoviesList(cb)
   }
   static trendingMovies(page,cb)
   {
     getMoviesList(movies => {
      movies.sort((a,b) => b.popularity - a.popularity)
      const limit=20;
      const endIndex = page * limit;
      const startIndex =endIndex-19
      const results  = {};
      results.page =page;
      results.totalPage=movies.length%limit;
      results.results = movies
      results.results = movies.slice(startIndex, endIndex);
      if (!page || page == 0) {
        results.results = movies.slice(0, limit-1);
        results.page=1
      }
        cb(results);
      })
    }
   static ratingMovies(page,cb)
   {
      getMoviesList(movies => {
      movies.sort((a,b) => b.vote_average - a.vote_average)
        const limit=20;
        const endIndex = page * limit;
        const startIndex =endIndex-19
        const results  = {};
        results.page =page;
        results.totalPage=movies.length%limit;
        results.results = movies
        results.results = movies.slice(startIndex, endIndex);
        if (!page || page == 0) {
          results.results = movies.slice(0, limit-1);
          results.page=1
        }
          cb(results);
        })
   }
   static findGerneById(id,page,cb) {
    const arr=[]
    const results ={}
      getMoviesList(movies => {
        movies.map(e => {
          if(e.genre_ids) {
            e.genre_ids.map(i => {
              if(i==id)
              {
                arr.push(e)
              }
            })
          }
        })
        const limit=20;
        const endIndex = page * limit;
        const startIndex =endIndex-19
        results.page=page;
        results.totalPage=arr.length%limit;
        results.results=arr.slice(startIndex,endIndex)
        if (!page || page == 0) {
          results.results = arr.slice(0, limit-1);
          results.page=1
        }
         cb(results);
      })
      
  }
    static getVideoById(id,cb)
    {
      const results = {}
      getVideoList(videos => {
        const trailer = videos.find(p => p.id === id);
        if(trailer)
        {
          const condition =trailer.videos.filter(v => v.official===true && v.site==='YouTube') 
          const datesArray = condition.map((element) => new Date(element.published_at))
          const maxDate = new Date(Math.max(...datesArray));
          results.results =condition.find(e => e.published_at===maxDate.toISOString())
        }
        else
        {
          
        }
        cb(results)
      });
    }



    static searchByKw(year,language,mediaType,genre,kw,page,cb) {
      getMoviesList(movies => {
        const results = {}
        const arr=[]
        const genreList=[]
        const mediaTypeList=[]
        const languageList=[]
        const yearlist=[]
        // find by keyword
        if(kw)
        {
          for ( let i = 0; i < movies.length; i++) {
            if(movies[i].title)
            {
              if(movies[i].title.toLowerCase().indexOf(kw.toLowerCase()) != -1 )
              {
                  arr.push(movies[i])
              }
            }
            else if(movies[i].overview) {
              if(movies[i].overview.toLowerCase().indexOf(kw.toLowerCase()) != -1 )
              {
                  arr.push(movies[i])
              }
            }
          }
            const limit=20;
            if(!page) {
              page=1
            }
            const endIndex = page * limit;
            const startIndex =endIndex-19
            if(arr.length>20)
            {
              results.totalPage=arr.length%limit;
              results.page=page
              results.results=arr.slice(startIndex, endIndex)
            }
            else
            {
              results.totalPage=1
              results.page=1
              results.results=arr
            }
        }
        if(genre)
        {
          results.results.map(e => 
            {
              if(e.genre_ids)
              {
                e.genre_ids.map(i => {
                  if(i==genre)
                  {
                    genreList.push(e)
                  }
                })
              }
            })
            if(genreList.length>0)
            {
              results.results=genreList
            }
        }
        if(mediaType)
        {
          results.results.map(e => {

              if(e.media_type==mediaType)
              {
                mediaTypeList.push(e)
              }
          })
            results.results=mediaTypeList
        }
        if(language)
        {
          results.results.map(e => 
            {
              if(e.original_language==language)
              {
                languageList.push(e)
              }
            }
            )
              results.results=languageList
        }
        if(year)
        {
          results.results.map(e => 
            {
             const temp=new Date(e.release_date)
             const a=temp.getFullYear()
             if(a==year)
             {
              yearlist.push(e)
             }
             
            })
              results.results=yearlist
        }
         cb(results);


      });
    }
} 