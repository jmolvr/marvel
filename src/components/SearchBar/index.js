import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function SearchBar() {

    const [inputValue, setValue] = useState("");

    let history = useHistory();
    function handleChange(event) {
        const { value } = event.target;
        setValue(value);
    }

    function handleSearch(){
        history.push(`/1?search=${inputValue}`);
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