import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <Jumbotron className="text-center">
                <h1>Bienvenido!</h1>
                <p>
                Ya puedes buscar usuarios y repositorios públicos de Github.
                </p>
            </Jumbotron>
        </>
    );
};

export default Home;