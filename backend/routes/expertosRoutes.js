import express from 'express';
import { crearExperto } from '../controllers/expertosController.js';

const router = express.Router();

router.post('/expertos', crearExperto);

export default router;
