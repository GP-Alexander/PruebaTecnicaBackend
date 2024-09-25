import { z } from 'zod';

export const EmpresaSchema = z.object({
    nombre_comercial: z.string()
        .trim()  // Elimina los espacios al inicio y al final
        .min(1, { message: "Nombre comercial no puede estar vacío ni contener solo espacios" }),
    
    razon_social: z.string()
        .trim()
        .min(1, { message: "Razón social no puede estar vacía ni contener solo espacios" }),
    
    telefono: z.string()
        .trim()
        .min(10, { message: "El número de teléfono debe tener al menos 10 caracteres" }),
    
    correo_electronico: z.string()
        .trim()
        .email({ message: "Correo electrónico inválido" }),
    
    nit: z.string()
        .trim()
        .min(1, { message: "NIT es obligatorio y no puede estar vacío" }),
    
    estado: z.boolean().optional(),  // El estado es opcional y debe ser booleano
    
    direccion: z.string()
        .trim()
        .min(1, { message: "Dirección no puede estar vacía ni contener solo espacios" }),
});

