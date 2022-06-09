import { createSlice } from '@reduxjs/toolkit'
import axios from "axios"

export const movieSlice = createSlice({
  name: "movieList",
  initialState:{
  list:[]     
  },
  reducers: {
     setMovieList: (state, action)=>{
     state.list = action.payload;
    }  
  }   
})

export const {setMovieList} = movieSlice.actions;

export default movieSlice.reducer;

export const getMovie =()=>async(dispatch)=>{
    await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}`) 
    .then((response) =>{
     dispatch(setMovieList(response.data.results))    
    })
    .catch((error)=>console.log(error)) 
}   

  export const getMovieName =(input)=>async(dispatch)=>{
  await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&query=${input}`)
  .then((response)=>{
    dispatch(setMovieList(response.data.results))  
  })
  .catch(dispatch(setMovieList(0)))}

  export const getFilm =()=> async(dispatch)=>{
   await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=es&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2021-09-01&primary_release_date.lte=2021-12-31`)
   .then((response)=>{
    dispatch(setMovieList(response.data.results))
   })
   .catch((error)=>console.log(error))  
}