import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function Card({ id, nome, imgsrc }) {
    return (
        <Link to={"/character/" + id}>
            <div className="card">
                <img src={imgsrc} />
                <div className="container">
                    <h4><b>{nome}</b></h4>
                </div>
            </div>
        </Link>

    );
}