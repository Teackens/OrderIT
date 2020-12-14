import { Schema } from 'mongoose';
import { sameTitle, setLastUpdated } from './todo.methods';
import { findByCreatedUser, findOneOrCreate } from './todo.statics';

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    dateOfEntry: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: new Date()
    }
});

UserSchema.statics.findOneOrCreate = findOneOrCreate;
UserSchema.statics.findByCreatedUser = findByCreatedUser;

UserSchema.methods.setLastUpdated = setLastUpdated;
UserSchema.methods.sameTitle = sameTitle;

export default UserSchema;
