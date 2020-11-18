import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {

    const [ open, setOpen ] = useState(false);

    const toggleMenu = () => setOpen(!open);

    return (
        <header className='header'>
            <input type='text' placeholder='e.g Step Up' />
            <div className="menu-btn" onClick={toggleMenu}>
                <span className={` ${ open ? 'open' : '' }  menu-btn__burger`}></span>
            </div>
            <nav className={` ${ open ? 'open' : '' } nav`}>                
                <ul className={` ${ open ? 'open' : '' } menu-nav`}>
                    <li className={` ${ open ? 'open' : '' } activeItem menu-nav__item`}><Link to="/" className="menu-nav__link" onClick={toggleMenu}>Home</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;