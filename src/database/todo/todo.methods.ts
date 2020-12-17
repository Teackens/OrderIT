import { TodoDocument } from './todo.types';

export async function setLastUpdated(this: TodoDocument): Promise<void> {
    const now = new Date();
    if (!this.lastUpdated || this.lastUpdated < now) {
        this.lastUpdated = now;
        await this.save();
    }
}
export async function sameTitle(this: TodoDocument): Promise<TodoDocument[]> {
    return this.model('todo').find({ title: this.title });
}
