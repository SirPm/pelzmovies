import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Movie from '../../components/movie/Movie';

import './movie_page.styles.scss';

const MoviePage = ({ match }) => {
    const [ movieData, setMovieData ] = useState({});
    const [ castAndCrew, setCastAndCrew ] = useState("");
    const [ movieImages, setMovieImages ] = useState([]);

    const movie_id = match.params.movie_id;

    useEffect( () => {
        let isSubscribed = true;

        const getMovieData = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=2f353b0bc0f2eaffd8aa6eb2474ee037&language=en-US`);
            const data = await res.json();

            // console.log(data);
            if (isSubscribed) {
                setMovieData(data);
            }

        }

        getMovieData();

        // cancel subscription made by the async call leaking data or better still, 
        // prevent hook from resetting state when component unmounts
        return () => isSubscribed = false;

    }, [movie_id] );


    useEffect( () => {
        let isSubscribed = true;

        const getCastAndCrew = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=2f353b0bc0f2eaffd8aa6eb2474ee037&language=en-US`);
            const data = await res.json();
            //const jsonData = JSON.stringify(data);

            // console.log(data);
            
            if (isSubscribed) {
                setCastAndCrew(data);
            }

        }

        getCastAndCrew();

        return () => isSubscribed = false;

    }, [movie_id] );


    useEffect( () => {
        let isSubscribed = true;

        const getMovieImages = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/images?api_key=2f353b0bc0f2eaffd8aa6eb2474ee037&language=en-US&include_image_language=en`);
            const data = await res.json();
            // console.log(data);
            const {posters} = data;
            
            if (isSubscribed) {
                setMovieImages(posters);
            }

        }

        getMovieImages();

        return () => isSubscribed = false;

    }, [movie_id] );


    return (
        <div className="movie_page">
            {
                ( movieData && castAndCrew && movieImages ) ? (
                    <Movie movieData={movieData} castAndCrew={castAndCrew} movieImages={movieImages} />
                ) : (
                    <span>Please wait a moment while we get the movie info...</span>
                )
            }
        </div>
    )
}

export default withRouter(MoviePage);