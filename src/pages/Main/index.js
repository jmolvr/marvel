import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import SearchBar from "../../components/SearchBar";
import Pagination from '../../components/Pagination';
import { useParams } from 'react-router-dom';
import { useListCharacter } from '../../context/ListCharacter';

import './index.css';
export default function Main() {

    const { listCharacter, handleLoadCharacterList } = useListCharacter();

    let { page } = useParams();

    useEffect(() => {
        async function loadData() {
            handleLoadCharacterList(page);
        }
        loadData();
    }, [page]);


    return (
        <div>
            <Header>
                <SearchBar />
            </Header>
            <div className="characters-list">
                {listCharacter && listCharacter.map(
                    character => <Card key={character.id} id={character.id} nome={character.name} imgsrc={character.thumbnail.path + "." + character.thumbnail.extension} />
                )}
            </div>
            <div className="pagination-bar">
                <Pagination page={page} baseURL={"/"} />
            </div>
        </div>
    );
}