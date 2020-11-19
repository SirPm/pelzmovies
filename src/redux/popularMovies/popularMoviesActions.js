import { PopularMoviesActionTypes } from './popularMoviesTypes';

export const getPopularMovies = () => {

    return async (dispatch) => {
        dispatch({ type: PopularMoviesActionTypes.FETCH_POPULAR_MOVIES_PENDING });

        try {
            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2f353b0bc0f2eaffd8aa6eb2474ee037&language=en-US&page=1`);
            const data = await res.json();
            dispatch({
                type: PopularMoviesActionTypes.FETCH_POPULAR_MOVIES_SUCCESS,
                payload: data.results
            })
        } catch (error) {
            dispatch({
                type: PopularMoviesActionTypes.FETCH_POPULAR_MOVIES_ERROR,
                error: error
            })
        }
    }
}
