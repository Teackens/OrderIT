import { ObjectId } from 'mongoose';
import { ITodoDocument, ITodoModel } from './todo.types';

export async function findOneOrCreate(
    this: ITodoModel,
    {
        title,
        description,
        user_id
    }: { title: string; description: string; user_id: ObjectId }
): Promise<ITodoDocument> {
    const record = await this.findOne({ title, description, user_id });
    if (record) {
        return record;
    } else {
        return this.create({ title, description, user_id });
    }
}

export async function findByCreatedUser(
    this: ITodoModel,
    user_id: ObjectId
): Promise<ITodoDocument[]> {
    return this.find({ _id: user_id });
}
