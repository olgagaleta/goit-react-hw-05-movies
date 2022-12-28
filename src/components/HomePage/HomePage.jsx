import React, { useState, useEffect, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovies } from 'api/api';
import Spinner from 'components/Loader/Loader';
import s from './HomePage.module.css';
const MoviesList = React.lazy(() => import('./Components/MoviesList'));

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMovies()
      .then(setMovies)
      .catch(error => {
        console.log('Error: ' + error);
      });
  }, []);

  return (
    <>
      <h3>Trending today</h3>
      <ul className={s.list}>
        <Suspense fallback={<Spinner />}>
          <MoviesList movies={movies} location={location} />
        </Suspense>
      </ul>
    </>
  );
};
export default HomePage;
