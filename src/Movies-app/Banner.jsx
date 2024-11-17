import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { imageUrl } from './url';

const Banner = ({apiurl}) => {
  const [randomMovie, setRandomMovie] = useState(null);
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    axios
    .get(apiurl)
    .then((response)=>setmovies(response.data.results));
  }, [apiurl]);

  useEffect(() => { 
      if (movies.length > 0){      //array.legth 20 ahnn.ith venemenkil ezhuthiya mathi
        const randomIndex = Math.floor(Math.random() * movies.length);
        setRandomMovie(movies[randomIndex]);
        console.log(movies.length);
    };
  }, [movies])
  console.log(randomMovie);
  
  return (
    <div>
      {randomMovie && (
      <div className="banner-container" style={{ backgroundImage: `url(${imageUrl + randomMovie.backdrop_path})` }}>
      <div className="banner-content">
        <h6>Title</h6>
        <p>{randomMovie.title}</p>
        <h6>Overview</h6>
        <p>{randomMovie.overview}</p>
      </div>
    </div>
      )}
    </div>
  )
}

export default Banner;