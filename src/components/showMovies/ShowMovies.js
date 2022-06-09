import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {data} from "../../data"
import { MovieCard } from '../movieCard/MovieCard';
import "./ShowMovies.scss"
import image from "../assets/tristeza.webp"

export const ShowMovies = () => {
  
    const base_url = "https://image.tmdb.org/t/p/original"
    const {list} = useSelector(state=>state.movieList)
  

    return (
    <div className='release-all'>

    <div className='releaseTwo'>  
    <Link to ={`/detail/${data.results[0].id}`}>   
    <img src={`${base_url}${data.results[0].poster_path}`} className="release"/>
    </Link>

    <Link to ={`/detail/${data.results[13].id}`}>  
    <img src={`${base_url}${data.results[13].poster_path}`} className="release" />
    </Link>  
    </div>

    <div className='all-movies'> 
      {
     list.length> 0 ? list.slice(0,16).map(movie=>(
      <Link to ={`/detail/${movie.id}`} key={movie.id}> 
      <MovieCard movie={movie} key={movie.id} base_url={base_url}/>
      </Link>
    )): list.length=== 0? 
      <div className="not-found-all">
      <h1 className='not-found'>no existen peliculas con el nombre que ingresaste</h1>
      <img src={image} style={{height:"80px", alignSelf:"center"}}/>
      </div>
      : <h1 className='loading'>Loading...</h1>}
    </div>
     
  </div>
  )
}
