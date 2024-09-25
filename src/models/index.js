import { sequelize } from '../db.js';
import Empresa from './empresa.model.js';

const models = {
    Empresa,
   
};

const syncModels = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log('All models synchronized successfully.');
    } catch (error) {
        console.error('Error synchronizing models:', error);
    }
};

export { models, syncModels };
