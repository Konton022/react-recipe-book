import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='navbar-fixed'>
            <nav className='grey'>
                <div className='nav-wrapper'>
                    <Link to='/' className='brand-logo'>
                        REACT RECIPE BOOK
                    </Link>
                    <ul className='right hide-on-med-and-down'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/contacts'>Contacts</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;
