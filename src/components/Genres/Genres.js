import React, { useEffect } from 'react';
import axios from 'axios';
import { apiKey } from '../../config/apiKey';
import './Genres.css';
import Chip from '@mui/material/Chip';

const Genres = ({ type, genres, selectedGenres, setGenres, setSelectedGenres, setPage }) => {

    const handleAdd = genre => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter( g => g.id !== genre.id));
        setPage(1);
    };

    const handleRemove = genre => {
        setSelectedGenres(selectedGenres.filter( selected => selected.id !== genre.id));
        setGenres([...genres, genre]);
        setPage(1);
    };

    const fetchGenres = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?${apiKey}&language=en-US`
        );
        setGenres(data.genres);
    };

    // console.log(genres);

    useEffect(() => {
        fetchGenres();

        return () => {
            setGenres({});
        }
    }, []);


    return (
        <div className='genres'>
            {
                selectedGenres.length ? selectedGenres.map((genre) => (
                    <Chip
                        label={genre.name}
                        style={{ margin: 2 }}
                        clickable
                        size='small'
                        key={genre.id}
                        color='primary'
                        onDelete={() => handleRemove(genre)}
                    />     
                )) : null
            }
            {
                genres.length ? genres.map((genre) => (
                    <Chip
                        label={genre.name}
                        style={{ margin: 2 }}
                        clickable
                        size='small'
                        key={genre.id}
                        onClick={() => handleAdd(genre)}
                    />
                )) : null
            }
        </div>
    )
}

export default Genres;