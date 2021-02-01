import React from 'react';
import { Container } from 'react-bootstrap';
import RepoList from '../components/containers/RepoList';

const Repos = () => {
    return (
        <Container fluid>
            <RepoList />
        </Container>
    );
};

export default Repos;