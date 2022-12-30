import styles from '../styles/Home.module.css'

export default function Result(props) {
    return (
        <>
            {
                props.items?.map( items =>
                    <div key={items.id.videoId} className={styles.resultSection}>
                        <div
                            style={{
                                'minWidth': items.snippet.thumbnails.medium.width,
                                'maxWidth': items.snippet.thumbnails.medium.width,
                                'width': items.snippet.thumbnails.medium.width,
                                'minHeight': items.snippet.thumbnails.medium.height,
                                'maxHeight': items.snippet.thumbnails.medium.height,
                                'height': items.snippet.thumbnails.medium.height
                            }}
                            className={styles.thumbnail}
                        >
                            <img src={items.snippet.thumbnails.medium.url} alt='' />
                        </div>
                        <div className={styles.details}>
                            <h3>{items.snippet.title}</h3>
                            <div className={styles.channel}>
                                <a href='/'>
                                    <span>{items.snippet.channelTitle}</span>
                                </a>
                            </div>
                            <small>{items.snippet.description}</small>
                        </div>
                    </div>
                )
            }
        </>
    )
}