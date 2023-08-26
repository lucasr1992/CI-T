import { Router } from 'express';
import testeRoutes from './teste.routes';

const routes = Router();

routes.use('/teste', testeRoutes);

export default routes;
