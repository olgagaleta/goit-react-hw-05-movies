import Spinner from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { useLocation, Link } from 'react-router-dom';

const MovieDetailsList = React.lazy(() =>
  import('./Components/MovieDetailsList')
);

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? './movies';

  return (
    <>
      <button type="button" className="button">
        <Link className="btn-link" to={backLink}>
          Back to movie list
        </Link>
      </button>
      <h3 className="title">Movie Details Page</h3>
      <div className="details-box">
        <Suspense fallback={<Spinner />}>
          <MovieDetailsList />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetailsPage;
