import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
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

const User = () => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})
    const params = useParams();

    useEffect(() => {
        setLoading(true)
        if(params.hasOwnProperty('id')){
            apiGet(`https://api.github.com/users/${params.id}`)()
                .then(
                    (result) => {
                        setLoading(false)
                        setUser(result)
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
            {!loading && user.hasOwnProperty('id') &&
                <Card style={styles.card}>
                    <Card.Img variant="top" className={['img-fluid']} alt="Responsive image" src={user.avatar_url} />
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>Bio: {user.bio}</Card.Text>
                    </Card.Body>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                            <cite title="Source Title">{user.followers}</cite> Followers 
                        </small>{' - '}
                        <small className="text-muted">
                            <cite title="Source Title">{user.following}</cite> Following 
                        </small>
                    </footer>
                    <Card.Footer>
                        Github url: <a href={user.html_url} target='_blank' rel="noreferrer"><small className="text-muted">{user.html_url}</small></a>
                    </Card.Footer>
                </Card>
            }
            {loading &&
            <Spinner style={styles.spinner} animation="border" variant="info" />
            }
        </>
    );
}

export default User