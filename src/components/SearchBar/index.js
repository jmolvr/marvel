import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import './index.css';

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
                id="search-bar"
                type="text" 
                placeholder="Buscar Personagem" 
                value={inputValue} 
                onChange={handleChange}
            />

            <button id="search-button" onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
            
        </div>
    );
}