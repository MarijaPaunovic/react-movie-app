import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SingleContent from '../../components/SingleContent/SingleContent';
import { apiKey } from '../../config/apiKey';

function Popular() {
  const [content, setContent] = useState([]);

  const fetchPopular = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?${apiKey}`);

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
          content && content.map((c) => <SingleContent key={c.id} />)
        }
      </div>
    </div>
  )
}

export default Popular;