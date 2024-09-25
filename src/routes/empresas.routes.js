import { Router } from "express";
import {getempresas, getEmpresaById, createEmpresa, updateEmpresa, deleteEmpresa} from '../controllers/empresa.controller.js';
import { validateSchema } from "../middlewares/validator.middleware.js";
import { EmpresaSchema } from "../schemas/empresa.schema.js";
const router = Router();
router.get('/empresas', getempresas);
router.get('/empresa/:id', getEmpresaById);
router.post('/empresas', validateSchema(EmpresaSchema), createEmpresa);
router.put('/empresas/:id', updateEmpresa);
router.delete('/empresas/:id', deleteEmpresa);

export default router;