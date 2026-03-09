import { Router } from 'express';
import * as ctrl from '../controllers/grupos.controller.js';
import verificador from '../middleware/authmiddleware.js';

const router = Router();

// Definición de endpoints
router.get('/', ctrl.getAllGrupos);
router.get('/:id', ctrl.getGrupoById);
router.post('/',verificador, ctrl.createGrupo)

export default router;