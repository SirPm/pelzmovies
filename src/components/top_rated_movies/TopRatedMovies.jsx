import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTopRatedMovies } from '../../redux/topRatedMovies/topRatedMoviesActions';
import MoviePoster from '../movie_poster/MoviePoster';

import './top_rated_movies.styles.scss';

const TopRatedMovies = ({ genres }) => {
    const dispatch = useDispatch();
    const { error, pending, topRatedMovies } = useSelector( state => state.topRatedMovies );

    useEffect( () => {
        dispatch( getTopRatedMovies() );
    }, [dispatch] );

    if (error) {
        return <div className='loading'>
            Error! {error.message}
        </div>
    }


    return (
        <div className='top_rated_movies_div'>
            {
                !pending ? (
                    <div className='top_rated_movies_loaded'>
                        {
                            topRatedMovies ? ( <h2 className='top_rated_movies_heading'>Top Rated Movies</h2> ) : null
                        }
                        <div className='top_rated_movies_inner_div'>
                            {
                                topRatedMovies.map( ({ id, ...otherTopRatedMovieData }) => <MoviePoster key={id} id={id} genres={genres} { ...otherTopRatedMovieData } /> )
                            }
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

export default TopRatedMovies;