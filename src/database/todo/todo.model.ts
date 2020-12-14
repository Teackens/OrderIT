import * as Mongoose from 'mongoose';
import TodoSchema from './todo.schema';
import { ITodoDocument, ITodoModel } from './todo.types';

export const TodoModel: ITodoModel = Mongoose.model<ITodoDocument>(
    'todo',
    TodoSchema
) as ITodoModel;
