import React, { Suspense } from 'react';
import {DebounceInput} from 'react-debounce-input';
import Spinner from '../../ui/Loader/Loader';
import { getByQuery } from '../../services/api';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './MoviesPage.module.css';
const MoviesPageList = React.lazy(() => import('./Components/MoviesPageList'));

const MoviesPage = () => {
  // eslint-disable-next-line
  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('name') ?? '';

  useEffect(() => {
    if (!query) return;
    getByQuery(query)
      .then(setMovies)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setMovie(query);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <DebounceInput
          className={styles.inputField}
          type="text"
          value={query}
          debounceTimeout={500}
          onChange={e => setSearchParams({ name: e.target.value })}
          placeholder="Search movies"
          autoComplete="off"
          autoFocus
        />
      </form>
      <ul className={styles.list}>
        <Suspense fallback={<Spinner />}>
          <MoviesPageList query={query} movies={movies} />
        </Suspense>
      </ul>
    </>
  );
};

export default MoviesPage;