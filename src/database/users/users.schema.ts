import { Schema } from 'mongoose';
import { sameLastName, setLastUpdated } from './users.methods';
import { User } from './users.model';
import { findByAge, findOneOrCreate } from './users.statics';

const UserSchema: Schema<User> = new Schema({
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
UserSchema.statics.findByAge = findByAge;

UserSchema.methods.setLastUpdated = setLastUpdated;
UserSchema.methods.sameLastName = sameLastName;

export default UserSchema;
