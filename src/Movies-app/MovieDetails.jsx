import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MovieContext } from '../App';
import { imageUrl } from './url';
import { IoIosPlay, IoMdDownload } from "react-icons/io";


const MovieDetails = () => {

  const {movieDetailed,movieId} = useContext(MovieContext);
  
  const selectedMovie = movieDetailed.find((e)=> e.id === movieId);
  if (!selectedMovie) return <div>Loading...</div>;

  return (
    <div className='detail-page-parent' style={{ backgroundImage: `url(${imageUrl + selectedMovie.backdrop_path})`}}>
    <div className='detail-page-child'>
      <img 
        src={`${imageUrl + selectedMovie.poster_path}`} 
        style={{ height: "250px", width: "auto", objectFit: "cover", borderRadius:"15px" }} 
        alt={selectedMovie.original_title} 
      />
      <h4 className='m-2'>{selectedMovie.original_title}</h4>
      <p className='text-center w-50 m-auto fs-6'>{selectedMovie.overview.substring(0, 200) || "No description available"}</p>
      <button className='btn btn-primary mt-3'>Watch <IoIosPlay /></button>
      <button className='btn btn-danger mt-3 ms-3'>Download <IoMdDownload /></button>
    </div>
    </div>
  );
}


export default MovieDetails