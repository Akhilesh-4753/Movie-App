import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { imageUrl } from './url';
import { MdOutlineFileDownload } from "react-icons/md";
import { IoPlaySharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Movie = ({movielist,titles}) => {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    axios
    .get(movielist)
    .then((abc)=>setmovie(abc.data.results));
    
  }, [movielist])
  const nav = useNavigate();
  const movieDetails =()=>{
    nav('/details')
  }
  
  return (
    <div className='parrent'>
    <h1>{titles}</h1>
    <div className='movies'>
      {movie.map((i)=>{
        return(
          <div>
          <div className='moviess' style={{marginTop:'40px', borderRadius:'30px'}}>
          <Card onClick={movieDetails} className='card' style={{ width: '18rem'}}>
      <Card.Img className='card-img' variant="top" style={{height:'380px'}} src={imageUrl+i.poster_path}/>
      <Card.Body>
        <Card.Title>{i.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='button'>
        <Button variant="primary" className='pe-3'>Play <IoPlaySharp /></Button>
        <Button variant="danger">Download <MdOutlineFileDownload size={'20px'} /></Button>
        </div>
      </Card.Body>
    </Card>
    </div>  
      </div>
        )
      })}
    </div>
    </div>
  )
}

export default Movie

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