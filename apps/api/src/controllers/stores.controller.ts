import type { Request, Response } from 'express';
import db from '../db';
import { StoresTable } from '../db/schema';

export const CreateStoreController = async (req: Request, res: Response) => {
  try {
    await db.insert(StoresTable).values(req.body);

    return res.status(200).json({ message: 'Stockist Created' });
  } catch (error) {
    console.error(JSON.stringify(error, null, 2));
    return res.status(400).json({ message: 'Stockist create error' });
  }
};
