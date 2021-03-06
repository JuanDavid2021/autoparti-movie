import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const videoSlice=createSlice({

name:"video",
initialState: {
 video: []   
},
reducers: {
 setVideo: (state, action)=>{
  state.video = action.payload
 }
}
})

export const {setVideo} = videoSlice.actions;
export default videoSlice.reducer;


export const getTrailer =(id)=>async(dispatch)=>{
   await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_APIKEY}`)
  .then((response)=>{   
   dispatch(setVideo(response.data.results))
  })
  .catch((error)=>console.log(error))  
}

