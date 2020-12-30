import React, { useState } from 'react';
import {useListCharacter} from '../../context/ListCharacter';
export default function SearchBar() {

    const [inputValue, setValue] = useState("");
    const {handleLoadCharacterList} = useListCharacter();
    function handleChange(event) {
        const { value } = event.target;
        setValue(value);
    }

    function handleSearch(){
        handleLoadCharacterList(1, inputValue);
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Buscar Personagem" 
                value={inputValue} 
                onChange={handleChange}
            />

            <button onClick={handleSearch}>Procurar</button>
            
        </div>
    );
}