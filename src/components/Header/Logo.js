import React from 'react';
import MovieLogo from '../../images/movie.svg';

function Logo() {
    return (
        <div>
            <img src={MovieLogo} alt="React Movie Logo" className='logo' onClick={() => window.scroll(0, 0)} />
        </div>
    )
}

export default Logo;