import { Document } from 'mongoose';
import { UserDocument } from './users.types';

export async function setLastUpdated(this: UserDocument): Promise<void> {
    const now = new Date();
    if (!this.lastUpdated || this.lastUpdated < now) {
        this.lastUpdated = now;
        await this.save();
    }
}
export async function sameLastName(this: UserDocument): Promise<Document[]> {
    return this.model('user').find({ lastName: this.lastName });
}
