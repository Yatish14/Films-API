import React from 'react'
import Card from 'react-bootstrap/Card';
import './SingleFilm.css'

const SingleFilm = ({films}) => {
  return (
    <div className='single-film'>
        {
            films.map(film => {return (
                <Card style={{ width: '20%' , border: '2px solid black', margin : '10px', padding: '10px'}}>
                    <Card.Body>
                        <Card.Title>Film Name : <b>{film.name}</b></Card.Title>
                        <Card.Text>
                        <p>Director : {film.directorName}</p>
                        <p>Rating : {film.rating}</p>
                        <p>Released On : {film.releaseDate}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )})
        }
    </div>
  )
}

export default SingleFilm
