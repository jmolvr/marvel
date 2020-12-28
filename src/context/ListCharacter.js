import React, {createContext, useContext, useState, useEffect} from 'react';

import api from '../services/api';

const ListCharacterContext = createContext();

export default function ListCharacterProvider({ children }){
    const [listCharacter, setListCharacter] = useState([]);

    useEffect(() => {
        async function loadData() {
            const response = await api.get("/characters?ts=1609028329&apikey=079df4f6c6a9cc8debb648d7454c46c7&hash=cf4ab3509d919b6b843b87abbdcd50bd&offset=0");
            setListCharacter(response.data.data.results);
        }

        loadData();
    }, []);

    return(
        <ListCharacterContext.Provider value={{
            listCharacter,
            setListCharacter
        }}>
            {children}
        </ListCharacterContext.Provider>
    );
}


export function useListCharacter() {
    const context = useContext(ListCharacterContext);
    if(!context) throw new Error("useListCharacter must be used with a ListCharacterProvider");
    const {listCharacter, setListCharacter} = context;
    return {listCharacter, setListCharacter};
}