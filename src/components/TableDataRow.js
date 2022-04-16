import React from "react";
import { useNavigate } from "react-router-dom";

function TableDataRow({ character }) {
    const navigate = useNavigate();

    const handleDetailNavigation = () =>{
        localStorage.setItem('selectedCharacter', JSON.stringify(character))
        navigate('/detail/' + character.name);
    }

    console.log(character)
    return (
        <tr className="altFont">
            <td>{character.name}</td>
            <td>{character.gender}</td>
            <td>{character.homeWorldName}</td>
            <td>
                <button onClick={handleDetailNavigation}>Details</button>
            </td>
        </tr>
    );
}

export default TableDataRow;
