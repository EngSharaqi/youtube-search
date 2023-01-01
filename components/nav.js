import styles from '../styles/Home.module.css'
import YTLogo from '../public/YouTube_Logo.png'
import { useState } from 'react';

export default function Nav (props) {
    const [searchQ, setSearchQ] = useState('')
    let handleSearch = (e) => {
        e.preventDefault()
        window.location.search = searchQ
    }
    return (
        <nav className={styles.nav}>
            <img src={YTLogo.src} alt='Youtube logo' />
            <form onSubmit={handleSearch} className={styles.search}>
                <input onChange={(e) => setSearchQ(e.target.value)} type='search' placeholder='Search'/>
                <button type='submit'>Go</button>
            </form>
        </nav>
    );
}