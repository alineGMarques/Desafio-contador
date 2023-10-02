import './App.css'
import React, { useState } from 'react'

export default function App() {
  const [contador, setContador] = useState(0)
  const Add = () => setContador(contador + 1)
  const Decrease = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  if (contador > 10) {
    setContador(contador - 1);
  }

  const Reset = () => setContador(0)

  return (
    <main>
      <h1>Contador</h1>
      <div>
        <button className="decrease" onClick={Decrease}>-</button>
        <h2>{contador}</h2>
        <button className="add" onClick={Add}>+</button>
      </div>
      <div>
        <button className="reset" onClick={Reset}>RESET</button>
      </div>

    </main>
  )
}

