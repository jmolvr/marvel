import React, { createContext, useContext, useState } from 'react';

import api from '../services/api';

const ListCharacterContext = createContext();

export default function ListCharacterProvider({ children }) {
    const [listCharacter, setListCharacter] = useState([]);
    const [character, setCharacter] = useState({});
    const [listSeries, setListSeries] = useState([]);

    async function handleLoadCharacter({ id }) {
        const responseCharacter = await api.get("/characters/" + id + "?ts=1609028329&apikey=079df4f6c6a9cc8debb648d7454c46c7&hash=cf4ab3509d919b6b843b87abbdcd50bd&offset=0");
        const responseListSeries = await api.get("/characters/" + id + "/series?ts=1609028329&apikey=079df4f6c6a9cc8debb648d7454c46c7&hash=cf4ab3509d919b6b843b87abbdcd50bd&offset=0");
        setCharacter(responseCharacter.data.data.results[0]);
        setListSeries(responseListSeries.data.data.results);
    }


    async function handleLoadCharacterList({page}){


        /*function pagetoOffset(page){
            if(!page) page = 1;
            const resultado = (page-1) * 20;
            return resultado;
        }*/

        //const offset = (page -1) * 20;

        const response = await api.get("/characters?ts=1609028329&apikey=079df4f6c6a9cc8debb648d7454c46c7&hash=cf4ab3509d919b6b843b87abbdcd50bd&offset=" + page);
        setListCharacter(response.data.data.results);
    }

    return (
        <ListCharacterContext.Provider value={{
            listCharacter,
            setListCharacter,
            handleLoadCharacterList,
            character,
            setCharacter,
            listSeries,
            setListSeries,
            handleLoadCharacter
        }}>
            {children}
        </ListCharacterContext.Provider>
    );
}


export function useListCharacter() {
    const context = useContext(ListCharacterContext);
    if (!context) throw new Error("useListCharacter must be used with a ListCharacterProvider");
    const { listCharacter, setListCharacter, handleLoadCharacterList } = context;
    return { listCharacter, setListCharacter, handleLoadCharacterList };
}


export function useCharacter(){
    const context = useContext(ListCharacterContext);
    if(!context) throw new Error("useCharacter must be used with a ListCharacterProvider");
    const {character, setCharacter} = context;
    return {character, setCharacter};
}

export function useListSeries(){
    const context = useContext(ListCharacterContext);
    if(!context) throw new Error("useCharacter must be used with a ListCharacterProvider");
    const {listSeries, setListSeries} = context;
    return {listSeries, setListSeries};
}

export function useHandleLoadCharacter(){
    const context = useContext(ListCharacterContext);
    if(!context) throw new Error("useCharacter must be used with a ListCharacterProvider");
    const {handleLoadCharacter} = context;
    return {handleLoadCharacter};
}