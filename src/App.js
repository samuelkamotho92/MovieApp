/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';

import MovieCard from './MovieCard';

import './App.css'

import searchicon from './search.svg'
//used to take effect upon loading of components
import {useState,useEffect} from 'react'
//create your main functional component
//1b561b05
// 
const  movieApi_Url = "http://www.omdbapi.com/?i=tt3896198&apikey=1b561b05"

const App = ()=>{

    const [movies,setmovies] = useState([]);
    const [initsearchvalue,setSearchValue] = useState("")

    const fecthMovies = async function(title) {
        const resp = await fetch(`${movieApi_Url}&s=${title}`);
        const data = await resp.json();
        //change the current movie valie
        setmovies(data.Search);
    }
//   const movie1 = {
//     "Title": "Red Notice",
//     "Year": "2021",
//     "imdbID": "tt7991608",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
// }
    useEffect(()=>{
      fecthMovies("Red Notice");
    },[])
    return(
<div className="app">
    <h1>Movie App</h1>
    <div className="search">
        <input type="text" placeholder='Search for movies'
        value={initsearchvalue}
        onChange={(e)=>{ setSearchValue(e.target.value)}}
        />
        <img src={searchicon} alt="search icon" 
        onClick={()=>{ fecthMovies(initsearchvalue)}}/>
    </div>
    {
    movies?.length > 0 ? (
        <div className="container">
          {movies.map(movie => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found try again</h2>
        </div>
      )
      }
    </div> 
    ); 
}

export default App