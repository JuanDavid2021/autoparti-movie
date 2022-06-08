import {configureStore} from '@reduxjs/toolkit';
import movieList from './movieList';
import detail from "./movieDetail";
import video from "./getTrailer"

export default configureStore({
    reducer: {
        movieList,
        detail,
        video
    }
    })


