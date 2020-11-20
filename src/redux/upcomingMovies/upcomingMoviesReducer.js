import { UpcomingMoviesActionTypes } from './upcomingMoviesTypes';

const INITIAL_STATE = {
    pending: true,
    upcomingMovies: [],
    error: null
}

const upcomingMoviesReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case UpcomingMoviesActionTypes.FETCH_UPCOMING_MOVIES_PENDING :
            return {
                ...state,
                pending: true
            }
        case UpcomingMoviesActionTypes.FETCH_UPCOMING_MOVIES_SUCCESS :
            return {
                ...state,
                pending: false,
                upcomingMovies: action.payload
            }
        case UpcomingMoviesActionTypes.FETCH_UPCOMING_MOVIES_ERROR :
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default :
            return state;
    }
}

export default upcomingMoviesReducer;