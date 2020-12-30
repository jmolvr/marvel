import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import CharacterDetails from '../../components/CharacterDetails';

import { useCharacter, useHandleLoadCharacter, useListSeries } from '../../context/ListCharacter';
import { useLoading } from "../../context/Loading";

import './index.css';

export default function CharacterPage() {
    const { listSeries } = useListSeries();
    const { character } = useCharacter();
    const { handleLoadCharacter } = useHandleLoadCharacter();
    const { isLoading, setLoading } = useLoading();
    let { id, page } = useParams();

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            await handleLoadCharacter(id, page);
            window.scrollTo(0, 0);
            setLoading(false)
        }
        loadData();
    }, [page]);

    return (
        <div>
            <Header />
            {isLoading ?
                <div className="loading">
                    <Loading type={"spin"} color={"#e23636"} />
                </div>
                :
                <div>
                    {!!character && <CharacterDetails character={character} />}
                    <section id="series_title">
                        <h2>Series</h2>
                    </section>
                    <div className="series-list">
                        {listSeries.responseListSeries && listSeries.responseListSeries.map(
                            serie => <Card key={serie.id} id={serie.id} nome={serie.title} imgsrc={serie.thumbnail.path + "." + serie.thumbnail.extension} />
                        )}
                    </div>
                    <div className="pagination-bar">
                        <Pagination page={page} totalItems={listSeries.totalItems} />
                    </div>
                </div>
            }
        </div>

    );
}