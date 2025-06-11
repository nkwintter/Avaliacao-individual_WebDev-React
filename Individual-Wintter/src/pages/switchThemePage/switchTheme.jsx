import React, { useState } from "react";
import styles from "./switchTheme.module.css";
import { HomeButton } from "../../elements/btnBackHome/btnBackHome";

export function SwitchTheme() {
  const [claro, setClaro] = useState(false);
  const alternarTema = () => setClaro(!claro);

  const classeTema = claro ? styles.containerClaro : styles.containerEscuro;

  return (
    <div className={`${styles.container} ${classeTema}`}>
      <HomeButton/>
      <h1>Tema {claro ? "Claro" : "Escuro"}</h1>
      <button onClick={alternarTema}>
        Alternar para {claro ? "Tema Escuro" : "Tema Claro"}
      </button>
    </div>
  );
}