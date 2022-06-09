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
   await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_APIKEY}`)
  .then((response)=>{ 
   dispatch(setDetail(response.data))
  })
  .catch((error)=>console.log(error))  
}

