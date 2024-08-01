import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
const SongCard = ({ albumName, artistName, imgSrc }) => {
    return (
        <Card>
            <Card.Img src={imgSrc} />
            <Card.Body>
                <Card.Title>{albumName}</Card.Title>
                <Card.Text>{artistName}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SongCard;