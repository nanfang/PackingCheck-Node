import React, { Fragment } from "react";
import {Container, Row, Col} from "react-bootstrap"
import Hero from "../components/Hero";
import Content from "../components/Content";



const Home = () => (
    <Container>
        <Row>
            <Col>Trips</Col>
            <Col>Packing List</Col>
        </Row>
    </Container>
    //   <Fragment>
    //     <Hero />
    //     <hr />
    //     <Content />
    //   </Fragment>
);

export default Home;