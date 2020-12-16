import { connect, connection, Connection } from 'mongoose';
import { Todo } from './todo/todo.model';
import { User } from './users/users.model';
import { UserModel } from './users/users.types';
import { TodoModel } from './todo/todo.types';
import { __MONGO_URI__ } from '../utils/config';

interface IModels {
    User: UserModel;
    Todo: TodoModel;
}

export class DB {
    private static instance: DB;

    private _db: Connection;
    private _models: IModels;

    private constructor() {
        connect(__MONGO_URI__, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        this._db = connection;
        this._db.on('open', this.connected);
        this._db.on('error', this.error);

        this._models = {
            User: new User().model,
            Todo: new Todo().model
        };
    }

    public static get Models(): IModels {
        if (!DB.instance) {
            DB.instance = new DB();
        }
        return DB.instance._models;
    }

    private connected() {
        console.log('Mongoose has connected');
    }

    private error(error: Error) {
        console.log('Mongoose has errored', error);
    }
}
