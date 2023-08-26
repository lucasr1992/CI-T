import { Router } from 'express';

const testeRoutes = Router();

testeRoutes.get('/', async (request, response) => {
  const data = [1, 2, 3, 4]
  return response.json(data);
});

export default testeRoutes;
