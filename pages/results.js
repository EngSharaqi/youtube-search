import styles from '../styles/Home.module.css'
import Result from '../components/result'
import { useEffect, useState } from 'react'
import axios from 'axios';
export default function Results () {
    const [data, setData] = useState();

    const __API = {
        API_KEY: 'AIzaSyCXrGzmkwzI-Wh-Ut40PAjr7_IpYIK544U',
        base_link: 'https://youtube.googleapis.com/youtube/v3/search'
    }
    
    useEffect(() => {
        axios.get(`${__API.base_link}?part=snippet&maxResults=25&q=${window.location.search}&key=${__API.API_KEY}`)
        .then(res => {
            setData(res.data)
        }).catch(error => console.log(error))
    }, [])
    return(
        <div className={styles.container}>
            <Result items = {data?.items} />
        </div>
    )
} 