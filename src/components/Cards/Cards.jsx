import { useState } from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css"

function Cards ({images=[]}){
    const [verGaleria,setVerGaleria]=useState(true)
    return(
        <div>
            <button onClick={()=>setVerGaleria(!verGaleria)} className={styles.btn}>
                {verGaleria ? "Ocultar Imagenes":"Mostrar Imagenes"}

            </button>
            {verGaleria
            ?images.map(({url,title})=>{
                return(
                    <Card
                    url={url}
                    title={title}
                    key={url}

                    />
                )
            }):null}

        </div>
    )
}

export default Cards;