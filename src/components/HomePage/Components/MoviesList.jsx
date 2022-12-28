import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesList.module.css';

const MoviesList = ({ movies, location }) => {
  return (
    <>
      {movies &&
        movies.map(movie => (
          <li key={movie.id} className={s.listItem}>
            <Link
              className={s.listItemLink}
              to={`movies/${movies.id}`}
              state={{ from: location }}
            >
              <p className={s.listItemTitle}>{movie.title}</p>
              <img
                className={s.listItemImage}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </li>
        ))}
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesList;
