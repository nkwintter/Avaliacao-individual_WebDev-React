import { useState } from "react"

const [mensagem, setMensagem] = useState("Olá")

function handleClick(){
    setMensagem("Bem Vindo!")
}

export function Welcome(){
    return(
        <div>
            <h1>2: Mudar Texto com Botão</h1>
            <p>{mensagem}</p>

            <button onClick={handleClick}>Entrar</button>
        </div>
    )

}