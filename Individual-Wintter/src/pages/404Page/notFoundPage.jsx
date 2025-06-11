import React from "react";
import { HomeButton } from "../../elements/btnBackHome/btnBackHome";
import { Ilustracao } from "./ilustracao";

export function NotFound() {
    return (
        <div style={{ textAlign: "center", padding: "40px" }}>
            <HomeButton />
            <Ilustracao />
            <h1>Página não encontrada</h1>
            <p>A URL que você tentou acessar não existe.</p>
        </div>
    );
}
