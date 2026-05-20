import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="presentacion">
        <h1>
          Tesis Arquitectura Web Inteligente: Integración de IA para la
          Automatización de Procesos y el Fortalecimiento de la Competitividad
          en PYMES Digitales.
        </h1>
        <p>
          Este cuestionario forma parte de la investigación de mi tesis, cuyo
          objetivo es analizar la adopción de tecnologías digitales en las
          pequeñas y medianas empresas. La información que se obtenga será
          fundamental para comprender los beneficios, obstáculos y estrategias
          que pueden impulsar la transformación digital en este sector.
          Agradezco profundamente que se tome el tiempo para responder con
          sinceridad.
        </p>
      </div>
      <div className="containerRole">
        <Link to="/expertos">
          <div className="opcion">
            <p>Ir al cuestionario de Expertos</p>
          </div>
        </Link>

        <Link to="/pymes">
          <div className="opcion">
            <p>Ir al cuestionario de PYMES</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
