import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, CardColumns, Form, FormControl, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { apiGet } from '../../ApiRest';
import { getUsers, updateUserSearch } from '../../redux/actions/users';

const styles = {
    cardImg: {
        cursor: 'pointer'
    },
    spinner: {
        borderWidth: '.5em',
        display: 'block',
        height: 100,
        margin: '0 auto',
        width: 100
    }
}

const UserList = () => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const searchValue = useSelector((state) => state.users.searchValue)
    const users = useSelector((state) => state.users.all)

    useEffect(() => {
        setLoading(true)
        apiGet("https://api.github.com/users")()
            .then(
                (result) => {
                    setLoading(false)
                    let filteredUsers = result

                    if(searchValue !== "" || searchValue !== undefined)
                        filteredUsers = result.filter(user => user.login.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)

                    dispatch(getUsers(filteredUsers))
                },
                (error) => {
                    setLoading(false)
                    console.log(error)
                }
            )
    }, [searchValue, dispatch]);

    return (
        <>
            <h1>Usuarios</h1>
            <Form inline>
                <FormControl type="text" placeholder="Buscar" className="mr-sm-2" value={searchValue} onChange={e => dispatch(updateUserSearch(e.target.value))} />
            </Form>
            <CardColumns>
                {!loading && users.map(user =>
                <Card key={user.id}>
                    <Link to={`/usuarios/${user.id}`}>
                        <Card.Img variant="top" src={user.avatar_url}
                            style={styles.cardImg}
                        />
                    </Link>
                    <Card.Body className='text-center'>
                        <Card.Title>{`@${user.login}`}</Card.Title>
                        <Link to={`/usuarios/${user.id}`}>
                            <Button variant="primary">Ver más</Button>
                        </Link>
                    </Card.Body>
                    <Card.Footer>
                        Github url: <a href={user.html_url} target='_blank' rel="noreferrer"><small className="text-muted">{user.html_url}</small></a>
                    </Card.Footer>
                </Card>
                )}
            </CardColumns>
            {users.length === 0 && !loading &&
            <Alert variant="danger">
                No hay usuarios
            </Alert>   
            }
            {loading &&
            <Spinner style={styles.spinner} animation="border" variant="info" />
            }
        </>
    );
};

export default UserList;