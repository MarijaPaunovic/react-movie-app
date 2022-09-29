import React from 'react';
import './Header.css';
import MovieLogo from '../../images/movie.svg';
import Credits from './Credits';


export const Header = () => {
    return (
        <div>
            <header className='header'>
                <img src={MovieLogo} alt="React Movie Logo" className='logo' />
                <Credits />
            </header>
        </div>
    )
}

