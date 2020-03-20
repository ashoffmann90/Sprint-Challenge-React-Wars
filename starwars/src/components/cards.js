import React from 'react';
import {
    Card, CardText, CardBody,
    CardHeader, CardSubtitle, Col, Row
  } from 'reactstrap';

function Cards(props) {

    return (
        <>
        <Row>
        <Col sm='6' md='4' xl='3'>
        <Card>
            <CardHeader>Name: {props.char.name}</CardHeader>
            <CardSubtitle>Species: {props.char.species}</CardSubtitle>
            <CardText>Height: {props.char.height}</CardText>
            <CardText>Weight: {props.char.weight}</CardText>
            <CardText>Gender: {props.char.gender}</CardText>
        </Card>
        </Col>
        </Row>
        </>
        )
}

export default Cards;