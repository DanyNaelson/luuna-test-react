import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, Form, FormControl, Image, ListGroup, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { apiGet } from '../../ApiRest';
import { getRepos, updateRepoSearch } from '../../redux/actions/repos';

const styles = {
    button: {
        position: 'absolute',
        right: '4%'
    },
    img: {
        cursor: 'pointer',
        maxWidth: 50
    },
    spinner: {
        borderWidth: '.5em',
        display: 'block',
        height: 100,
        margin: '0 auto',
        width: 100
    }
}

const RepoList = () => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const searchValue = useSelector((state) => state.repos.searchValue)
    const repos = useSelector((state) => state.repos.all)

    useEffect(() => {
        setLoading(true)
        apiGet("https://api.github.com/repositories")()
            .then(
                (result) => {
                    setLoading(false)
                    let filteredRepos = result

                    if(searchValue !== "" || searchValue !== undefined)
                        filteredRepos = result.filter(repo => repo.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)

                    dispatch(getRepos(filteredRepos))
                },
                (error) => {
                    setLoading(false)
                    console.log(error)
                }
            )
    }, [searchValue, dispatch]);

    return (
        <>
            <h1>Repositorios</h1>
            <Form inline>
                <FormControl type="text" placeholder="Buscar" className="mr-sm-2" value={searchValue} onChange={e => dispatch(updateRepoSearch(e.target.value))} />
            </Form>
            <ListGroup variant="flush">
                {!loading && repos.map(repo => 
                <ListGroup.Item key={repo.id}>
                    <Card.Title>{repo.name}</Card.Title>
                    <Card.Body>
                        <Image src={repo.owner.avatar_url} style={styles.img} roundedCircle /> By <a href={repo.owner.html_url} target='_blank' rel="noreferrer">{repo.owner.login}</a>
                        <Link to={`/repositorios/${repo.owner.login}/${repo.name}`}>
                            <Button variant="primary" style={styles.button}>Ver más</Button>
                        </Link>
                    </Card.Body>
                </ListGroup.Item>
                )}
            </ListGroup>
            {repos.length === 0 && !loading && 
            <Alert variant="danger">
                No hay repositorios
            </Alert>   
            }
            {loading &&
            <Spinner style={styles.spinner} animation="border" variant="info" />
            }
        </>
    );
};

export default RepoList;