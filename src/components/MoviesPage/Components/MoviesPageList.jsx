import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MoviesPageList = ({ query, movies }) => {
  return (
    <>
      {movies &&
        movies.map(movie => (
          <li key={movie.id} className="list-item">
            <Link
              to={`/movies/${movie.id}`}
              className="list-item__link"
              state={{ from: `/movies?name=${query}` }}
            >
              <p className="list-item__title">{movie.title}</p>

              {/* {movie.poster_path === null ? (
                <img
                  className='list-item__image'
                  src={noImg}
                  alt={movie.title}
                />
              ) : (
                <img
                className='list-item__image'
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              )} */}
            </Link>
          </li>
        ))}
    </>
  );
};

MoviesPageList.propTypes = {
  query: PropTypes.string,
  movies: PropTypes.array,
};

export default MoviesPageList;
