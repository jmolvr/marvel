import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import Card from '../../components/Card';
import api from '../../services/api';
import {useCharacter, useListSeries} from '../../context/ListCharacter';
import './index.css';

export default function CharacterPage() {
    const {listSeries, setListSeries} = useListSeries();
    const {character, setCharacter} = useCharacter();

    let { id } = useParams(); //id do personagem

    useEffect(() => {
        async function loadData() {
            const responseCharacter = await api.get("/characters/" + id + "?ts=1609028329&apikey=079df4f6c6a9cc8debb648d7454c46c7&hash=cf4ab3509d919b6b843b87abbdcd50bd&offset=0");
            const responseListSeries = await api.get("/characters/" + id + "/series?ts=1609028329&apikey=079df4f6c6a9cc8debb648d7454c46c7&hash=cf4ab3509d919b6b843b87abbdcd50bd&offset=0");
            setCharacter(responseCharacter.data.data.results[0]);
            setListSeries(responseListSeries.data.data.results);
        }
        loadData();
    }, []);

    return (
        <div>
            <Header />
            <div className="character-bg">
                <div className="character-info">
                    <h1>{character.name}</h1>
                    <h2>{character.description}</h2>
                    {/*<img src={character.thumbnail.path + "." + character.thumbnail.extension} alt={character.name} /> */}
                </div>
            </div>

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