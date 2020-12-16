import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { DB } from '../src/database/database';
import { IUser, UserDocument } from '../src/database/users/users.types';

_chai.should();
@suite
class UserModelUnitTests {
    UserData: IUser;
    UserDocument: UserDocument;

    constructor() {
        this.UserData = {
            age: 27,
            firstName: 'Daniel',
            lastName: 'Tester'
        };
        this.UserDocument = new DB.Models.User(this.UserData);
        this.UserDocument.save();
    }

    @test
    'should contain property age'() {
        this.UserDocument.should.have.property('age', this.UserData.age);
    }

    @test
    'should contain property firstname'() {
        this.UserDocument.should.have.property(
            'firstName',
            this.UserData.firstName
        );
    }

    @test
    'should contain property lastName'() {
        this.UserDocument.should.have.property(
            'lastName',
            this.UserData.lastName
        );
    }
}
