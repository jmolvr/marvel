import React, { createContext, useState, useContext } from "react";

import api from '../services/api';

const CharacterContext = createContext();


export default function CharacterProvider({ children }) {
    const [character, setCharacter] = useState({});
    const [listSeries, setListSeries] = useState([]);

    async function handleLoadCharacter({ id }) {
        const responseCharacter = await api.get("/characters/" + id + "?ts=1609028329&apikey=079df4f6c6a9cc8debb648d7454c46c7&hash=cf4ab3509d919b6b843b87abbdcd50bd&offset=0");
        const responseListSeries = await api.get("/characters/" + id + "/series?ts=1609028329&apikey=079df4f6c6a9cc8debb648d7454c46c7&hash=cf4ab3509d919b6b843b87abbdcd50bd&offset=0");
        setCharacter(responseCharacter.data.data.results[0]);
        setListSeries(responseListSeries.data.data.results);
    }

    return (
        <CharacterContext.Provider value={{
            character,
            setCharacter,
            listSeries,
            setListSeries,
            handleLoadCharacter
        }}>

        </CharacterContext.Provider>
    );
}

export function useCharacter(){
    const context = useContext(CharacterContext);
    if(!context) throw new Error("useCharacter must be used with a ListCharacterProvider");
    const {character, setCharacter} = context;
    return {character, setCharacter};
}

export function useListSeries(){
    const context = useContext(CharacterContext);
    if(!context) throw new Error("useCharacter must be used with a ListCharacterProvider");
    const {listSeries, setListSeries} = context;
    return {listSeries, setListSeries};
}

export function useHandleLoadCharacter(){
    const context = useContext(CharacterContext);
    if(!context) throw new Error("useCharacter must be used with a ListCharacterProvider");
    const {handleLoadCharacter} = context;
    return {handleLoadCharacter};
}