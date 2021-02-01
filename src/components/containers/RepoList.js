import React, { useEffect } from 'react';
import { Button, Card, Form, FormControl, Image, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos, updateRepoSearch } from '../../redux/actions/repos';

const styles = {
    button: {
        position: 'absolute',
        right: '4%'
    },
    img: {
        cursor: 'pointer',
        maxWidth: 50
    }
}

const RepoList = () => {
    const dispatch = useDispatch()
    const searchValue = useSelector((state) => state.repos.searchValue)
    const repos = useSelector((state) => state.repos.all)

    useEffect(() => {
        fetch("https://api.github.com/repositories")
            .then(res => res.json())
            .then(
                (result) => {
                    let filteredRepos = result

                    if(searchValue !== "" || searchValue !== undefined)
                        filteredRepos = result.filter(repo => repo.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)

                    dispatch(getRepos(filteredRepos))
                },
                (error) => {
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
                {repos.map(repo => 
                <ListGroup.Item key={repo.id}>
                    <Card.Title>{repo.name}</Card.Title>
                    <Card.Body>
                        <Image src={repo.owner.avatar_url} style={styles.img} roundedCircle /> By <a href={repo.owner.html_url} target='_blank' rel="noreferrer">{repo.owner.login}</a>
                        <Button variant="primary" style={styles.button}>Ver más</Button>
                    </Card.Body>
                </ListGroup.Item>
                )}
            </ListGroup>
        </>
    );
};

export default RepoList;