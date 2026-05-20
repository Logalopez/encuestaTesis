import db from "../config/db.js";
export const crearPymes = (req, res)=>{
    
    const {nombre, giro_Empresa, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17} = req.body
      
    if (!nombre || !giro_Empresa || !p1 || !p2 || !p3 || !p4 || !p5 || !p6 || !p7 || !p8 || !p9 || !p10 || !p11 || !p12 || !p13 || !p14 || !p15 || !p16 || !p17) {
    return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
  }

    const query = 'INSERT INTO preguntasPymes (nombre, giro_Empresa, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);'
    db.query(query, [nombre, giro_Empresa, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17], (err, result) => {
    if (err) {
      return res.status(500).json({ mensaje: "Error al guardar la base de datos" });

    }
    res.status(201).json({ mensaje: "Respuesta guardada correctamente" });
   });
};

export default crearPymes;