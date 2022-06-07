import React, { useEffect } from 'react';
import {data} from "../../data"
import "./Home.scss";
import {Link} from "react-router-dom"

import { Sidebar } from '../sidebar/Sidebar'
import { Searchbar } from '../searchbar/Searchbar'
import { getMovie } from '../../redux/movieList';
import { useDispatch, useSelector } from 'react-redux';
import { MovieCard } from '../movieCard/MovieCard';

export const Home = () => {

  const base_url = "https://image.tmdb.org/t/p/original"

  const dispatch = useDispatch()
  const {list} = useSelector(state=>state.movieList)
  
  useEffect(()=>{
    dispatch(getMovie())
  },[])


  return (
    <div >
    
    <Searchbar/>
    <Sidebar/>

    <div className='release'>
      <img src={`${base_url}${data.results[0].poster_path}`} />
      <img src={`${base_url}${data.results[1].poster_path}`} />
        {
       list.length> 0 ? list.slice(0,14).map(movie=>(
        <Link to ={`/detail/${movie.id}`}> 
        <MovieCard movie={movie} base_url={base_url}/>
        </Link>
      )):null}    
    </div>

    </div>
  )
}
