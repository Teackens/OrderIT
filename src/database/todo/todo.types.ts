import { Document, Model, ObjectId } from 'mongoose';

export declare interface ITodo {
    title: string;
    description: string;
    dateOfEntry?: Date;
    lastUpdated?: Date;
}

export declare interface TodoDocument extends ITodo, Document {
    setLastUpdated: (this: TodoDocument) => Promise<void>;
    sameTitle: (this: TodoDocument) => Promise<Document[]>;
}

export declare interface TodoModel extends Model<TodoDocument> {
    findOneOrCreate: (
        this: ITodo,
        { title, description }: { title: string; description: string }
    ) => Promise<TodoDocument>;
    findByUser: (this: ITodo, id: ObjectId) => Promise<TodoDocument[]>;
}
