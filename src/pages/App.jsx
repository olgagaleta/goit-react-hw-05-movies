import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import HomePage from './HomePage/HomePage';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import Reviews from './MovieDetailsPage/Components/Reviews/Reviews';
import Cast from './MovieDetailsPage/Components/Cast/Cast';
import MoviesPage from './MoviesPage/MoviesPage';

import NotFound from './NotFound/NotFound';
import { useEffect } from 'react';

export const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === '/goit-react-hw-05-movies') navigate('/');
  }, [navigate, pathname]);
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="/movies/:id/cast" element={<Cast />}></Route>
          <Route path="/movies/:id/reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
