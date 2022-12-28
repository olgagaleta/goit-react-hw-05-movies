import { getById } from 'api/api';
import { useState, useEffect } from 'react';
import { useLocation, useParams, NavLink, Outlet } from 'react-router-dom';

const MovieDetailsList = () => {
  const [moviesId, setMoviesId] = useState(null);
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    getById(id)
      .then(setMoviesId)
      .catch(error => {
        console.log('Error: ' + error);
      });
  }, [id]);

  return (
    <>
      {moviesId && (
        <>
          <div className="left">
            <h2>
              {moviesId.title} ({moviesId.release_date.slice(0, 4)})
            </h2>
            <p>
              {Math.round((moviesId.vote_average + Number.EPSILON) * 100) / 100}
            </p>
            <img
              className="list-item__image"
              src={`https://image.tmdb.org/t/p/w500${moviesId.poster_path}`}
              alt={moviesId.title}
            />
          </div>

          <div className="right">
            <h3>Overview:</h3>
            <p>{moviesId.overview}</p>
            <h3>Genres:</h3>
            <ul className="genres">
              {moviesId.genres.map(genre => (
                <li key={genre.genre_ids}>{genre.name}</li>
              ))}
            </ul>

            <div className="links">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        backgroundColor: '#daa520',
                      }
                    : { backgroundColor: '#808080' }
                }
                to={`/movies/${id}/reviews`}
                className="link"
                state={location.state}
              >
                Reviews
              </NavLink>
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        backgroundColor: '#daa520',
                      }
                    : { backgroundColor: '#808080' }
                }
                to={`/movies/${id}/cast`}
                className="link"
                state="state"
              >
                Cast
              </NavLink>
            </div>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetailsList;
