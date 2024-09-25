import { DataTypes } from "sequelize";
import { sequelize } from "../db.js"; // Reutilizamos la instancia de sequelize

const tbl_empresa = sequelize.define(
  "tbl_empresa",
  {
    nombre_comercial: { type: DataTypes.STRING, allowNull: false },
    razon_social: { type: DataTypes.STRING, allowNull: false },
    telefono: { type: DataTypes.STRING, allowNull: false },
    correo_electronico: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true },
    },
    nit: { type: DataTypes.STRING, allowNull: false, unique: true },
    estado: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
    direccion: { type: DataTypes.STRING, allowNull: false },
  },
  {
    timestamps: true,
  }
);

export default tbl_empresa;
