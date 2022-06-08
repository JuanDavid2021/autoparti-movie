import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFilm, getMovie } from '../../redux/movieList';
import "./Sidebar.scss"

export const Sidebar = () => {
 
  const dispatch = useDispatch()   
  const navigate = useNavigate()

  const films=(e)=>{
    e.preventDefault(e)
    dispatch(getFilm())
    navigate("/films")
    }

  const allMovies =(e)=>{
   e.preventDefault()
   dispatch(getMovie())
   navigate("/home") 
  }  

  return (
    <div className='d-flex sidebar'>

    <div id='sidebar-container'>
      
      <div className='head'>
        <img src="./assets/Logo_autoparti.webp" className='text-light font-weight-bold' ></img>
      </div>

      <div className='menu'>
          <a href="#" className='d-block text-light' onClick={allMovies}><i className='icon ion-md-apps mr-2 lead'></i>Home</a>
          <a href="#" className='d-block text-light' onClick={films}><i className='icon ion-md-apps mr-2 lead '></i>Films</a>
      </div>
    </div>
  </div>
  )
}
