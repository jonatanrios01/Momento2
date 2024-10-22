import movies from '../Movies.json';
import { MovieCard } from './MovieCard';
import styles from '../assets/Styles/MoviesGrid.module.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { get } from '../Utils/httpClient';
import { Spinner } from './Spinner';
import { useLocation } from 'react-router-dom';
import { useQuery } from '../Hooks/useQuery';
import InfiniteScroll from 'react-infinite-scroll-component';



export function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [page, setpage] = useState(1);

  const [hasmore, setHasMore] = useState(true);

  const query = useQuery();
  const search = query.get("search");



  useEffect (() => {
    setIsLoading(true);
    const searchUrl = search ? "/search/movie?query=" + search + "&page=" + page : "/discover/movie?page=" + page;
    get(searchUrl)
      .then((data) => {
        setMovies((prevMovies) => prevMovies.concat(data.results));
        setHasMore(data.page < data.total_pages)
        setIsLoading(false);
      });
  }, [search, page]);

 

  return (
    <InfiniteScroll dataLength = {movies.length}
    hasMore = {hasmore}
    next = {() => setpage((prevPage) => prevPage + 1)}
    loader = {<Spinner />}>
      <ul className = {styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key = {movie.id} movie = {movie} /> 
        ))}
      </ul>
    </InfiniteScroll>
    
  );
}
