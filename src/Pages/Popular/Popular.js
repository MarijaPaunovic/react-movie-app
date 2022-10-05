import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';
import { apiKey } from '../../config/apiKey';
import './Popular.css';

function Popular() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  const fetchPopular = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?${apiKey}&page=${page}`);
    // console.log(data.results);
    setContent(data.results);
  };

  useEffect(() => {
    fetchPopular();
    // eslint-disable-next-line
  }, [page])


  return (
    <div>
      <h1 className='pageTitle'>Popular</h1>
      <div className='popular'>
        {
          content && content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.release_date || c.first_air_date}
              media_type={c.media_type}
              vote_average={Math.round(c.vote_average * 10) / 10}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  )
}

export default Popular;