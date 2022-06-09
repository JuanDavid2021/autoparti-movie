import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovieName} from '../../redux/movieList';
import "./Searchbar.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"

export const Searchbar = () => {

 const [type, setType] = useState(false)
 const [input, setInput] = useState("")
 const dispatch = useDispatch()

 
 const handleChange = (e)=>{
  setInput(e.target.value)
  setType(true)
  dispatch(getMovieName(input))
 }


  return (
    <div className='searchbar'>
      <div className='searchbar-movie'>
          <h1>Films</h1>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="searchGlass"/>
            <input type="text" placeholder='Search' value={input} name="input" onChange={(e)=>handleChange(e)}></input>
      </div>
      <h3>New Releases</h3>
    </div>
  )
}
