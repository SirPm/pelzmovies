import { combineReducers } from 'redux';

import popularMoviesReducer from './popularMovies/popularMoviesReducer';
import upcomingMoviesReducer from './upcomingMovies/upcomingMoviesReducer';
import topRatedMoviesReducer from './topRatedMovies/topRatedMoviesReducer';

const rootReducer = combineReducers({
    popularMovies: popularMoviesReducer,
    upcomingMovies: upcomingMoviesReducer,
    topRatedMovies: topRatedMoviesReducer
})

export default rootReducer;