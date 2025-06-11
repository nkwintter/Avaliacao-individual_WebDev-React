import React, { useState } from "react";
import styles from "./welcome.module.css";
import { HomeButton } from "../../elements/btnBackHome/btnBackHome";

const { container } = styles;

export function Welcome() {
  const [mensagem, setMensagem] = useState("Olá!");
  const [ctrMsg, setCtrMsg] = useState(true);

  function handleclick(){
    if(mensagem === "Olá!"){
        setMensagem("Bem-vindo!");
    }
    else{
        setMensagem("Olá!");
    }
    
    setCtrMsg(!ctrMsg)
  }

  return (
    <div className={container}>
        <HomeButton/>
        <p>{mensagem}</p>
        <button onClick={handleclick}>{ctrMsg ? "Entrar" : "Sair"}</button>
    </div>
  );
}
