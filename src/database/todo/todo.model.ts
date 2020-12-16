import mongoose from 'mongoose';
import TodoSchema from './todo.schema';
import { TodoModel, TodoDocument } from './todo.types';

export class Todo {
    private _model: TodoModel;

    constructor() {
        this._model = mongoose.model<TodoDocument, TodoModel>(
            'todo',
            TodoSchema,
            'todo-list'
        );
    }

    public get model(): TodoModel {
        return this._model;
    }
}
