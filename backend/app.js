import express from 'express';
import sweetRoutes from './routes/sweetRoutes.js';

const app = express();
app.use(express.json());
app.use('/sweets', sweetRoutes);

export default app;
