import React, { useState } from 'react';
import './App.css';
import Header from './Header';
//tsx -> Sintaxe XML no TypeScript

function App() {
  const [counter, setCounter] = useState(0); // Retorna array, funcao para atualizar
  function handleButtonClick() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <Header title="Title test" />

      <h1> Dae Mundo </h1>
      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}

export default App;
