import React, { useState } from 'react';
import styles from '../assets/Styles/Register.module.css';
import { Navbar } from './Navbar';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

export function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [confirmarPassword, setConfirmarPassword] = useState('');
    const [pais, setPais] = useState('ar');
    const [archivo, setArchivo] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes hacer el envío de datos para el registro (ej. API)
        console.log("Registrando usuario con email:", email, "y contraseña:", password);
        resetForm();
    };

    const resetForm = () => {
        setEmail('');
        setPassword('');
        setUsername('');
        setNombre('');
        setCorreo('');
        setFechaNacimiento('');
        setConfirmarPassword('');
        setPais('ar');
        setArchivo('');
        setAceptaTerminos(false);
    };

    return (
        <>
            <Navbar />
            <div className={styles.caja}>
            <div className={styles.container}>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                        placeholder="Nombre" 
                    />
                    <hr />
                    <input 
                        type="email" 
                        value={correo} 
                        onChange={(e) => setCorreo(e.target.value)} 
                        placeholder="Correo" 
                    />
                    <hr />
                    <input 
                        type="date" 
                        value={fechaNacimiento} 
                        onChange={(e) => setFechaNacimiento(e.target.value)} 
                    />
                    <hr />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                    />
                    <hr />
                    <input 
                        type="password" 
                        value={confirmarPassword} 
                        onChange={(e) => setConfirmarPassword(e.target.value)} 
                        placeholder="Confirmar Password" 
                    />
                    <hr />
                    <input 
                        type="text" 
                        value={pais} 
                        onChange={(e) => setPais(e.target.value)} 
                        placeholder="País" 
                    />
                    <hr />
                    <input 
                        type="file" 
                        onChange={(e) => setArchivo(e.target.files[0])} 
                    />
                    <hr />
                    <label>
                        <input 
                            type="checkbox" 
                            checked={aceptaTerminos} 
                            onChange={(e) => setAceptaTerminos(e.target.checked)} 
                        />
                        Acepto los términos y condiciones
                        <hr />
                    </label>
                    <button type="submit">Register</button>
                    <hr />
                    <Link to="/Login/">
                    <button type="button" onClick={resetForm}>Login</button>
                    </Link>
                    
                </form>
            </div>
            </div>
           
        </>
    );
}
