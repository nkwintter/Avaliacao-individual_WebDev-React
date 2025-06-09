import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "../pages/homePage/home";


export function Rotas(){
    return(
        <Router>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/mensagem">Mensagem</Link>
                <Link to="/tarefas">Tarefas</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mensagem" element={<Mensagem />} />
                <Route path="/tarefas" element={<Tarefas />} />
            </Routes>
        </Router>
    )
}