import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CuestionarioExpertos() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    anos_Experiencia: "",
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

      const response = await fetch(`${API_URL}/expertos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/gracias"); // navegación interna, sin 404
      } else {
        alert("Error al enviar el cuestionario");
      }
    } catch (error) {
      console.error(error);
      setSuccess("");
      setError("Error de conexión con el servidor");
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
        <div className="cuestionario">
          <br />
          <div className="descripcion">
            <p>
              Estimado(a) experto(a), este cuestionario busca conocer su
              experiencia y opinión sobre la adopción de tecnologías digitales
              en PYMES. Sus respuestas, brindadas con sinceridad, serán de gran
              valor para mi tesis y me ayudarán a obtener información útil y
              significativa.
            </p>
          </div>
          <br />
          <br />
          <form className="preguntas" onSubmit={handleSubmit}>
            <div className="pregunta">
              <label htmlFor="nombre">Nombre completo: </label>
              <input
                name="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleChange}
                id="nombre"
              />
            </div>
            <div className="pregunta">
              <label htmlFor="anos_Experiencia">
                Años de experiencia profesional:
              </label>
              <input
                name="anos_Experiencia"
                value={formData.anos_Experiencia}
                onChange={handleChange}
                id="anos_Experiencia"
                type="text"
              />
            </div>
            <div className="pregunta">
              <label htmlFor="cargo">Cargo actual: </label>
              <input
                name="cargo"
                type="text"
                value={formData.cargo}
                onChange={handleChange}
                id="cargo"
              />
            </div>
            <div className="pregunta">
              <label htmlFor="p1">
                1.- ¿Cuáles considera que son los principales beneficios de la
                transformación digital para una PYME en términos de
                competitividad y sostenibilidad?
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
                2.- ¿Cuáles son las trabas más comunes que las PYMES imponen
                para no adoptar tecnologías digitales (financieras, culturales,
                organizacionales)?
              </label>
              <textarea
                name="p2"
                id="pregunta2"
                value={formData.p2}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="pregunta">
              <label htmlFor="p3">
                3.- ¿Por qué cree que muchas empresas muestran resistencia al
                cambio tecnológico?
              </label>
              <textarea
                name="p3"
                id="pregunta3"
                value={formData.p3}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="pregunta">
              <label htmlFor="p4">
                4.- ¿Qué tipo de tecnologías digitales utilizan actualmente las
                PYMES en sus procesos (por ejemplo: comercio electrónico, CRM,
                analítica de datos, inteligencia artificial, sistemas en la
                nube) y, en caso de no emplear ninguna, cuáles son las razones
                principales de esta ausencia?
              </label>
              <textarea
                name="p4"
                id="pregunta4"
                required
                value={formData.p4}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="pregunta">
              <label htmlFor="p5">
                5.- ¿Qué estrategias de capacitación o acompañamiento
                recomendaría para acelerar la adopción tecnológica en PYMES?
              </label>
              <textarea
                name="p5"
                id="pregunta5"
                value={formData.p5}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="pregunta">
              <label htmlFor="p6">
                6.- ¿Qué tecnologías considera más viables para PYMES en México
                en el corto plazo (ejemplo: comercio electrónico, analítica de
                datos, CRM, inteligencia artificial aplicada)?
              </label>
              <textarea
                name="p6"
                id="pregunta6"
                value={formData.p6}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="pregunta">
              <label htmlFor="p7">
                7.- ¿Qué beneficios u opciones considera que puede ofrecer la
                integración de inteligencia artificial en el desarrollo web de
                una PYME, especialmente en áreas como la personalización de la
                experiencia del cliente, la automatización de procesos y la toma
                de decisiones estratégicas?
              </label>
              <textarea
                name="p7"
                id="pregunta7"
                value={formData.p7}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="pregunta">
              <label htmlFor="p8">
                8.- ¿Qué importancia tiene para una PYME contar con una página
                web en su estrategia de crecimiento y competitividad digital?
              </label>
              <textarea
                name="p8"
                id="pregunta8"
                value={formData.p8}
                required
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="pregunta">
              <label htmlFor="p9">
                9.- ¿Qué criterios suelen considerar las grandes empresas al
                momento de tomar decisiones sobre la adopción de nuevas
                tecnologías?
              </label>
              <textarea
                name="p9"
                id="pregunta9"
                value={formData.p9}
                required
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="pregunta">
              <label htmlFor="p10">
                10.- ¿Qué tendencias tecnológicas ha identificado en su
                experiencia que marcan un antes y un después en la forma de
                competir en los mercados?
              </label>
              <textarea
                name="p10"
                id="pregunta10"
                value={formData.p10}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {error && <p className="error-msg">{error}</p>}
            {success && <p className="success-msg">{success}</p>}
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CuestionarioExpertos;
