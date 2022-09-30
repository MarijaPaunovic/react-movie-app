import React from 'react';
import './Header.css';
import Logo from './Logo';
import Credits from './Credits';

export const Header = () => {
    return (
        <>
            <header className='header'>
                <Logo />
                <Credits />
            </header>
        </>
    )
}

