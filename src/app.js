import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import EmpresasRoutes from './routes/empresas.routes.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', EmpresasRoutes);

// Middleware global de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: "Something went wrong!" });
});

export default app;
