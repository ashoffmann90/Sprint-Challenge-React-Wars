import React from 'react';
import {Card, CardText, CardHeader, Col} from 'reactstrap';
// import Species from './species';

function Cards(props) {

    return (
        <>

        <Col sm='4'>
        <Card body style={{margin:'4%'}}>
            <CardHeader >Name: {props.char.name}</CardHeader>
            <CardText style={{marginTop:'4%'}}>Species: {props.char.species}</CardText>
            <CardText>Height: {props.char.height}</CardText>
            <CardText>Weight: {props.char.weight}</CardText>
            <CardText>Gender: {props.char.gender}</CardText>
        </Card>
        </Col>

        </>
        )
}

export default Cards;