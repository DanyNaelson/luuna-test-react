import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const styles = {
    card: {
        margin: '0 auto',
        maxWidth: '300px'
    }
}

const User = () => {
    const [user, setUser] = useState({})
    const params = useParams();

    useEffect(() => {
        if(params.hasOwnProperty('id')){
            fetch(`https://api.github.com/users/${params.id}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        setUser(result)
                    },
                    (error) => {
                        console.log(error)
                    }
                )
        }
    }, [params]);

    return (
        <>
            {user.hasOwnProperty('id') &&
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
        </>
    );
}

export default User