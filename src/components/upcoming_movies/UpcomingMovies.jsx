import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUpcomingMovies } from '../../redux/upcomingMovies/upcomingMoviesActions';

import MoviePoster from '../movie_poster/MoviePoster';

import './upcoming_movies.styles.scss';

const UpcomingMovies = ({ genres }) => {
    const dispatch = useDispatch();
    
    const { pending, error, upcomingMovies } = useSelector( state => state.upcomingMovies );

    useEffect( () => {
        dispatch( getUpcomingMovies() );
    }, [dispatch] );

    if (error) {
        return <div className='loading'>
            Error! {error.message}
        </div>
    }

    return (
        <div className='upcoming_movies_div'>
            {
                !pending ? (
                    <div className='upcoming_movies_loaded'>
                        {
                            upcomingMovies ? ( <h2 className='upcoming_movies_heading'>Upcoming Movies</h2> ) : null
                        }
                        <div className='upcoming_movies_inner_div'>
                            {
                                upcomingMovies.map( ({ id, ...otherUpcomingMovieData }) => <MoviePoster key={id} id={id} genres={genres} { ...otherUpcomingMovieData } /> )
                            }
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

export default UpcomingMovies;