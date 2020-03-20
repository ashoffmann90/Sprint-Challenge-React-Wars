import React, {useState, useEffect} from 'react';
import {Row, Container} from 'reactstrap';
import Cards from './cards';
import axios from 'axios';

function CardPage() {

    const [character, setCharacter] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/`)
        .then(response => {
            console.log(response.data.results)
            setCharacter(response.data.results)
        })
        .catch(error => {
            console.log('whooops', error)
        })
    }, [])

    return (
        <>
        <Container>
        <Row >
        {character.map((info, index) => (
            <Cards key={index} char={info}/>
        ))}
        </Row>
        </Container>
        </>
        )
}

export default CardPage;