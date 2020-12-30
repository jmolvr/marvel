import React, { createContext, useContext, useState } from 'react';

import {getListCharacter, getCharacterDetails, getListSeries} from '../services/api';

const ListCharacterContext = createContext();

export default function ListCharacterProvider({ children }) {
    const [listCharacter, setListCharacter] = useState([]);
    const [character, setCharacter] = useState(null);
    const [listSeries, setListSeries] = useState({});

    async function handleLoadCharacter(id, page) {
        const offset = (page -1) * 20;
        const responseCharacter = await getCharacterDetails(id); 
        const responseListSeries = await getListSeries(id, offset);
        setCharacter(responseCharacter);
        setListSeries(responseListSeries);
    }


    async function handleLoadCharacterList(page, query){
        const offset = (page -1) * 20;
        const response = await getListCharacter(offset, query);
        setListCharacter(response);
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