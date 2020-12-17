import express, { Request, Response } from 'express';
import { DB } from '../database/database';
import { IUser, UserDocument } from '../database/users/users.types';

const router = express.Router();

router.get('/api/user', async (req: Request, res: Response) => {
    const user = await DB.Models.User.findOneOrCreate(req.body);
    return res.status(200).send(user);
});

router.post('/api/user', async (req: Request, res: Response) => {
    const userData: IUser = req.body;
    const user: UserDocument = new DB.Models.User(userData);

    await user.save();
    return res.status(201).send(user);
});

export { router as userRouter };
