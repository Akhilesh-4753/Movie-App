import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { imageUrl } from './url';

const Banner = ({apiurl}) => {
  const [randomMovie, setrandomMovie] = useState(null);
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    axios
    .get(apiurl)
    .then((response)=>setmovies(response.data.results));
  }, [apiurl]);

  useEffect(() => {
    const getRandomMovie = (array) =>{
      if(array.length === 0){      //array.legth 20 ahnn.ith venemenkil ezhuthiya mathi
        return null;
      }
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    };
    if (movies.length > 0){
      const movie = getRandomMovie(movies);
      setrandomMovie(movie);
    }
  }, [movies])
  
  
  return (
    <div>
      {randomMovie && (
      <div className="banner-container" style={{ backgroundImage: `url(${imageUrl + randomMovie.poster_path})` }}>
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

export default Banner