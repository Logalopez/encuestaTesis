import express from 'express'
const app = express()
import db from './config/db.js'
import expertosRoutes from './routes/expertosRoutes.js'
import pymesRoutes from './routes/pymesRoutes.js'
import cors from "cors"
import axios from "axios"   // 👈 instala axios con: npm install axios

const port = process.env.PORT || 3000

app.use(express.json());  
app.use(cors());
app.use('/api', expertosRoutes);
app.use('/api', pymesRoutes);

// 🔹 Ruta de salud (heartbeat endpoint)
app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

// 🔹 Auto‑ping (heartbeat interno)
setInterval(() => {
  axios.get(`https://tu-backend-production.up.railway.app/health`)
    .then(() => console.log('Heartbeat enviado'))
    .catch(err => console.error('Error en heartbeat:', err));
}, 5 * 60 * 1000); // cada 5 minutos
