import db from "../config/db.js";
export const crearExperto = (req, res)=>{
    
    const {nombre, anos_Experiencia, cargo, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10} = req.body

    if (!nombre || !anos_Experiencia || !cargo || !p1 || !p2 || !p3 || !p4 || !p5 || !p6 || !p7 || !p8 || !p9 || !p10) {
    return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
  }
    const query =   'INSERT INTO preguntasExpertos (nombre, anos_experiencia, cargo, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);'
     db.query(query, [nombre, anos_Experiencia, cargo, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10], (err, result) => {
    if (err) {
      console.error(err);
       return res.status(500).json({ mensaje: "Error al guardar la base de datos" });
    }
    res.status(201).json({ mensaje: "Respuesta guardada correctamente" });

  });
};

export default crearExperto;