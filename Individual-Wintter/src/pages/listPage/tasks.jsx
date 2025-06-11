import React, { useState } from "react";
import styles from "./Tasks.module.css";

export function Tasks() {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]);

  const adicionarTarefa = () => {
    const novaTarefa = tarefa.trim();
    if (novaTarefa !== "") {
      setLista([...lista, novaTarefa]);
      setTarefa("");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
