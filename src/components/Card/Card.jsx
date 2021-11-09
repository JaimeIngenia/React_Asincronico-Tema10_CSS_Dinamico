import styles from "./Card.module.css"

function Card ({url,title}){
    return(
        <div className={styles.imageCard } >
            <img src={url} alt="" className={styles.cardImage} />
            <div className={styles.cardImgOverlay}>
                <h5 className={styles.cardImg}>{title}</h5>
            </div>
        </div>
    )
}
export default Card;