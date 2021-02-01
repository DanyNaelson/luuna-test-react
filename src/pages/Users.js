import React from 'react';
import { Container } from 'react-bootstrap';
import UserList from '../components/containers/UserList';

const Users = () => {
    return (
        <Container fluid>
            <UserList />
        </Container>
    );
};

export default Users;