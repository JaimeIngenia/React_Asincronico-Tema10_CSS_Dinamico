import Cards from "./components/Cards/Cards";
import { imagesGallery } from "./statics/data";
import styles from "./App.module.css"
import { useState } from "react";



function App() {
  //Estados 
  const[isDarkMode,setIsDarkMode]=useState(false)
  //Eventos
  const manejoCambioTema=()=>{
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div className={`${isDarkMode ? styles.AppDark :styles.AppLight} `}> 
      <header className={styles.header}>
        <h1>Galería de imágenes</h1>
        <button
          className={`${isDarkMode ? styles.btnThemeDark : styles.btnTheme}`}         
          onClick={manejoCambioTema}
        >
          {isDarkMode? "MODO LIGTH":"MODO DARK"}
        </button>
      </header>
      <Cards images={imagesGallery}/>
    </div>
  );
}

export default App;
