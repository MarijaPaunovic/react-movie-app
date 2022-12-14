import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiKey } from '../../config/apiKey';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';
import TextField from '@mui/material/TextField';
import { Button, Tabs, Tab } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
    const [type, setType] = useState(0);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const fetchSearch = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?${apiKey}&language=en-US&query=${searchText}&page=${page}&include_adult=false`);

            // console.log(data);
            setContent(data.results);
            setNumOfPages(data.total_pages);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
    }, [type, page]);

    return (
        <div>
            <h1 className='pageTitle'>Search</h1>
            <div style={{ display: 'flex', margin: '15px 0' }}>
                <TextField
                    style={{ flex: 1 }}
                    className='searchBox'
                    label='Search'
                    variant='filled'
                    onChange={e => setSearchText(e.target.value)}
                />
                <Button
                    variant='contained'
                    style={{ marginLeft: 10 }}
                    onClick={fetchSearch}
                >
                    <SearchIcon />
                </Button>
            </div>
            <Tabs
                value={type}
                indicatorColor='primary'
                textColor='primary'
                onChange={(event, newValue) => {
                    setType(newValue);
                    setPage(1);
                }}
                style={{ paddingBottom: 20 }}
            >
                <Tab style={{ width: '50%' }} label='Search Movie' />
                <Tab style={{ width: '50%' }} label='Search TV Series' />
            </Tabs>
            <div className='popular'>
                {content && content.map((c) => (
                    <SingleContent
                        key={c.id}
                        id={c.id}
                        poster={c.poster_path}
                        title={c.title || c.name}
                        date={c.release_date || c.first_air_date}
                        media_type={type ? 'tv' : 'movie'}
                        vote_average={Math.round(c.vote_average * 10) / 10}
                    />
                ))}
                {searchText &&
                    !content &&
                    (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
            </div>
            {
                numOfPages > 1 && (<CustomPagination setPage={setPage} numOfPages={numOfPages} />)
            }
        </div>
    )
}

export default Search;