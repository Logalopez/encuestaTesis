import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function CuestionarioPymes() {
  const [formData, setFormData] = useState({
    nombre: "",
    giro_Empresa: "",
    cargo: "",
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
    p6: "",
    p7: "",
    p8: "",
    p9: "",
    p10: "",
    p11: "",
    p12: "",
    p13: "",
    p14: "",
    p15: "",
    p16: "",
    p17: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const API_URL = import.meta.env.VITE_API_URL; // <- aquí tomas la variable

      const response = await fetch(`${API_URL}/pymes`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/gracias"); // navegación interna, sin 404
      } else {
        alert("Error al enviar el cuestionario");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión con el servidor");
    }
  };

  return (
    <div className="containerCuestionario">
      <div className="containerPreguntas">
        <div className="containerRegresar">
          <div className="return">
            <Link to={"/"}>Regresar</Link>
          </div>
        </div>
        <br />
        <div className="cuestionario">
          <div className="descripcion">
            <p>
              Estimado(a) participante, este cuestionario está dirigido a
              pequeñas y medianas empresas con el fin de conocer su realidad
              frente al uso de tecnologías digitales. Le agradecería que
              responda con total sinceridad, ya que cada aporte representa
              información valiosa para el desarrollo de mi tesis. Toda
              información cuenta: desde el uso de redes sociales, hojas de
              cálculo en Excel, bases de datos, hasta métodos tradicionales como
              la libreta y el lápiz. Incluso si su empresa aún no cuenta con
              procesos digitalizados o herramientas avanzadas, esa experiencia
              es igualmente relevante y de gran ayuda para comprender los retos
              y oportunidades que enfrentan las PYMES.
            </p>
            <br />
            <br />
          </div>
          <form className="preguntas" onSubmit={handleSubmit}>
            <div className="pregunta">
              <label htmlFor="nombre">Nombre completo de la empresa: </label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="pregunta">
              <label htmlFor="giro_Empresa">Giro de la empresa: </label>
              <input
                type="text"
                name="giro_Empresa"
                id="giro"
                value={formData.giro_Empresa}
                onChange={handleChange}
              />
            </div>
            <div className="pregunta">
              <label htmlFor="p1">
                1.- ¿Qué procesos digitales utiliza actualmente su empresa en
                áreas como ventas, administración, atención al cliente o gestión
                de datos?
              </label>
              <textarea
                name="p1"
                id="p1"
                value={formData.p1}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="pregunta">
              <label htmlFor="p2">
                2.- ¿Cómo lleva su empresa el control administrativo y
                operativo: mediante sistemas digitales (por ejemplo, CRM para
                gestión de clientes, ERP para administración integral, software
                contable) o con métodos tradicionales (hojas de cálculo,
                registros manuales)?
              </label>
              <textarea
                name="p2"
                id="p2"
                value={formData.p2}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="pregunta">
              <label htmlFor="p3">
                3.- En una escala del 1 al 5, ¿qué tan relevante considera la
                adopción de inteligencia artificial para mejorar la
                competitividad de su empresa?
              </label>
              <fieldset
                role="radiogroup"
                className="likert-scale"
                id="pregunta3"
              >
                <div className="opt-container">
                  <label htmlFor="pregunta3-opt1">1</label>
                  <input
                    type="radio"
                    name="p3"
                    id="pregunta3-opt1"
                    value="1"
                    checked={formData.p3 === "1"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="pregunta3-opt2">2</label>
                  <input
                    type="radio"
                    name="p3"
                    id="pregunta3-opt2"
                    value="2"
                    checked={formData.p3 === "2"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="pregunta3-opt3">3</label>
                  <input
                    type="radio"
                    name="p3"
                    id="pregunta3-opt3"
                    value="3"
                    checked={formData.p3 === "3"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="pregunta3-opt4">4</label>
                  <input
                    type="radio"
                    name="p3"
                    id="pregunta3-opt4"
                    value="4"
                    checked={formData.p3 === "4"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="pregunta3-opt5">5</label>
                  <input
                    type="radio"
                    name="p3"
                    id="pregunta3-opt5"
                    value="5"
                    checked={formData.p3 === "5"}
                    onChange={handleChange}
                    required
                  />
                </div>
              </fieldset>
            </div>

            <div className="pregunta">
              <label htmlFor="p4">
                4.- En una escala del 1 al 5, ¿qué tan preparada considera que
                está su empresa para enfrentar los retos de la transformación
                digital?
              </label>
              <fieldset role="radiogroup" className="likert-scale" id="p4">
                <div className="opt-container">
                  <label htmlFor="p4-opt1">1</label>
                  <input
                    type="radio"
                    name="p4"
                    id="p4-opt1"
                    value="1"
                    checked={formData.p4 === "1"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p4-opt2">2</label>
                  <input
                    type="radio"
                    name="p4"
                    id="p4-opt2"
                    value="2"
                    checked={formData.p4 === "2"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p4-opt3">3</label>
                  <input
                    type="radio"
                    name="p4"
                    id="p4-opt3"
                    value="3"
                    checked={formData.p4 === "3"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p4-opt4">4</label>
                  <input
                    type="radio"
                    name="p4"
                    id="p4-opt4"
                    value="4"
                    checked={formData.p4 === "4"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p4-opt5">5</label>
                  <input
                    type="radio"
                    name="p4"
                    id="p4-opt5"
                    value="5"
                    checked={formData.p4 === "5"}
                    onChange={handleChange}
                    required
                  />
                </div>
              </fieldset>
            </div>

            <div className="pregunta">
              <label htmlFor="p5">
                5.- En una escala del 1 al 5, ¿qué porcentaje aproximado de sus
                procesos internos considera que están digitalizados actualmente?
              </label>
              <fieldset role="radiogroup" className="likert-scale" id="p8">
                <div className="opt-container">
                  <label htmlFor="p5-opt1">1</label>
                  <input
                    type="radio"
                    name="p5"
                    id="p8-opt1"
                    value="1"
                    checked={formData.p5 === "1"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p5-opt2">2</label>
                  <input
                    type="radio"
                    name="p5"
                    id="p5-opt2"
                    value="2"
                    checked={formData.p5 === "2"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p5-opt3">3</label>
                  <input
                    type="radio"
                    name="p5"
                    id="p5-opt3"
                    value="3"
                    checked={formData.p5 === "3"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p5-opt4">4</label>
                  <input
                    type="radio"
                    name="p5"
                    id="p5-opt4"
                    value="4"
                    checked={formData.p5 === "4"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p5-opt5">5</label>
                  <input
                    type="radio"
                    name="p5"
                    id="p8-opt5"
                    value="5"
                    checked={formData.p5 === "5"}
                    onChange={handleChange}
                    required
                  />
                </div>
              </fieldset>
            </div>
            <div className="pregunta">
              <label htmlFor="p6">
                6.- En una escala del 1 al 5, ¿qué tan relevante considera
                invertir en nuevas tecnologías para mantener la competitividad
                de su empresa?
              </label>
              <fieldset role="radiogroup" className="likert-scale" id="p6">
                <div className="opt-container">
                  <label htmlFor="p6-opt1">1</label>
                  <input
                    type="radio"
                    name="p6"
                    id="p6-opt1"
                    value="1"
                    checked={formData.p6 === "1"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p6-opt2">2</label>
                  <input
                    type="radio"
                    name="p6"
                    id="p6-opt2"
                    value="2"
                    checked={formData.p6 === "2"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p6-opt3">3</label>
                  <input
                    type="radio"
                    name="p6"
                    id="p6-opt3"
                    value="3"
                    checked={formData.p6 === "3"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p6-opt4">4</label>
                  <input
                    type="radio"
                    name="p6"
                    id="p6-opt4"
                    value="4"
                    checked={formData.p6 === "4"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p6-opt5">5</label>
                  <input
                    type="radio"
                    name="p6"
                    id="p6-opt5"
                    value="5"
                    checked={formData.p6 === "5"}
                    onChange={handleChange}
                    required
                  />
                </div>
              </fieldset>
            </div>

            <div className="pregunta">
              <label htmlFor="p7">
                7.- En una escala del 1 al 5, ¿qué tan vulnerable cree que es su
                empresa frente a riesgos de seguridad digital por falta de
                infraestructura tecnológica?
              </label>
              <fieldset role="radiogroup" className="likert-scale" id="p7">
                <div className="opt-container">
                  <label htmlFor="p7-opt1">1</label>
                  <input
                    type="radio"
                    name="p7"
                    id="p7-opt1"
                    value="1"
                    checked={formData.p7 === "1"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p7-opt2">2</label>
                  <input
                    type="radio"
                    name="p7"
                    id="p7-opt2"
                    value="2"
                    checked={formData.p7 === "2"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p7-opt3">3</label>
                  <input
                    type="radio"
                    name="p7"
                    id="p7-opt3"
                    value="3"
                    checked={formData.p7 === "3"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p7-opt4">4</label>
                  <input
                    type="radio"
                    name="p7"
                    id="p7-opt4"
                    value="4"
                    checked={formData.p7 === "4"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p7-opt5">5</label>
                  <input
                    type="radio"
                    name="p7"
                    id="p7-opt5"
                    value="5"
                    checked={formData.p7 === "5"}
                    onChange={handleChange}
                    required
                  />
                </div>
              </fieldset>
            </div>

            <div className="pregunta">
              <label htmlFor="p8">
                8.- En una escala del 1 al 5, ¿qué tan necesario considera
                implementar arquitecturas web inteligentes y soluciones de
                automatización para optimizar sus procesos internos?
              </label>
              <fieldset role="radiogroup" className="likert-scale" id="p8">
                <div className="opt-container">
                  <label htmlFor="p8-opt1">1</label>
                  <input
                    type="radio"
                    name="p8"
                    id="p8-opt1"
                    value="1"
                    checked={formData.p8 === "1"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p8-opt2">2</label>
                  <input
                    type="radio"
                    name="p8"
                    id="p8-opt2"
                    value="2"
                    checked={formData.p8 === "2"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p8-opt3">3</label>
                  <input
                    type="radio"
                    name="p8"
                    id="p8-opt3"
                    value="3"
                    checked={formData.p8 === "3"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p8-opt4">4</label>
                  <input
                    type="radio"
                    name="p8"
                    id="p8-opt4"
                    value="4"
                    checked={formData.p8 === "4"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p8-opt5">5</label>
                  <input
                    type="radio"
                    name="p8"
                    id="p8-opt5"
                    value="5"
                    checked={formData.p8 === "5"}
                    onChange={handleChange}
                    required
                  />
                </div>
              </fieldset>
            </div>

            <div className="pregunta">
              <label htmlFor="p9">
                9.- ¿Qué medios utiliza su empresa para la comunicación y
                coordinación interna (correo electrónico, mensajería
                instantánea, reuniones presenciales, plataformas digitales)?
              </label>
              <textarea
                name="p9"
                id="p9"
                value={formData.p9}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="pregunta">
              <label htmlFor="p10">
                10.- ¿Qué porcentaje de sus ingresos anuales corresponden al
                último trimestre? (respuesta en porcentaje %) Nota de ayuda:
                Para calcularlo, divida los ingresos del último trimestre entre
                los ingresos anuales totales y multiplique por 100.
              </label>
              <textarea
                name="p10"
                id="p10"
                value={formData.p10}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="pregunta">
              <label htmlFor="p11">
                11.- ¿En qué porcentaje han cambiado sus costos operativos
                después de digitalizar procesos en comparación con antes de
                hacerlo? (respuesta en porcentaje % — si no aplica, escriba NA)
              </label>
              <textarea
                name="p11"
                id="p11"
                value={formData.p11}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="pregunta">
              <label htmlFor="p12">
                12.- ¿Cuál es su margen de ganancia actual en comparación con el
                año pasado? (respuesta en porcentaje)
              </label>
              <textarea
                name="p12"
                id="p12"
                value={formData.p12}
                required
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="pregunta">
              <label htmlFor="p13">
                13.- ¿Cuánto tiempo tarda en promedio en responder a un cliente
                desde que recibe la solicitud? (respuesta en minutos)
              </label>
              <textarea
                name="p13"
                id=""
                value={formData.p13}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="pregunta">
              <label htmlFor="p14">
                14.- En una escala del 1 al 5, ¿qué nivel de satisfacción tienen
                sus clientes con el servicio? (respuesta en escala Likert)
              </label>
              <fieldset role="radiogroup" className="likert-scale" id="p8">
                <div className="opt-container">
                  <label htmlFor="p14-opt1">1</label>
                  <input
                    type="radio"
                    name="p14"
                    id="p8-opt1"
                    value="1"
                    checked={formData.p14 === "1"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p14-opt2">2</label>
                  <input
                    type="radio"
                    name="p14"
                    id="p8-opt2"
                    value="2"
                    checked={formData.p14 === "2"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p14-opt3">3</label>
                  <input
                    type="radio"
                    name="p14"
                    id="p8-opt3"
                    value="3"
                    checked={formData.p14 === "3"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p14-opt4">4</label>
                  <input
                    type="radio"
                    name="p14"
                    id="p8-opt4"
                    value="4"
                    checked={formData.p14 === "4"}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="opt-container">
                  <label htmlFor="p14-opt5">5</label>
                  <input
                    type="radio"
                    name="p14"
                    id="p8-opt5"
                    value="5"
                    checked={formData.p14 === "5"}
                    onChange={handleChange}
                    required
                  />
                </div>
              </fieldset>
            </div>
            <div className="pregunta">
              <label htmlFor="p15">
                15.- ¿Qué porcentaje de clientes vuelve a comprar en su negocio?
                (respuesta en porcentaje)
              </label>
              <textarea
                name="p15"
                id=""
                value={formData.p15}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="pregunta">
              <label htmlFor="p16">
                16.- ¿Cuál es el gasto promedio de un cliente durante toda su
                relación con la empresa? (respuesta en pesos)
              </label>
              <textarea
                name="p16"
                id="p16"
                value={formData.p16}
                required
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="pregunta">
              <label htmlFor="p17">
                17.- ¿Utiliza inteligencia artificial en alguno de sus procesos?
                (Sí/No, y en cuántos procesos)
              </label>
              <textarea
                name="p17"
                id=""
                value={formData.p17}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CuestionarioPymes;
