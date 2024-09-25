import { Router } from "express";
import {getempresas, getEmpresaById, createEmpresa, updateEmpresa, deleteEmpresa} from '../controllers/empresa.controller.js';
import { validateSchema } from "../middlewares/validator.middleware.js";
import { EmpresaSchema } from "../schemas/empresa.schema.js";
const router = Router();
router.get('/empresas', getempresas);
router.get('/empresa/:id', getEmpresaById);
router.post('/empresa', validateSchema(EmpresaSchema), createEmpresa);
router.put('/empresa/:id',validateSchema(EmpresaSchema), updateEmpresa);
router.delete('/empresa/:id', deleteEmpresa);

export default router;