import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import CharacterHeader from '../components/characterHeader';
import Messages from '../components/Messages';

export default function CharacterDetail() {
    const { characterName } = useParams();

    const [isLoading, setIsLoading] = useState(true)
    const [character, setCharacter] = useState({
        name: '',
        gender: '',
        films: [],
        starships: []
    });

    const tableData = <table style={{ margin: '0 auto', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <tbody>
            <tr key="1" className="table-warning" style={{ color: "black" }}>
                <td style={{ padding: '10px', border: '1px solid #6666' }}>Name: </td>
                <td style={{ padding: '10px', border: '1px solid #6666' }}><p>{character.name}</p></td>
            </tr>
            <tr key="2" className="table-warning" style={{ color: "black" }}>
                <td style={{ padding: '10px', border: '1px solid #6666' }}>Eye color: </td>
                <td style={{ padding: '10px', border: '1px solid #6666' }}><p>{character.eye_color}</p></td>
            </tr>
            <tr key="3" className="table-warning" style={{ color: "black" }}>
                <td style={{ padding: '10px', border: '1px solid #6666' }}>Hair color: </td>
                <td style={{ padding: '10px', border: '1px solid #6666' }}><p>{character.hair_color}</p></td>
            </tr>
            <tr key="4" className="table-warning" style={{ color: "black" }}>
                <td style={{ padding: '10px', border: '1px solid #6666' }}>Gender: </td>
                <td style={{ padding: '10px', border: '1px solid #6666' }}><p>{character.gender}</p></td>
            </tr>
            <tr key="5" className="table-warning" style={{ color: "black" }}>
                <td style={{ padding: '10px', border: '1px solid #6666' }}>Home: </td>
                <td style={{ padding: '10px', border: '1px solid #6666' }}><p>{character.homeWorldName}</p></td>
            </tr>
            <tr key="6" className="table-warning" style={{ color: "black" }}>
                <td style={{ padding: '10px', border: '1px solid #6666' }}>Films: </td>
                <td style={{ padding: '10px', border: '1px solid #6666' }}>
                    <p>
                        {character.films.map((film, index)=> <span key={index}>{film},&nbsp;</span>)}
                    </p>
                </td>
            </tr>
            <tr key="7" className="table-warning" style={{ color: "black" }}>
                <td style={{ padding: '10px', border: '1px solid #6666' }}>Starships: </td>
                <td style={{ padding: '10px', border: '1px solid #6666' }}>
                    <p>
                        {character.starships.map((ship, index)=> <span key={index}>{ship},&nbsp;</span>)}
                    </p>
                </td>
            </tr>
        </tbody>
    
    </table>

    async function setFilmAndStartShipData(fetchedCharacter) {
        let filmsAppeared = []
        let starShips = []
        for (let filmUrl of fetchedCharacter.films) {
            filmsAppeared.push(await fetchFilms(filmUrl));
        }
        fetchedCharacter.films = filmsAppeared;
        for (let starShipUrl of fetchedCharacter.starships) {
            starShips.push(await fetchStarShips(starShipUrl));
        }
        fetchedCharacter.starships = starShips;
        setCharacter(fetchedCharacter)
        setIsLoading(false)
    }
    function fetchFilms(url) {
        return axios
            .get(url)
            .then(response => response.data.title)
            .catch(error => console.log(error));
    }
    function fetchStarShips(url) {
        return axios
            .get(url)
            .then(response => response.data.name)
            .catch(error => console.log(error));
    }

    useEffect(() => {
        let fetchedCharacter = JSON.parse(localStorage.getItem('selectedCharacter'))
        setFilmAndStartShipData(fetchedCharacter);
        console.log(fetchedCharacter)
    }, [characterName])

    return (
        <>
            <CharacterHeader />
            <div style={{ textAlign: 'center' }}>
                {
                    isLoading ? <Messages /> : tableData
                }
            </div>
        
        </>
    )
}
