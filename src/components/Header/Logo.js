import React from 'react';
import MovieLogo from '../../images/movie.svg';
import { useNavigate } from 'react-router-dom';

function Logo() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/', { replace: true });
    };

    return (
        <div>
            <img src={MovieLogo} alt="React Movie Logo" className='logo' onClick={handleClick} />
        </div>
    )
}

export default Logo;