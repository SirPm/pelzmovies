import React, { useState } from 'react';

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
                    <li className={` ${ open ? 'open' : '' } activeItem menu-nav__item`}><a href="!#" className="menu-nav__link">Test Link</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;