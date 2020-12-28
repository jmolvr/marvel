import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';

import { useListCharacter } from '../../context/ListCharacter';

import api from '../../services/api';
import './index.css';
export default function Main() {

    const { listCharacter, setListCharacter } = useListCharacter();

    


    return (
        <div>
            <Header />
            <div className="container">
                <div className="characters-list">
                    {listCharacter && listCharacter.map(
                        character => <Card key={character.id} nome={character.name} imgsrc={character.thumbnail.path + "." + character.thumbnail.extension} />
                    )}
                </div>
            </div>

        </div>
    );
}