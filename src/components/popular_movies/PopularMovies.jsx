import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPopularMovies } from '../../redux/popularMovies/popularMoviesActions';
import MoviePoster from '../movie_poster/MoviePoster';

import './popular_movies.styles.scss';

const PopularMovies = ({ genres }) => {
    const dispatch = useDispatch();

    const { error, pending, popularMovies } = useSelector( state => state.popularMovies );

    useEffect( () => {
        dispatch( getPopularMovies() );
    }, [dispatch] );

    if (error) {
        <div className='loading'>
            Error! {error.message}
        </div>
    }


    return (
        <div className='popular_movies_div'>
            {
                !pending ? (
                    <div className="popular_movies_loaded">
                        <h2 className='popular_movies_heading'>Popular Movies</h2>
                        <div className='popular_movies_inner_div'>
                            {
                                popularMovies.map( ({ id, ...otherPopularMovieData }) => <MoviePoster key={id} id={id} genres={genres} { ...otherPopularMovieData } /> )
                            }
                        </div>
                    </div>
                ) : (
                    <div className='loading'>
                        <h1> Loading...</h1>
                    </div>
                )
            }
        </div>
    )
}

export default PopularMovies;