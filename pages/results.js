import styles from '../styles/Home.module.css'
import Result from '../components/result'
import { useEffect, useState } from 'react'
import axios from 'axios';
export default function Results () {
    const [data, setData] = useState();

    const __API = {
        API_KEY: 'AIzaSyAupOHXob6S4K3KnPFOWnN8hs4WWkibGQw',
        base_link: 'https://youtube.googleapis.com/youtube/v3/search'
    }

    const API_LINK = `${__API.base_link}&key=${__API.API_KEY}`
    
    useEffect(() => {
        axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=Sponge pop&key=AIzaSyAupOHXob6S4K3KnPFOWnN8hs4WWkibGQw&pageToken=CBkQAA')
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