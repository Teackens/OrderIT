import mongoose from 'mongoose';
import { UserModel } from './users/users.model';

let database: mongoose.Connection;

export const connect = async () => {
    // add your own uri below
    const uri = 'mongodb://127.0.0.1:27017';

    if (database) {
        console.log('there is a db connection');
        return;
    }
    try {
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        database = mongoose.connection;
        database.once('open', async () => {
            console.log('Connected to database');
        });

        database.on('error', () => {
            console.log('Error connecting to database');
        });
    } catch (error) {
        console.error(error);
    }

    return {
        UserModel
    };
};

export const disconnect = (): void => {
    if (!database) {
        return;
    }

    mongoose.disconnect();
};
