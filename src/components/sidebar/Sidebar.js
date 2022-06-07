import React from 'react';
import "./Sidebar.scss"

export const Sidebar = () => {
  return (
    <div className='d-flex sidebar'>

    <div id='sidebar-container'>
      
      <div className='head'>
        <img src="./assets/Logo_autoparti.png" className='text-light font-weight-bold' ></img>
      </div>

      <div className='menu'>
          <a href="#" className='d-block text-dark' ><i className='icon ion-md-apps mr-2 lead '></i>Home</a>
          <a href="#" className='d-block text-dark' ><i className='icon ion-md-apps mr-2 lead '></i>Films</a>
      </div>
    </div>
  </div>
  )
}
