import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const { container, botao } = styles;

export function Home() {
    return (
        <div className={container}>
            <h1>Escolha uma Página</h1>
            <div className={botao}>
                <Link to="/tema"><button>Tema Claro/Escuro</button></Link>
            </div>
            <div className={botao}>
                <Link to="/welcome"><button>Mensagem de Boas-Vindas</button></Link>
            </div>
            <div className={botao}>
                <Link to="/tasks"><button>Lista de Tarefas</button></Link>
            </div>
        </div>
    );
}