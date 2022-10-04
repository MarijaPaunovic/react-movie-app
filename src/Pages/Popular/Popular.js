import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import { apiKey } from '../../config/apiKey';

function Popular() {
  const [content, setContent] = useState([]);

  const fetchPopular = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?${apiKey}`);
    // console.log(data.results);
    setContent(data.results);
  };

  useEffect(() => {
    fetchPopular();
  }, [])


  return (
    <div>
      <span>Popular</span>
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
              vote_average={c.vote_average}
            />
          ))}
      </div>
    </div>
  )
}

export default Popular;