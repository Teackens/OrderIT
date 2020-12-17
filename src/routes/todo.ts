import express, { Request, Response } from 'express';
import { DB } from '../database/database';
import { ITodo, TodoDocument } from '../database/todo/todo.types';

const router = express.Router();

router.get('/api/todo', async (req: Request, res: Response) => {
    console.log(req.body);
    const todo = await DB.Models.Todo.find(req.body);
    return res.status(200).send(todo);
});

router.post('/api/todo', async (req: Request, res: Response) => {
    const todoData: ITodo = req.body;

    const todo: TodoDocument = new DB.Models.Todo(todoData);
    await todo.save();
    return res.status(201).send(todo);
});

export { router as todoRouter };
