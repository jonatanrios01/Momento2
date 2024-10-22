import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/Styles/Navbar.module.css';
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../Hooks/useQuery';

export function Navbar() {
    const query = useQuery();
    const search = query.get("search");

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        setSearchText(search || "");
    }, [search]);

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        history("/?search=" + searchText);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <Link>
                    <img src="/public/veta+logo.png" alt="Veta+" />
                </Link>
            </div>
            <ul className={styles.navLinks}>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Register">Register</Link></li>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/SobreNosotros">Sobre Nosotros</Link></li>
            </ul>
            <form className={styles.Searchcontainer} onSubmit={handleSubmit}>
                <div className={styles.searchBox}>
                    <input 
                        type="text" 
                        className={styles.searchInput} 
                        value={searchText} 
                        onChange={(e) => setSearchText(e.target.value)} 
                    />
                    <button className={styles.SearchButton} type="submit">
                        <FaSearch size={20} />
                    </button>
                </div>
            </form>
        </nav>
    );
}

