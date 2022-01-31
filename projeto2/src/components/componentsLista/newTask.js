import { React, useState } from "react";

export function NewTask({ onSubmit }) {
    const [newItem, setNewItem] = useState("");


    const setNewTask = ({ target }) => {
        setNewItem(target.value);
    };

    const submit = (event) => {
        event.preventDefault();
        onSubmit(newItem);
    }; 

    return (
        <div> 
        <form onSubmit={submit}>
            <input 
            className="Td-input"
            onChange={setNewTask}
            placeholder="Defina seu painel"
            />
            <button type="submit">Salvar dados</button>
        </form>
        </div>
    )};