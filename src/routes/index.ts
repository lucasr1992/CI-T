import { Router } from 'express';

import jobRoutes from './jobs.routes';

const routes = Router();

routes.use('/jobs', jobRoutes);

export default routes;
