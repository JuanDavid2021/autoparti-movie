import {configureStore} from '@reduxjs/toolkit';
import movieList from './movieList';

export default configureStore({
    reducer: {
        movieList
    }
    })


