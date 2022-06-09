import React, { useEffect } from 'react';
import "./Home.scss";
import { Searchbar } from '../searchbar/Searchbar'
import { getMovie } from '../../redux/movieList';
import { useDispatch} from 'react-redux';
import { ShowMovies } from '../showMovies/ShowMovies';

export const Home = () => {

  const dispatch = useDispatch()
 const api = process.env.REACT_APP_API_KEY
  useEffect(()=>{

    dispatch(getMovie())
    console.log(api)
  },[dispatch])


  return (
    <div className="container-all">
      <Searchbar/>
      <ShowMovies/>
    </div>
  )
}
