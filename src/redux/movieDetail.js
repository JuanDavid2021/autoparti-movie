import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const detailSlice=createSlice({

name:"detail",
initialState: {
 detail: []   
},
reducers: {
 setDetail: (state, action)=>{
  state.detail = action.payload
 }
}
})

export const {setDetail} = detailSlice.actions;
export default detailSlice.reducer;

export const getDetail =(id)=>async(dispatch)=>{
   await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8e08dc6462b51c834ad1d6ff053bd398`)
  .then((response)=>{ 
   dispatch(setDetail(response.data))
  })
  .catch((error)=>console.log(error))  
}

