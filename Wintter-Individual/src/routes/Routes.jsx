import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "../pages/homePage/home";
import { Welcome } from "../pages/welcomePage/welcome"
import { SwitchTheme } from "../pages/switchThemePage/switchTheme";
import { Tasks } from "../pages/listPage/tasks";


export function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tema" element={<SwitchTheme />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/tasks" element={<Tasks />} />
        </Routes>
    )
}
