import React, { useState } from "react";
import styles from "./Tasks.module.css";
import { HomeButton } from "../../elements/btnBackHome/btnBackHome";

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

  const removerTarefa = (indexToRemove) => {
    const novaLista = lista.filter((_, index) => index !== indexToRemove);
    setLista(novaLista);
  };

  return (
    <div className={styles.container}>
      <HomeButton />
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
          <li key={index} className={styles.tarefaItem}>
            {item}
            <button className={styles.btnRemover} onClick={() => removerTarefa(index)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
