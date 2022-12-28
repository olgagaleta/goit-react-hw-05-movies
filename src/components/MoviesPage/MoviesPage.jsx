import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import Spinner from 'components/Loader/Loader';
import { getByQuery } from 'api/api';

const MoviesPageList = React.lazy(() => import('./Components/MoviesPageList'));

const MoviesPage = () => {
  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('name') ?? '';

  useEffect(() => {
    if (!query) return;
    getByQuery(query)
      .then(setMovies)
      .catch(error => {
        console.log('Error: ' + error);
      });
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setMovie(query);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <DebounceInput
          className="input-field"
          type="text"
          value={query}
          debounceTimeout={500}
          onChange={e => setSearchParams({ name: e.target.value })}
          placeholder="Search movies"
          autoComplete="off"
          autoFocus
        />
      </form>
      <ul className="list">
        <Suspense fallback={<Spinner />}>
          <MoviesPageList query={query} movies={movies} />
        </Suspense>
      </ul>
    </>
  );
};

export default MoviesPage;
