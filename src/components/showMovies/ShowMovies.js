import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {data} from "../../data"
import { MovieCard } from '../movieCard/MovieCard';
import "./ShowMovies.scss"

export const ShowMovies = () => {
  
    const base_url = "https://image.tmdb.org/t/p/original"
    const {list} = useSelector(state=>state.movieList)
    return (
    <div className='release'>
    <img src={`${base_url}${data.results[0].poster_path}`} className="estreno1" />
    <img src={`${base_url}${data.results[1].poster_path}`} className="estreno2" />
      {
     list.length> 0 ? list.slice(0,16).map(movie=>(
      <Link to ={`/detail/${movie.id}`}> 
      <MovieCard movie={movie} base_url={base_url}/>
      </Link>
    )):null}    
  </div>
  )
}
