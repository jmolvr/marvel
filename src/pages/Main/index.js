import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import SearchBar from "../../components/SearchBar";
import Pagination from '../../components/Pagination';

import Loading from '../../components/Loading';
import { useParams } from 'react-router-dom';
import { useListCharacter } from '../../context/ListCharacter';
import { useLoading } from "../../context/Loading";

import './index.css';
export default function Main() {

    const { listCharacter, handleLoadCharacterList } = useListCharacter();
    const { isLoading, setLoading } = useLoading();

    let { page } = useParams();

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            await handleLoadCharacterList(page);
            window.scrollTo(0,0);
            setLoading(false);
        }
        loadData();
    }, [page]);


    return (
        <div>
            <Header>
                <SearchBar />
            </Header>

            {isLoading ?

                <div className="loading">
                     <Loading type={"spin"} color={"#e23636"} />
                 </div>
                :
                <div>
                    <div className="characters-list">
                        {listCharacter.responseList && listCharacter.responseList.map(
                            character => <Card key={character.id} id={character.id} nome={character.name} imgsrc={character.thumbnail.path + "." + character.thumbnail.extension} />
                        )}
                    </div>
                    <div className="pagination-bar">
                        <Pagination page={page} totalItems={listCharacter.totalItems} />
                    </div>
                </div>
            }
        </div>
    );
}