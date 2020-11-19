import React, { useState, useEffect } from 'react';

import PopularMovies from '../../components/popular_movies/PopularMovies';
import UpcomingMovies from '../../components/upcoming_movies/UpcomingMovies';
import TopRatedMovies from '../../components/top_rated_movies/TopRatedMovies';

import './homepage.styles.scss';

const Homepage = () => {    
    const [ genres, setGenres ] = useState([]);

    useEffect( () => {

        const getGenres = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=2f353b0bc0f2eaffd8aa6eb2474ee037&language=en-US`);
            const data = await res.json();

            setGenres(data.genres);

        }

        getGenres();

    }, [] );

    
    return (
        <div className='homepage'>            
            <PopularMovies genres={genres} />
            <UpcomingMovies genres={genres} />
            <TopRatedMovies genres={genres} />
        </div>
    )
}

export default Homepage;