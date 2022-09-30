import React from 'react';
import MovieLogo from '../../images/movie.svg';

function Logo() {
    return (
        <div>
            <img src={MovieLogo} alt="React Movie Logo" className='logo' />
        </div>
    )
}

export default Logo;