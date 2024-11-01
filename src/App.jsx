import { useState } from 'react';

import './App.scss';
import moviesFromServer from './api/movies.json';

import { MoviesList } from './components/MoviesList';
import { FilterMovies } from './components/FilterMovies/FilterMovies';

export const App = () => {
  const [query, setQuery] = useState('');

  function findMovies(movies, { queris }) {
    const normalizedQuery = queris.trim().toLowerCase();

    return movies.filter(
      movie =>
        movie.title.toLowerCase().includes(normalizedQuery) ||
        movie.description.toLowerCase().includes(normalizedQuery),
    );
  }

  const visibleMovies = findMovies(moviesFromServer, { query });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <FilterMovies query={query} onQuery={setQuery} />
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
