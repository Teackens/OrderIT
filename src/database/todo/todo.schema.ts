import { Schema } from 'mongoose';
import { sameTitle, setLastUpdated } from './todo.methods';
import { findByCreatedUser, findOneOrCreate } from './todo.statics';
import { ITodo } from './todo.types';

const TodoSchema: Schema<ITodo> = new Schema({
    title: String,
    description: String,
    dateOfEntry: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: new Date()
    }
});

TodoSchema.statics.findOneOrCreate = findOneOrCreate;
TodoSchema.statics.findByCreatedUser = findByCreatedUser;

TodoSchema.methods.setLastUpdated = setLastUpdated;
TodoSchema.methods.sameTitle = sameTitle;

export default TodoSchema;
