import { ObjectId } from 'mongoose';
import { TodoDocument, TodoModel, ITodo } from './todo.types';

export async function findOneOrCreate(
    this: TodoModel,
    Todo: ITodo
): Promise<TodoDocument> {
    const record = await this.findOne(Todo);
    if (record) {
        return record;
    } else {
        return this.create(Todo);
    }
}

export async function findByCreatedUser(
    this: TodoModel,
    user_id: ObjectId
): Promise<TodoDocument[]> {
    return this.find({ _id: user_id });
}
