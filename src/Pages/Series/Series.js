import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiKey } from '../../config/apiKey';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';
import Genres from '../../components/Genres/Genres';
import useGenres from '../../hooks/useGenre';

function Series() {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);

    const genreforURL = useGenres(selectedGenres);

    const fetchMovies = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);

        // console.log(data.total_pages);
        setContent(data.results);
        setNumOfPages(data.total_pages);

    };

    useEffect(() => {
        fetchMovies();
        // eslint-disable-next-line
    }, [page, genreforURL])

    return (
        <div>
            <h1 className='pageTitle'>Discover Series</h1>
            <Genres
                type='tv'
                genres={genres}
                selectedGenres={selectedGenres}
                setGenres={setGenres}
                setSelectedGenres={setSelectedGenres}
                setPage={setPage}
            />
            <div className='popular'>
                {
                    content.length && content.map((c) => (
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.release_date || c.first_air_date}
                            media_type='tv'
                            vote_average={Math.round(c.vote_average * 10) / 10}
                        />
                    ))}
            </div>
            {
                numOfPages > 1 && (<CustomPagination setPage={setPage} numOfPages={numOfPages} />)
            }
        </div>
    )
}

export default Series;