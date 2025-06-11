import React, { useState } from "react";
import styles from "./switchTheme.module.css";

export function SwitchTheme() {
  const [claro, setClaro] = useState(true);
  const alternarTema = () => setClaro(!claro);

  const classeTema = claro ? styles.containerClaro : styles.containerEscuro;

  return (
    <div className={`${styles.container} ${classeTema}`}>
      <h1>Tema {claro ? "Claro" : "Escuro"}</h1>
      <button onClick={alternarTema}>
        Alternar para {claro ? "Tema Escuro" : "Tema Claro"}
      </button>
    </div>
  );
}