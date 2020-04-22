import React from "react";
import "./styles.css";
import store from "./redux/store";
import {
  increment,
  incrementByTwo,
  decrease,
  decreaseByTwo,
  reset
} from "./redux/contador/contador-actions";

function App() {
  return (
    <div className="App">
      <div className="contador-container">
        <div className="contador-title">{store.getState().contador}</div>
        <button
          className="contador-btn"
          onClick={() => store.dispatch(increment())}
        >
          +
        </button>
        {/* 3. Crear un botón de incremento +2  */}
        <button
          className="contador-btn"
          onClick={() => store.dispatch(incrementByTwo())}
        >
          +2
        </button>
        {/* 1. Crear un botón de decremento en 1 */}
        <button
          className="contador-btn"
          onClick={() => store.dispatch(decrease())}
        >
          -
        </button>
        {/* 4. Crear un botón de decremento -2 */}
        <button
          className="contador-btn"
          onClick={() => store.dispatch(decreaseByTwo())}
        >
          -2
        </button>
        {/* 2. Crear un botón de reset para regresar el contador a cero */}
        <button className="btn" onClick={() => store.dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
