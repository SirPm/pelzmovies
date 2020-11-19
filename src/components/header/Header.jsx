import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {

    const [ open, setOpen ] = useState(false);
    const [ searchQuery, setSearchQuery ] = useState('');
    const [ searchResults, setSearchResults ] = useState([]);
    const [ showResultsDivStatus, setShowResultsDivStatus ] = useState(false);

    const toggleMenu = () => setOpen(!open);

    // function to search for a movie from the API
    const getSearchedMovie = async (searchParam) => {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2f353b0bc0f2eaffd8aa6eb2474ee037&language=en-US&query=${searchParam}&page=1&include_adult=false`);
        const data = await res.json();
        const results = data.results;

        console.log(data)
        setSearchResults(results);
    }

    const fetchSearchedMovie = (searchVal) => {
        if ( searchVal !== '' ) {
            getSearchedMovie(searchVal)
        } // condition on which the search function should be called
    }


    console.log(searchQuery)
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
            <input 
                type='text' 
                placeholder='e.g High School Musical'
                value={searchQuery}
                className='search_input'
                onChange={ 
                    e => {
                        setSearchQuery(e.target.value);                        
                        fetchSearchedMovie(e.target.value); // calls a function that calls the search funtion with a condition
                    }
                } 
            />
            <div className="menu-btn" onClick={toggleMenu}>
                <span className={` ${ open ? 'open' : '' }  menu-btn__burger`}></span>
            </div>
            <nav className={` ${ open ? 'open' : '' } nav`}>                
                <ul className={` ${ open ? 'open' : '' } menu-nav`}>
                    <li className={` ${ open ? 'open' : '' } activeItem menu-nav__item`}><Link to="/" className="menu-nav__link" onClick={toggleMenu}>Home</Link></li>
                </ul>
            </nav>
            <div className={` ${ showResultsDivStatus ? 'show_results_div' : 'hide_results_div' } search_results_div `}>
                {
                    searchResults ? (
                        searchResults.map( ({ id, title }) => <Link to={`/movies/${id}`} key={id} className='search_result' onClick={ () => {
                                setShowResultsDivStatus(false);
                                setSearchQuery('');
                            } }>
                            {title}
                        </Link> )
                    ) : ( 
                        <span className='search_loading'>Searching for that awesome movie...</span> 
                    )
                }
            </div>
        </header>
    )
}

export default Header;