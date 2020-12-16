import { Document, Model } from 'mongoose';

export interface IUser {
    firstName: string;
    lastName: string;
    age: number;
    dateOfEntry?: Date;
    lastUpdated?: Date;
}

export interface UserDocument extends IUser, Document {
    setLastUpdated: (this: UserDocument) => Promise<void>;
    sameLastName: (this: UserDocument) => Promise<Document[]>;
}

export interface UserModel extends Model<UserDocument> {
    findOneOrCreate: (
        this: UserModel,
        {
            firstName,
            lastName,
            age
        }: { firstName: string; lastName: string; age: number }
    ) => Promise<UserDocument>;
    findByAge: (
        this: UserModel,
        min?: number,
        max?: number
    ) => Promise<UserDocument[]>;
}
