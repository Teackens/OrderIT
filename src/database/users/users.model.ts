import * as Mongoose from 'mongoose';
import UserSchema from './users.schema';
import { UserDocument, UserModel } from './users.types';

export class User {
    private _model: UserModel;
    constructor() {
        this._model = Mongoose.model<UserDocument, UserModel>(
            'user',
            UserSchema
        );
    }

    public get model(): UserModel {
        return this._model;
    }
}
