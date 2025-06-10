import React from "react";
import "./home.module.css"
import { Link } from "react-router-dom";

export function Home(){
    return(
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Escolha uma Página</h1>
            <div style={{ margin: "20px" }}>
                <Link to="/tema"><button>Tema Claro/Escuro</button></Link>
            </div>
            <div style={{ margin: "20px" }}>
                <Link to="/boasvindas"><button>Mensagem de Boas-Vindas</button></Link>
            </div>
            <div style={{ margin: "20px" }}>
                <Link to="/tarefas"><button>Lista de Tarefas</button></Link>
            </div>
        </div>
    )
}