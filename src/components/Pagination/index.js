import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './index.css';

export default function Pagination({ page, baseURL }) {
    const [list, setList] = useState([]);
    let history = useHistory();

    function handleClickPrevious() {
        if (page > 1)
            history.push(`${baseURL}${Number(page) - 1}`);
    }

    function handleClickForward() {
        if (page < 75)
            history.push(`${baseURL}${Number(page) + 1}`);

    }

    useEffect(() => {
        let listAux = [];
        if (page <= 3) {
            for (let i = 1; i <= 9; i++) {
                listAux.push(i);
            }
        }
        else if (page >= 3 && page <= (75 - 3)) {
            for (let i = (page - 3); i <= (Number(page) + 4); i++) {
                listAux.push(i);
            }
        }

        else {
            for (let i = 75 - 8; i <= 75; i++) {
                listAux.push(i);
            }
        }

        setList(listAux);

    }, [page]);


    return (
        <div className="pagination">
            <a onClick={handleClickPrevious}>&laquo;</a>
            {list.map(element =>
                <Link key={element} to={`${baseURL}${element}`} className={page == element && "active"}>
                    {element}
                </Link>
            )}
            <a onClick={handleClickForward}>&raquo;</a>
        </div>
    );
}