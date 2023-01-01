import styles from '../styles/Home.module.css'
import Result from '../components/result'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from '../components/nav'
import Pagination from '../components/pagination';
export default function Results() {
    const [data, setData] = useState();

    const __API = {
        API_KEY: 'AIzaSyCXrGzmkwzI-Wh-Ut40PAjr7_IpYIK544U',
        Second_API_KEY: 'AIzaSyBAr3aPqSoB6NAiy_JTJGk5NoZVNjuMQGM',
        base_link: 'https://youtube.googleapis.com/youtube/v3/search'
    }

    let prevNext;
    useEffect(() => {
        axios.get(`${__API.base_link}?part=snippet&maxResults=25&q=${window.location.search}&key=${__API.Second_API_KEY}`)
            .then(res => {
                setData(res.data)
            }).catch(error => console.log(error))
    }, [])
    return (
        <div className={styles.container}>

            <Nav />
            <p>
                <small>Total results is About {data?.pageInfo.totalResults} result</small>
            </p>

            <div className={styles.grid}>
                <Result items={data?.items} />
            </div>

        </div>
    )
} 