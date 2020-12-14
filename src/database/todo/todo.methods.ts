import { Document } from 'mongoose';
import { ITodoDocument } from './todo.types';

export async function setLastUpdated(this: ITodoDocument): Promise<void> {
    const now = new Date();
    if (!this.lastUpdated || this.lastUpdated < now) {
        this.lastUpdated = now;
        await this.save();
    }
}
export async function sameTitle(this: ITodoDocument): Promise<Document[]> {
    return this.model('todo').find({ title: this.title });
}
