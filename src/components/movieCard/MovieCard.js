import React from 'react';
import "./MovieCard.scss"
import logo from ".././assets/not_found.jpg"

export const MovieCard = ({movie,base_url}) => {
  return (
    <div className='movie-container'>
        {movie.poster_path ? (<img src={`${base_url}${movie.poster_path}`}/>) 
        : (<img src={logo}/>)
        }
    </div> 
  )
}
