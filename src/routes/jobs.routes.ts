import { Router, Request, Response } from 'express';
import { dataBase } from '../database/data';
import orderedJobs from '../service/Ordered';

const jobRoutes = Router();

jobRoutes.get('/', async (req: Request, res: Response) => {
  const jobsPriority = orderedJobs(dataBase)
  return res.json(jobsPriority);
});

jobRoutes.post('/', async (req: Request, res: Response) => {
  const data = req.body
  const jobsPriority = orderedJobs(data);
  return res.status(200).json(jobsPriority);
});

export default jobRoutes;
