import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { apiGet } from '../../ApiRest';

const styles = {
    card: {
        margin: '0 auto',
        maxWidth: '300px'
    },
    spinner: {
        borderWidth: '.5em',
        display: 'block',
        height: 100,
        margin: '0 auto',
        width: 100
    }
}

const Repo = () => {
    const [loading, setLoading] = useState(true)
    const [repo, setRepo] = useState({})
    const params = useParams();

    useEffect(() => {
        setLoading(true)
        if(params.hasOwnProperty('user') && params.hasOwnProperty('name')){
            apiGet(`https://api.github.com/repos/${params.user}/${params.name}`)()
                .then(
                    (result) => {
                        setLoading(false)
                        setRepo(result)
                    },
                    (error) => {
                        setLoading(false)
                        console.log(error)
                    }
                )
        }
    }, [params]);

    return (
        <>
            {!loading && repo.hasOwnProperty('id') &&
                <Card style={styles.card}>
                    <Card.Img variant="top" className={['img-fluid']} alt="Responsive image" src={repo.owner.avatar_url} />
                    <a href={repo.owner.html_url} target='_blank' rel="noreferrer"><small className="text-muted">By {repo.owner.login}</small></a>
                    <Card.Body>
                        <Card.Title>Repository - {repo.name}</Card.Title>
                        <Card.Text>Descripción: {repo.description}</Card.Text>
                    </Card.Body>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                            <cite title="Source Title">{repo.forks}</cite> Forks 
                        </small>{' - '}
                        <small className="text-muted">
                            <cite title="Source Title">{repo.watchers}</cite> Watchers 
                        </small>{' - '}
                        <small className="text-muted">
                            <cite title="Source Title">{repo.subscribers_count}</cite> Subscribers 
                        </small>
                    </footer>
                    <Card.Footer>
                        <small className="text-muted">Creado el {moment(repo.created_at).format('LL')}</small>
                    </Card.Footer>
                </Card>
            }
            {loading &&
            <Spinner style={styles.spinner} animation="border" variant="info" />
            }
        </>
    );
}

export default Repo