import React from 'react';
import { Register } from '../Components/Register';
import { Login } from '../Components/Login';
import styles from '../assets/Styles/InicioSesion.module.css';

export function InicioSesion() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.formContainer}>
                <Register />
            </div>
            <div className={styles.formContainer}>
                <Login />
            </div>
        </div>
    );
}
