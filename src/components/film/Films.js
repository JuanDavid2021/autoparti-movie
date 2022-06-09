import React, { useEffect } from 'react';
import { Searchbar } from '../searchbar/Searchbar'
import { getFilm} from '../../redux/movieList';
import { useDispatch} from 'react-redux';
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
