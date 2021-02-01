import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid>
            <Jumbotron className="text-center">
                <h1>Bienvenido!</h1>
                <p>
                Ya puedes buscar usuarios y repositorios públicos de Github.
                </p>
            </Jumbotron>
        </Container>
    );
};

export default Home;