import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFilm, getMovie } from '../../redux/movieList';
import "./Sidebar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faTape} from "@fortawesome/free-solid-svg-icons"

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
   navigate("/") 
  }  

  return (
    <div className='d-flex sidebar'>

    <div id='sidebar-container'>
      
      <div className='head'>
        <img src="./assets/Logo_autoparti.webp" className='text-light font-weight-bold' ></img>
      </div>

      <div className='menu'>
          <FontAwesomeIcon icon={faHouse} className="icon-Home"/>
          <a href="#" className='d-block text-light' onClick={allMovies}><i className='icon ion-md-apps mr-2 lead icon-sidebar'></i>Home</a>
          <FontAwesomeIcon icon={faTape} className="icon-movies"/>
          <a href="#" className='d-block text-light' onClick={films}><i className='icon ion-md-apps mr-2 lead icon-sidebar '></i>Films</a>
          <div className='social'> 
            <a href="https://api.whatsapp.com/send/?phone=573238124663&text&app_absent=0" target="_blank">
            <img href="www.google.com" src="https://static.wixstatic.com/media/11062b_30e649231eb54cdea5ed586c2691a278~mv2.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_30e649231eb54cdea5ed586c2691a278~mv2.png"/>
            </a>
            <a href="https://www.linkedin.com/company/autoparti/" target="_blank">
            <img src="https://static.wixstatic.com/media/48a2a42b19814efaa824450f23e8a253.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/48a2a42b19814efaa824450f23e8a253.png"/>
            </a>
            <a href="https://www.instagram.com/accounts/login/?next=/autoparticolombia/" target="_blank">
            <img src="https://static.wixstatic.com/media/8d6893330740455c96d218258a458aa4.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8d6893330740455c96d218258a458aa4.png"/>
            </a>
            <a href="https://www.facebook.com/autoparti" target="_blank">
            <img src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e316f544f9094143b9eac01f1f19e697.png"/>
            </a>
          </div>
      </div>
    </div>
  </div>
  )
}
