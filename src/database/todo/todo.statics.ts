import { ObjectId } from 'mongoose';
import { ITodoDocument, ITodoModel } from './todo.types';

export async function findOneOrCreate(
    this: ITodoModel,
    { title, description }: { title: string; description: string }
): Promise<ITodoDocument> {
    const record = await this.findOne({ title, description });
    if (record) {
        return record;
    } else {
        return this.create({ title, description });
    }
}

export async function findByUser(
    this: ITodoModel,
    id: ObjectId
): Promise<ITodoDocument[]> {
    return this.find({ _id: id });
}
