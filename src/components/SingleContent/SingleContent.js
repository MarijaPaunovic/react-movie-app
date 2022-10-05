import React from 'react';
import { Badge } from '@mui/material';
import { img_300, unavailableImage } from '../../config/config';
import './SingleContent.css';
import ContentModal from '../ContentModal/ContentModal';

function SingleContent({ id, poster, title, date, media_type, vote_average }) {
    return (
        <ContentModal media_type={media_type} id={id}>
            <Badge
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                badgeContent={vote_average}
                color={vote_average > 6 ? 'success' : 'secondary'}
            />
            <img className='poster' src={poster ? `${img_300}/${poster}` : unavailableImage} alt={title} />
            <div className='wrapper'>
                <h2 className='title'>{title}</h2>
                <p className='subTitle'>
                    {media_type === 'tv' ? 'TV Series' : 'Movie'}
                    <span className='subTitle'>{date}</span>
                </p>
            </div>
        </ContentModal>
    )
}

export default SingleContent;