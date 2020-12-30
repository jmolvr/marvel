import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function Card({ id, nome, imgsrc }) {
    return (
        <Link to={`/character/${id}/series/1`}>
            <div className="card">
                <img src={imgsrc} alt={nome}/>
                <div className="container">
                    <h4><b>{nome}</b></h4>
                </div>
            </div>
        </Link>

    );
}