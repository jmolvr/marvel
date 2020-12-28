import React from 'react';

import './index.css';

export default function Card({nome, imgsrc, url}) {
    return (
        <div className="card">
            <img src={imgsrc}/>
            <div className="container">
                <h4><b>{nome}</b></h4>
            </div>
        </div>
    );
}