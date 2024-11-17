import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { createContext } from 'react';
import NavbarZ from './Movies-app/Navbar';
import Movie from './Movies-app/Movie';
import Details from './Movies-app/MovieDetails';
import Banner from './Movies-app/Banner';
import { comedyMovies, latestMovies, popularMovies } from './Movies-app/url';
import MovieDetails from './Movies-app/MovieDetails';

const MovieContext = createContext();

function App() {
  const [movieDetailed, setMovieDetailed] = useState([]); //for store movies details
  const [movieId, setMovieId] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const currentPath = window.location.pathname;

  return (
    <div>
      <MovieContext.Provider value={{ movieDetailed, setMovieDetailed, movieId, setMovieId, filteredMovies, setFilteredMovies }}>
     <BrowserRouter>
     <NavbarZ/>
     {currentPath === '/'? (<Banner apiurl={latestMovies} />) : null}
       <Routes>
       {/* <Route path='/' element={<Carousels/>}/> */}
        <Route path='/popular' element={<Movie movielist={popularMovies} titles="Popular Movie"/>}/>
        <Route path='/comedy' element={<Movie movielist={comedyMovies} titles="Comedy Movie"/>}/>
        <Route path='/latest' element={<Movie movielist={latestMovies} titles="Latest Movie"/>}/>
        <Route path='/details' element={<MovieDetails/>}/>
        <Route path='/search-results' element={<Movie movielist={null} title="Search Results" isSearchResult={true}/>}/>
       </Routes>
     </BrowserRouter>
     </MovieContext.Provider>
    </div>
  );
}

export default App;
export {MovieContext};

/*
1) ivide koduthittulla same path '/popular','/comedy','/latest' navigation bar il --- <Nav.Link href="#home"><Link to={'/popular'}>Popular</Link></Nav.Link>--- koduthittund .
then element nte ullil 3 num common aayi movie.jsx ahnn kodukkunnath. athinullil movielist il ella api um konduvarunnu.

2) <Route path='/latest' element={<Movie/>}/> ivide movies nullil endh add cheythalum athine props vazhi movies page il access cheyyam.
movielist il API um title il string um ahnn ullath.

3) Navigation bar il popular link click cheyyumbol get il kodutha movielist il movielist={popularMovies} ithann access avunnath.

4) ivide kodukkunna path evide koduthalum eath path ahnno kodukkunne athinu nere ulla movielist il eath api ahnno aa api ayirikkum access cheyyan kazhiyuka
*/
