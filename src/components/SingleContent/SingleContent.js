import React from 'react';
import { img_300, unavailableImage } from '../../config/config';
import './SingleContent.css';

function SingleContent({ id, poster, title, date, media_type, vote_average }) {
    return (
        <div className='card'>
            <img className='poster' src={poster ? `${img_300}/${poster}` : unavailableImage} alt={title} />
            <div className='wrapper'>
                <h1 className='title'>{title}</h1>
                <p className='subTitle'>
                    {media_type === 'tv' ? 'TV Series' : 'Movie'}
                    <span className='subTitle'>{date}</span>
                </p>
            </div>
        </div>
    )
}

export default SingleContent;