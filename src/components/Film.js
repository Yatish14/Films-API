import React, { useState, useEffect } from 'react';
import SingleFilm from './SingleFilm'

function Film() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try
      {
        const response = await fetch('https://app.codescreen.com/api/assessments/films', {
          method: 'GET',
          headers: 
          {
            Authorization: '8c5996d5-fb89-46c9-8821-7063cfbc18b1',
          }});

        if(response.ok)
        {
          const filmsData = await response.json();
          setFilms(filmsData);
        }
        else
        {
          console.error('Request failed , Error :', response.status);
        }
      }
      catch (err)
      {
        console.error(err);
      }
      finally
      {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(films)

  return (
    <div>
      <h1 >List of Films</h1>
      { isLoading ? <h1>Loading...</h1> : <SingleFilm films= {films}/>}
    </div>
  );
}

export default Film;