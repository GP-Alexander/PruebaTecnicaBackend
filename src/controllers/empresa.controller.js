import EmpresaModel from '../models/empresa.model.js';

// Obtener todas las empresas
export const getempresas = async (req, res, next) => {
    try {
        const empresas = await EmpresaModel.findAll({
            attributes: [`id`, `nombre_comercial`, `razon_social`, `telefono`, `correo_electronico`, `nit`, `estado`, `direccion`]  // Seleccionar solo campos necesarios
        });
        res.json(empresas);
    } catch (error) {
        next(error);
    }
};

export const getEmpresaById = async (req, res, next) => {
    try {
        const empresa = await EmpresaModel.findByPk(req.params.id);
        if (!empresa) return res.status(404).json({ message: "Empresa not found" });

        return res.json(empresa);
    } catch (error) {
        next(error);
    }
}

// Crear una nueva empresa
export const createEmpresa = async (req, res, next) => {
    try {
        const { nombre_comercial, razon_social, telefono, correo_electronico, nit, estado, direccion } = req.body;
        const nuevaEmpresa = await EmpresaModel.create({
            nombre_comercial,
            razon_social,
            telefono,
            correo_electronico,
            nit,
            estado,
            direccion,
        });
        res.status(201).json(nuevaEmpresa);
    } catch (error) {
        next(error);
    }
};

// Actualizar una empresa existente
export const updateEmpresa = async (req, res, next) => {
    try {
        const { id } = req.params;
        const [updated] = await EmpresaModel.update(req.body, { where: { id } });
        if (!updated) return res.status(404).json({ message: "Empresa not found" });

        const updatedEmpresa = await EmpresaModel.findByPk(id);
        return res.json(updatedEmpresa);
    } catch (error) {
        next(error);
    }
};

// Eliminar una empresa
export const deleteEmpresa = async (req, res, next) => {
    try {
        const deleted = await EmpresaModel.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) return res.status(404).json({ message: "Empresa not found" });

        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};
