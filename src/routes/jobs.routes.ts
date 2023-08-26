import { Router, Request, Response } from 'express';
import { dataBase } from '../database/data';
import orderedJobs from '../service/Ordered';

const jobRoutes = Router();

jobRoutes.get('/', async (request: Request, response: Response) => {
  const jobsPriority = orderedJobs(dataBase)

  return response.json(jobsPriority);
});

export default jobRoutes;
