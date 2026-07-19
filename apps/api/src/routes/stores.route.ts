import { Router } from 'express';
import { ValidateBody } from '../middleware/validations';
import {
  CreateStoreController,
  EditStoreController,
} from '../controllers/stores.controller';
import { StockistSchema } from '@seoul-rebels/utils';

export const router: Router = Router();

router.get('/', (req, res) => {
  return res.json({ message: 'stores' });
});

router.get('/:id', (req, res) => {
  return res.json({ message: `store${req.params.id}` });
});

router.post('/', ValidateBody(StockistSchema), CreateStoreController);

router.delete('/:id', (req, res) => {
  return res.json({ message: `store ${req.params.id} deleted` });
});

router.patch('/:id', ValidateBody(StockistSchema), EditStoreController);
