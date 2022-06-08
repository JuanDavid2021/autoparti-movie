import React, { useEffect } from 'react';
import {data} from "../../data"
import "./Films.scss";
import {Link} from "react-router-dom"


import { Searchbar } from '../searchbar/Searchbar'
import { getFilm, getMovie } from '../../redux/movieList';
import { useDispatch, useSelector } from 'react-redux';
import { MovieCard } from '../movieCard/MovieCard';
import { ShowMovies } from '../showMovies/ShowMovies';

export const Films = () => {


  const dispatch = useDispatch()

  
  useEffect(()=>{
    dispatch(getFilm())
  },[dispatch])


  return (
    <div className="container-all">
    
    
    <Searchbar/>
    

   <ShowMovies/>

    </div>
  )
}
