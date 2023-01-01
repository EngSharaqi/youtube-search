import { useEffect, useState } from "react"
import styles from '../styles/Home.module.css'
export default function Pagination (props) {
    const [pages, setPage] = useState('0');

    let num = []
    let numCopy = []

    useEffect(() => {
        setPage(props.total)
    }, [])

    
    return (
        <ul className={styles.paginationUl}>
            <li id='previous' className={styles.paginationBtn}>&lt;&lt;</li>
            <li id='next' className={styles.paginationBtn}>&gt;&gt;</li>
        </ul>
    )
}