import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import MoviesPage from './MoviesPage/MoviesPage';
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import NotFound from './NotFound/NotFound';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="/movies/:id/cast" element={<Cast />}></Route>
          <Route path="/movies/:id/reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};
