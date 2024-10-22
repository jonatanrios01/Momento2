import styles from '../assets/Styles/MovieCard.module.css'
import { Navbar } from './Navbar';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
  } from "react-router-dom";

export function MovieCard ({ movie }) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return (
        <>
            
            <li className = {styles.movieCard}>
            <Link to={"/movies/" + movie.id}>
                <img width = {230} 
                height = {345}
                className = {styles.movieImage} 
                src = {imageUrl} 
                alt = {movie.title} />
                
                
            </Link>
            
            <div className ={styles.movieCard}>{movie.title}</div>

            </li>
           
            </>
        
    )
}