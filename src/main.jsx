import "./styles.css";

import React from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18/client";

function App() {
  return (
    <div className="app">
      <h1>Econexa Climate Tool</h1>

      <p>
        Herramienta de análisis climático para destinos turísticos en Colombia,
        basada en datos científicos verificados.
      </p>

      <label>Destino</label>
      <input placeholder="Ej. Sierra Nevada de Santa Marta" />

      <label>Mes del viaje</label>
      <select>
        <option>Enero</option>
        <option>Febrero</option>
        <option>Marzo</option>
        <option>Abril</option>
        <option>Mayo</option>
        <option>Junio</option>
        <option>Julio</option>
        <option>Agosto</option>
        <option>Septiembre</option>
        <option>Octubre</option>
        <option>Noviembre</option>
        <option>Diciembre</option>
      </select>

      <button>Analizar condiciones</button>

      <div className="result">
        <strong>Resultado de ejemplo</strong>
        Condiciones climáticas favorables para el viaje.
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
