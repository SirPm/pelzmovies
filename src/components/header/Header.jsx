import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../pelzmoviesLogo.svg';

import './header.styles.scss';

const Header = () => {

    const [ open, setOpen ] = useState(false);
    const [ searchQuery, setSearchQuery ] = useState('');
    const [ searchResults, setSearchResults ] = useState([]);
    const [ showResultsDivStatus, setShowResultsDivStatus ] = useState(false);
    const [ totalResults, setTotalResults ] = useState('');

    const toggleMenu = () => setOpen(!open);

    // function to search for a movie from the API
    const getSearchedMovie = async (searchParam) => {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2f353b0bc0f2eaffd8aa6eb2474ee037&language=en-US&query=${searchParam}&page=1&include_adult=false`);
        const data = await res.json();
        const results = data.results;

        // console.log(data)
        setSearchResults(results);
        setTotalResults(data.total_results);
    }

    const fetchSearchedMovie = (searchVal) => {
        if ( searchVal !== '' ) {
            getSearchedMovie(searchVal)
        } // condition on which the search function should be called
    }


    // console.log(searchQuery);
    // console.log(searchResults);
    // console.log( totalResults, typeof(totalResults) );

    // show the search_results_div when somebody starts typing
    useEffect( () => {
        if (searchQuery) {
            setShowResultsDivStatus(true);
        } else {
            setShowResultsDivStatus(false);
        }
    }, [ showResultsDivStatus, searchQuery ] );

    return (
        <header className='header'>
            <div className="header_inner_div">
                <Link className='logo_link' to='/'><Logo className='logo' /></Link>
                <div className='search_input_div'>
                    <input 
                        type='text' 
                        placeholder='e.g Naruto Shippuden'
                        value={searchQuery}
                        className='search_input'
                        onChange={ 
                            e => {
                                setSearchQuery(e.target.value);                        
                                fetchSearchedMovie(e.target.value); // calls a function that calls the search funtion with a condition
                            }
                        } 
                    />
                    <i className="fas fa-search"></i>
                </div>
                <div className="menu-btn" onClick={toggleMenu}>
                    <span className={` ${ open ? 'open' : '' }  menu-btn__burger`}></span>
                </div>
                <nav className={` ${ open ? 'open' : '' } nav`}>                
                    <ul className={` ${ open ? 'open' : '' } menu-nav`}>
                        <li className={` ${ open ? 'open' : '' } activeItem menu-nav__item`}><Link to="/" className="menu-nav__link" onClick={toggleMenu}>Home</Link></li>
                        <li className={` ${ open ? 'open' : '' } activeItem menu-nav__item`}><Link to="/tvshows" className="menu-nav__link" onClick={toggleMenu}>TV Shows</Link></li>
                        <li className={` ${ open ? 'open' : '' } activeItem menu-nav__item`}><Link to="/actors" className="menu-nav__link" onClick={toggleMenu}>Actors</Link></li>
                    </ul>
                </nav>
                <div className={` ${ showResultsDivStatus ? 'show_results_div' : 'hide_results_div' } search_results_div `}>
                    {
                        ( searchResults.length > 0 ) ? (
                            searchResults.map( ({ id, title, poster_path }) => <Link to={`/movies/${id}`} key={id} className='search_result_div' onClick={ () => {
                                setShowResultsDivStatus(false);
                                setSearchQuery('');
                            } }>
                                <img src={`https://image.tmdb.org/t/p/w92/${poster_path}`} className='search_result_img' alt='searchResultImage' />
                                <span className='search_result' >{title}</span>
                            </Link> )
                        ) : ( 
                            <div className={` ${ (totalResults === 0) ? 'hide_search_div_loading' : 'search_div_loading' } `}>
                                <span className='search_loading'>Searching for that awesome movie...</span>
                            </div> 
                        )
                    }
                    {
                        ( totalResults === 0 ) ? (
                            <div className='total_results_div_loading'>
                                <span className='total_results_loading'>Aww movie not found!!</span>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;