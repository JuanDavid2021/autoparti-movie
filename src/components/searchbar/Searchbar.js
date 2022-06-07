import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovieName, getFilm } from '../../redux/movieList';
import "./Searchbar.scss"

export const Searchbar = () => {

 const [type, setType] = useState(false)
 const [input, setInput] = useState("")
 const dispatch = useDispatch()

 
 const handleChange = (e)=>{
  setInput(e.target.value)
  console.log(input) 
  setType(true)
  dispatch(getMovieName(input))
 }

 const films=(e)=>{
 e.preventDefault(e)
 dispatch(getFilm())
 }


  return (
    <div className='searchbar'>
      <div className='searchbar-movie'>
          <button onClick={(e)=>films(e)}>Films</button>
          <input type="text" placeholder='Search' value={input} name="input" onChange={(e)=>handleChange(e)}></input>
      </div>
      <h3>New Releases</h3>
    </div>
  )
}
