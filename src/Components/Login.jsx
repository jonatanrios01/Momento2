import React, { useState } from 'react';
import styles from '../assets/Styles/Login.module.css';
import { Navbar } from './Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
  } from "react-router-dom";


export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes hacer la lógica de autenticación
        console.log("Iniciando sesión con email:", email, "y contraseña:", password);
    };

    return (
        <>
        <div>
            <Navbar/>
        </div>
        <div className={styles.caja}>
        <div className={styles.container}>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="email">Correo Electrónico</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <label htmlFor="password">Contraseña</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <Link to="../App.jsx">
                <button type="submit">Iniciar Sesión</button>
                </Link>
                <hr />
                <Link to="/Register/">
                <button type="submit">Registro</button>
                </Link>
            </form>
        </div>
        </div>
        
        </>
        
    );
}
