import { UpcomingMoviesActionTypes } from './upcomingMoviesTypes';

export const getUpcomingMovies = () => {
    return async (dispatch) => {
        dispatch({ type: UpcomingMoviesActionTypes.FETCH_UPCOMING_MOVIES_PENDING });

        try {
            const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=2f353b0bc0f2eaffd8aa6eb2474ee037&language=en-US&page=1`);
            const data = await res.json();

            dispatch({
                type: UpcomingMoviesActionTypes.FETCH_UPCOMING_MOVIES_SUCCESS,
                payload: data.results
            })
        } catch (error) {
            dispatch({
                type: UpcomingMoviesActionTypes.FETCH_UPCOMING_MOVIES_ERROR,
                payload: error
            })
        }
    }
}