import { Document, Model, ObjectId } from 'mongoose';

export interface ITodo {
    title: string;
    description: string;
    dateOfEntry?: Date;
    lastUpdated?: Date;
}

export interface ITodoDocument extends ITodo, Document {
    setLastUpdated: (this: ITodoDocument) => Promise<void>;
    sameTitle: (this: ITodoDocument) => Promise<Document[]>;
}

export interface ITodoModel extends Model<ITodoDocument> {
    findOneOrCreate: (
        this: ITodo,
        { title, description }: { title: string; description: string }
    ) => Promise<ITodoDocument>;
    findByUser: (this: ITodo, id: ObjectId) => Promise<ITodoDocument[]>;
}
