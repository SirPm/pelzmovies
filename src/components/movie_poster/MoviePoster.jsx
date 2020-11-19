import React from 'react';
import { Link } from 'react-router-dom';

import './movie_poster.styles.scss';

const MoviePoster = ({ id, poster_path, title, vote_average, genres, genre_ids }) => {
    const percentage = Math.round( vote_average * 10 );

    const genres_list = genres.filter( genre => genre_ids.indexOf(genre.id) !== -1 );
    

    return (
        <div className='movie_poster'>
            <div className="movie_poster_card">
                <img src={`https://image.tmdb.org/t/p/w500//${poster_path}`} alt="popularMoviePoster" className="movie_poster_img"/>
            </div>
            <div className="movie_poster_content">
                <span className="movie_poster_title">{ title }</span>
            </div>
            <div className="movie_poster_genre_div">
                {
                    genres_list.map( genre_item => <span key={genre_item.id} className='movie_poster_genre'>{genre_item.name}</span> )
                }
            </div>
            <Link to={`/movies/${id}`} className='play-icon-div'><i className="fas fa-play"></i></Link>
            <div className="movie_poster_percent">
                <span className="movie_poster_percent-num">{percentage}%</span>
            </div>
        </div>
    )
}

export default MoviePoster;