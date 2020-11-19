import { TopRatedMoviesActionTypes } from './topRatedMoviesTypes';

export const getTopRatedMovies = () => {
    return async (dispatch) => {
        dispatch({ type: TopRatedMoviesActionTypes.FETCH_TOP_RATED_MOVIES_PENDING });
        try {
            const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=2f353b0bc0f2eaffd8aa6eb2474ee037&language=en-US&page=1`);
            const data = await res.json();
            dispatch({
                type: TopRatedMoviesActionTypes.FETCH_TOP_RATED_MOVIES_SUCCESS,
                payload: data.results
            })
        } catch (error) {
            dispatch({
                type: TopRatedMoviesActionTypes.FETCH_TOP_RATED_MOVIES_ERROR,
                error: error
            })
        }
    }
}