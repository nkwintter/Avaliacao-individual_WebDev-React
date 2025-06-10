import { useState } from "react"

export function Welcome(){

    const [mensagem, setMensagem] = useState("Olá")

    function handleClick(){
        setMensagem("Bem Vindo!")
    }

    return(
        <div>
            <h1>2: Mudar Texto com Botão</h1>
            <p>{mensagem}</p>

            <button onClick={handleClick}>Entrar</button>
        </div>
    )

}