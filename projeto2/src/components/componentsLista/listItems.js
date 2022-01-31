import {React} from "react";

export function ListItens ({onChange, onDelete, value}) {
        return (
            <div className="Container-item">
                <input value={value} onChange={onChange} className="item"/>
                <button onClick={onDelete}>Delele</button>
            </div>
        );
    };
