import app from './app.js';
import dotenv from 'dotenv';
import { connectDB } from './db.js';
import { syncModels } from './models/index.js';  // Importamos la sincronización dinámica

dotenv.config();

const PORT = process.env.PORT || 4000;

(async () => {
    try {
        await connectDB();
        await syncModels();  // Sincronizamos todos los modelos

        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    } catch (error) {
        console.error('Error during server startup:', error);
    }
})();
