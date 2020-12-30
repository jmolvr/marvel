import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import Card from '../../components/Card';
import CharacterDetails from '../../components/CharacterDetails';

import {useCharacter, useHandleLoadCharacter, useListSeries} from '../../context/ListCharacter';
import './index.css';

export default function CharacterPage() {
    const {listSeries} = useListSeries();
    const {character} = useCharacter();
    const {handleLoadCharacter} = useHandleLoadCharacter();
    
    let { id } = useParams(); //id do personagem

    useEffect(() => {
        async function loadData() {
            handleLoadCharacter(id);
        }
        loadData();
    }, []);

    return (
        <div>
            <Header />
            {!!character && <CharacterDetails character={character} /> }
            <section id="series_title">
                <h2>Series</h2> 
            </section>
            <div className="series-list">
                {listSeries && listSeries.map(
                    serie => <Card key={serie.id} id={serie.id} nome={serie.title} imgsrc={serie.thumbnail.path + "." + serie.thumbnail.extension} />
                )}
            </div>

        </div>

    );
}