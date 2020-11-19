import React from 'react';

import './movie.styles.scss';

const Movie = ({ movieData: { genres, overview, poster_path, vote_average, release_date, title }, castAndCrew, movieImages }) => {
    const percentage = Math.round( vote_average * 10 );
    /* const cast_and_crew = JSON.parse(castAndCrew);

    console.log(cast_and_crew); */
    // console.log(castAndCrew.cast);
    const { cast, crew } = castAndCrew;

    console.log(vote_average);
    // console.log(crew);
    const shortened_crew_list = crew.slice(0, 3);
    const shortened_cast_list = cast.slice(0, 6);
    // console.log(shortened_crew_list);
    // console.log(shortened_cast_list);

    return (
        <div className='movie'>
            <div className="movie_img_and_content">
                <div className="movie_img">
                    {
                        poster_path ? (
                            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="movieImg"/>
                        ) : ( <span class='no_poster_img'>We're sorry but there's no official public poster yet</span>)
                    }
                    <div className="percent">
                        <span className="percent-num">{percentage}%</span>
                    </div>
                </div>
                <div className="movie_content">
                    <div className="movie_info">
                        <span className="movie_title">{title}</span>
                        <div className="air_date_div">
                            <span className="air_date_label">Original Air Date:</span>
                            <span className="air_date">{release_date}</span>
                        </div>
                    </div>
                    <div className="genre_div">
                        <span className="genre_label">Genres:</span>
                        <div className="genres">
                            {
                                genres.map( elem => <span key={elem.id} className='genre'>{elem.name}</span> )
                            }
                        </div>
                    </div>
                    <div className="movie_overview_div">
                        <h2 className="movie_overview_heading">Movie Overview</h2>
                        <p className="movie_overview">{overview}</p>
                    </div>
                    <div className="crew">
                        <h2 className="crew_heading">Crew Members</h2>
                        {
                            shortened_crew_list.map( ( elem, index ) => <div key={index} className='crew_member'>
                                <span className='crew_member_name'>{elem.name}</span>
                                <span className='crew_member_job'>{elem.job}</span>
                            </div> )
                        }                        
                    </div>
                </div>
            </div>
            <div className="cast_div">
                <h2 className="cast_heading">Cast</h2>
                <div className="cast_content">
                    {
                        shortened_cast_list.map( ({ id, profile_path, name, character }) => <div key={id} className='cast_member'>
                            {
                                profile_path ? (
                                    <div className="cast_img_div">
                                        <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt="castImage"/>
                                    </div>
                                ) : (
                                    <div className="no_cast_img_div">
                                        <span className="no_cast_img">We're sorry but there's no official public image for {name} </span>
                                    </div>
                                )
                            }
                            <div className="cast_details">
                                <span className="cast_name">{name}</span>
                                { character ? ( <span className='cast_character_name'>{character}</span> ) : null }
                            </div>
                        </div> )
                    }
                </div>
            </div>
            <div className="movie_images">
                <h2 className="movie_images_heading">Images</h2>
                <div className="movie_images_div">
                    {
                        movieImages.map( ( movieImage, index ) => <div key={index} className='movie_image_div'>
                            <img src={`https://image.tmdb.org/t/p/w500/${movieImage.file_path}`} alt="movieImage" className="movie_image" />
                        </div> )
                    }
                </div>
            </div>
        </div>
    )
}

export default Movie;