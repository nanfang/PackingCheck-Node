import React, { Fragment } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap"
// import Hero from "../components/Hero";
// import Content from "../components/Content";


const Trips = () => {
    // TODO code this component
    return <ListGroup >
    <ListGroup.Item>Trip to Paris</ListGroup.Item>
    <ListGroup.Item active>Long hiking</ListGroup.Item>
    <ListGroup.Item>Road trip</ListGroup.Item>
    <ListGroup.Item>Go to work</ListGroup.Item>
    <ListGroup.Item>Camping trip</ListGroup.Item>
    <ListGroup.Item>Go to ski</ListGroup.Item>
  </ListGroup>
}

const PackingList = () => {
    // TODO code this component
    return <ListGroup>
    <ListGroup.Item variant="info">Phone</ListGroup.Item>
    <ListGroup.Item variant="info">Wallet</ListGroup.Item>
    <ListGroup.Item variant="info">Hiking bag</ListGroup.Item>
    <ListGroup.Item variant="info">Driver license</ListGroup.Item>
    <ListGroup.Item variant="info">Water</ListGroup.Item>
  </ListGroup>
}

const Main = () => {
    return (
        <Container fluid="md">
            <Row>
                <Col><Trips /></Col>
                <Col><PackingList /></Col>
            </Row>
        </Container>
    );
    //   <Fragment>
    //     <Hero />
    //     <hr />
    //     <Content />
    //   </Fragment>
}

export default Main;