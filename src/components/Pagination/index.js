import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './index.css';

export default function Pagination({ page, totalItems }) {
    const [list, setList] = useState([]);
    const [maxPages] = useState(Math.ceil(Number(totalItems)/20));
    let history = useHistory();
    
    function handleClickPrevious() {
        if (page > 1)
            history.push(`${Number(page) - 1}`);
    }

    function handleClickForward() {
        if (page < maxPages)
            history.push(`${Number(page) + 1}`);

    }

    useEffect(() => {
        let listAux = [];

        if(maxPages <= 10){
            for(let i = 1; i <= maxPages; i++){
                listAux.push(i);
            }
        }
        else if (page <= 3) {
            for (let i = 1; i <= 9; i++) {
                listAux.push(i);
            }
        }
        else if (page >= 3 && page <= (maxPages - 3)) {
            for (let i = (page - 3); i <= (Number(page) + 4); i++) {
                listAux.push(i);
            }
        }
        else {
            for (let i = maxPages - 8; i <= maxPages; i++) {
                listAux.push(i);
            }
        }

        setList(listAux);

    }, [page]);


    return (
        <div>
            {!!totalItems && 
                <div className="pagination">
                <a onClick={handleClickPrevious}>&laquo;</a>
                {list.map(element =>
                    <Link key={element} to={`${element}`} className={page == element && "active"}>
                        {element}
                    </Link>
                )}
                <a onClick={handleClickForward}>&raquo;</a>
            </div>
            }
        </div>
        
    );
}