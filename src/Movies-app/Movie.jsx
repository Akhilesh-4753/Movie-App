import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { imageUrl } from './url';
import { MdOutlineFileDownload } from "react-icons/md";
import { IoPlaySharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../App';
import { IoMdDownload, IoIosPlay } from "react-icons/io";

const Movie = ({ movielist, titles, isSearchResult = false} ) => {
  const { movieDetailed, setMovieDetailed, movieId, setMovieId, filteredMovies} = useContext(MovieContext);
  
  useEffect(() => {
    if (movielist) {
    axios
    .get(movielist)
    .then((abc)=>setMovieDetailed(abc.data.results));
  }
  }, [movielist,setMovieDetailed])

  const displayMovies = isSearchResult ? filteredMovies : movieDetailed;       {/* search cheyth kazhinjal output kittunnath : all movie details */}
  let filteredDisplayMovies = displayMovies.filter((i) => {
    return ![179387, 1149912, 482600, 259872, 1357459, 1064213, 587727, 1149912, 697251 ,829557, 216015, 1371540, 464026, 225634, 323260, 211079].includes(i.id); {/* includes(i.id) = i.d arrayil indonn check cheyyunnu. illenkil illatha items return cheyyunn .i ennath ooro movies ne represent cheyyunnu*/}
  });
  console.log(filteredMovies);

  const nav = useNavigate();
  const handleMovieClick =(id)=>{
    setMovieId(id);
    nav('/details')
  }
  console.log(movieId);
  return (
    <div className="Container">
      <h2>{titles}</h2>
      <div className="child-container">
        {filteredDisplayMovies.length > 0 ? (
          filteredDisplayMovies.map((i) => (
            <Card key={i.id} onClick={() => handleMovieClick(i.id)} className='mb-4'>
              <Card.Img variant="top" style={{height:'100%'}} src={imageUrl + i.backdrop_path} />
              <Card.Body>
                <Card.Title>{i.title || i.name}</Card.Title>
                <Card.Text>
                  {i.overview.substring(0, 100)}...
                </Card.Text>
                <div className="button">
                  <Button variant="primary">Play <IoIosPlay /></Button>
                  <Button variant="danger">Download <IoMdDownload /></Button>
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <div className="text-center w-100 mt-4">
          </div>
        )}
      </div>
    </div>
  );
};

export default Movie;

/*
1) Api il ullath array of datas ahnn. so athine oru variable il store cheythale mapping html il konduvaran kazhiyullu. so nammal useState use cheyth variable declare cheyth athil empty square braces
   kodukkunnu. then second parameter(updating function) use cheyth API nnu fetch cheyth movie il store cheyyunnu. second parameter function nte role : variable update cheyyuka ennathann

2) Axios ennath API integration nu use cheyyunna popular aaya oru library ahnn Axios.Browser load aavunna time il work aavan vendi ith useEffect hook nte ullil add cheyyunnu.
   App.js il movies nullil movielist lekkan 3 api um store cheythittullath.so ivide 3 api seprate vilikkanda avsyam illa. 3 api store cheyth movielist ne get cheythal mathi.
   then il oru argument pass cheyth api le data path console il ninnu find cheyth .then((abc)=>console.log(abc)); setmovie vach movie il update cheyyunnu.normally movies il empty array ahnn.
   ippol setmovie vach all datas from api movie enna variable il store aavunnu.
   useEffect il dependency array empty aakkiyaal oru thavana mathrame mapping nadakkullu. so api's store cheyth movielist ne dependency array il idunnu.
   
   ippol movie il ahnn API le arrays ullath . so movie map cheythal mathi
   */