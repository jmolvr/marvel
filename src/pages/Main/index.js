import React, {useEffect} from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import {useParams} from 'react-router-dom';
import api from '../../services/api';
import { useListCharacter } from '../../context/ListCharacter';

import './index.css';
export default function Main() {

    const { listCharacter, setListCharacter, handleLoadCharacterList } = useListCharacter();

    let {page} = useParams();
    
    useEffect(() => { 
        async function loadData(){
            const offset = (page -1) * 20;
            const response = await api.get("/characters?ts=1609028329&apikey=079df4f6c6a9cc8debb648d7454c46c7&hash=cf4ab3509d919b6b843b87abbdcd50bd&offset=" + offset);
            setListCharacter(response.data.data.results);
        }      
        loadData();
    }, []);


    return (
        <div>
            <Header />
            <div className="container">
                <div className="characters-list">
                    {listCharacter && listCharacter.map(
                        character => <Card key={character.id} id={character.id} nome={character.name} imgsrc={character.thumbnail.path + "." + character.thumbnail.extension} />
                    )}
                </div>
            </div>

        </div>
    );
}