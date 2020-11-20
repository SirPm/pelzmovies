import { PopularMoviesActionTypes } from './popularMoviesTypes';

const INITIAL_STATE = {
    pending: true,
    error: null,
    popularMovies: []
}

const popularMoviesReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case PopularMoviesActionTypes.FETCH_POPULAR_MOVIES_PENDING :
            return {
                ...state,
                pending: true
            }
        case PopularMoviesActionTypes.FETCH_POPULAR_MOVIES_SUCCESS :
            return {
                ...state,
                pending: false,
                popularMovies: action.payload
            }
        case PopularMoviesActionTypes.FETCH_POPULAR_MOVIES_ERROR :
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default :
            return state
    }
}

export default popularMoviesReducer;