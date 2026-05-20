import React from "react";
import { Link } from "react-router-dom";

function Gracias() {
  return (
    <div className="gracias-container">
      <h1>¡Muchas gracias por tu participación!</h1>
      <p>Tus respuestas han sido registradas correctamente.</p>
      <div className="acciones">
        <Link to="/" className="btn-inicio">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default Gracias;
