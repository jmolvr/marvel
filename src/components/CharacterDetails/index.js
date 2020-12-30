import React from 'react';
import './index.css';
export default function CharacterDetails({ character }) {
    const imgsrc = `${character.thumbnail.path}.${character.thumbnail.extension}`;
    return (
        <div className="character-bg">
            <div className="character-info">
                <div className="info">
                    <h3>{character.name}</h3>
                    <p>{character.description}</p>
                </div>
                <div class="image">
                   <img src={imgsrc}/>
                </div>
            </div>
        </div>

    );
}