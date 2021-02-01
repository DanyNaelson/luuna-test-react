import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const NotFound = () => {
    return (
        <>
            <Jumbotron className="text-center">
                <h1>404</h1>
                <p>
                No existe la página solicitada.
                </p>
            </Jumbotron>
        </>
    );
};

export default NotFound;