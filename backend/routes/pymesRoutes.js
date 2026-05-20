import express from 'express';
import { crearPymes } from '../controllers/pymesController.js';

const router = express.Router();

router.post('/pymes', crearPymes);

export default router;
