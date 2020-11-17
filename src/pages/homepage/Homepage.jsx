import React, { useState, useEffect } from 'react';

import MoviePoster from '../../components/movie_poster/MoviePoster';

import './homepage.styles.scss';

const Homepage = () => {

    const [ popularMovies, setPopularMovies ] = useState([]);
    const [ genres, setGenres ] = useState([]);
    const [ upcomingMovies, setUpcomingMovies ] = useState([]);
    const [ topRatedMovies, setTopRatedMovies ] = useState([]);
    

    useEffect( () => {

        const getPopularMovies = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2f353b0bc0f2eaffd8aa6eb2474ee037&language=en-US&page=1`);

            const data = await res.json();

            setPopularMovies(data.results);
            // console.log(data);

        }

        getPopularMovies();

    }, [] );


    useEffect( () => {

        const getGenres = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=2f353b0bc0f2eaffd8aa6eb2474ee037&language=en-US`);
            const data = await res.json();

            setGenres(data.genres);

        }

        getGenres();

    }, [] );


    useEffect( () => {

        const getUpcomingMovies = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=2f353b0bc0f2eaffd8aa6eb2474ee037&language=en-US&page=1`);
            const data = await res.json();

            // console.log(data.results);

            setUpcomingMovies(data.results);

        }

        getUpcomingMovies();

    }, [] );


    useEffect( () => {

        const getTopRatedMovies = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=2f353b0bc0f2eaffd8aa6eb2474ee037&language=en-US&page=1`);
            const data = await res.json();

            // console.log(data.results);

            setTopRatedMovies(data.results);

        }

        getTopRatedMovies();

    }, [] );


    return (
        <div className='homepage'>            
            <div className='popular_movies_div'>
                <h2 className='popular_movies_heading'>Popular Movies</h2>
                <div className='popular_movies_inner_div'>
                    {
                        popularMovies.map( ({ id, ...otherPopularMovieData }) => <MoviePoster key={id} genres={genres} { ...otherPopularMovieData }/> )
                    }
                </div>
            </div>
            <div className='upcoming_movies_div'>
                <h2 className='upcoming_movies_heading'>Upcoming Movies</h2>
                <div className='upcoming_movies_inner_div'>
                    {
                        upcomingMovies.map( ({ id, ...otherUpcomingMovieData }) => <MoviePoster key={id} genres={genres} { ...otherUpcomingMovieData }/> )
                    }
                </div>
            </div>
            <div className='top_rated_movies_div'>
                <h2 className='top_rated_movies_heading'>Top Rated Movies</h2>
                <div className='top_rated_movies_inner_div'>
                    {
                        topRatedMovies.map( ({ id, ...otherTopRatedMovieData }) => <MoviePoster key={id} genres={genres} { ...otherTopRatedMovieData }/> )
                    }
                </div>
            </div>
        </div>
    )
}

export default Homepage;