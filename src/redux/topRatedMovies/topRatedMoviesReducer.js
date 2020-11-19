import { TopRatedMoviesActionTypes } from './topRatedMoviesTypes';

const INITIAL_STATE = {
    error: null,
    pending: false,
    topRatedMovies: []
}

const topRatedMoviesReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case TopRatedMoviesActionTypes.FETCH_TOP_RATED_MOVIES_PENDING :
            return {
                ...state,
                pending: true
            }
        case TopRatedMoviesActionTypes.FETCH_TOP_RATED_MOVIES_SUCCESS :
            return {
                ...state,
                pending: false,
                topRatedMovies: action.payload
            }
        case TopRatedMoviesActionTypes.FETCH_TOP_RATED_MOVIES_ERROR :
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default :
            return state;
    }
}

export default topRatedMoviesReducer;