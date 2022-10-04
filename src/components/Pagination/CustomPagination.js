import React from 'react';
import Pagination from '@mui/material/Pagination';
import './CustomPagination.css';

function CustomPagination({ setPage, numOfPages = 10 }) {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }

    return (
        <div className='pagination'>
            <Pagination
                count={numOfPages}
                onChange={e => handlePageChange(e.target.textContent)}
                hideNextButton
                hidePrevButton
            />
        </div>
    )
}

export default CustomPagination;