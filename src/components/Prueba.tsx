import React, { useState } from 'react'

function Prueba() {
    const [contador, setContador] = useState(1);

    const incrementarContador = () => {
      setContador(contador + 1);
    };
  return (
    <>
    <div>prueba</div>
    <p>inforMaCion</p>

    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
    </>
  )
}

export default Prueba