import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {getTrailer} from '../../redux/getTrailer'
import { getDetail } from '../../redux/movieDetail'
import "./MovieDetail.scss"

export const MovieDetail = () => {

  const base_url = "https://image.tmdb.org/t/p/original"
  const dispatch= useDispatch()
  const state = useSelector(state=>state.detail)
  const video = useSelector(state=>state.video)

  const [open, setOpen] =useState(false)

  const {id} = useParams()


  useEffect(()=>{
   dispatch(getDetail(id))
  },[])

  useEffect(()=>{
   dispatch(getTrailer(id))
  },[])

  const closeModal =()=>{
  setOpen(false)
 } 

  const openModal =()=>{
  setOpen(true)

 }

  return (
    <div className='container-detail'>
      <img src = {`${base_url}${state.detail.poster_path}`} />

      <div className='movie-detail'>
        <h1>NAME: {state.detail.original_title}</h1>
        <h3>Id</h3> <p>{state.detail.id}</p> 
        <h3>language:</h3><p>{state.detail.original_language}</p>
        <h3>Overview:</h3><p>{state.detail.overview}</p> 
        <h3>Valoracion:</h3><p>{state.detail.vote_average}</p>
        <h3>Release:</h3><p>{state.detail.release_date}</p>
        <h3>status:</h3><p>{state.detail.status}</p>
        <h3>Runtime:</h3><p>{state.detail.runtime} minutes</p>

        
    
<button type="button" onClick={openModal} className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Ver Trailer
</button>

        <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" onClick={closeModal}  aria-hidden="true">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">{state.detail.original_title}</h5>
                <button type="button" className="close" onClick={closeModal} data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
            {
              open===true? 
            <iframe
                src={`https://www.youtube.com/embed/${video.video[0].key}`}
                width={"100%"}
                height={"500px"}
                id="videoModal" 
                  >
              </iframe> : null
            }   
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
