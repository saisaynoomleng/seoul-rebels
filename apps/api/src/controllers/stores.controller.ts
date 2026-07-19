import type { Request, Response } from 'express';
import db from '../db';
import { StoresTable } from '../db/schema';
import { eq } from 'drizzle-orm';

export const CreateStoreController = async (req: Request, res: Response) => {
  try {
    await db.insert(StoresTable).values(req.body);

    return res.status(200).json({ message: 'Stockist Created' });
  } catch (error) {
    console.error(JSON.stringify(error, null, 2));
    return res.status(400).json({ message: 'Stockist create error' });
  }
};
export const EditStoreController = async (req: Request, res: Response) => {
  try {
    await db
      .update(StoresTable)
      .set(req.body)
      .where(eq(StoresTable.sanityId, req.body.sanityId));

    return res.status(200).json({ message: 'Stockist Edited' });
  } catch (error) {
    console.error(JSON.stringify(error, null, 2));
    return res.status(400).json({ message: 'Stockist create error' });
  }
};
