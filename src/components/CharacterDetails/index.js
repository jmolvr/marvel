import React, { useState } from 'react';
import './index.css';
export default function CharacterDetails({ character }) {
    const imgsrc = `${character.thumbnail.path}.${character.thumbnail.extension}`;

    const [characterEdit, setCharacterEdit] = useState(character);
    const [nameInputValue, setNameInputValue] = useState(character.name);
    const [descriptionInputValue] = useState(character.description);
    const [isEditing, setEditing] = useState(false);

    function handleNameInputChange(event) {
        const { value } = event.target;
        setNameInputValue(value);
    }

    function handleDescriptionChange(event) {
        const { value } = event.target;
        setNameInputValue(value);
    }

    function toggleEdit() {
        isEditing ? setEditing(false) : setEditing(true);
    }
    return (
        <div className="character-bg">
            <div className="character-info">
                <div className="info">
                    {isEditing ?
                        <div class="edit-form">
                            <label>Nome</label>
                            <input type="text" onChange={handleNameInputChange} value={nameInputValue} />
                            <label>Descricao</label>
                            <textarea type="text" onChange={handleDescriptionChange} value={descriptionInputValue} />

                        </div> :
                        <div>
                            <h3>{character.name}</h3>
                            <p>{character.description}</p>
                        </div>
                    }
                    <div>
                        <button onClick={toggleEdit}>{isEditing ? "Salvar" : "Editar"}</button>
                    </div>
                </div>
                <div className="image">
                    <img src={imgsrc} />
                </div>
            </div>
        </div>

    );
}