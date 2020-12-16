import { suite, test } from '@testdeck/mocha';
import { expect } from 'chai';
import { DB } from '../src/database/database';
import { IUser, UserDocument } from '../src/database/users/users.types';

@suite
class UserModelUnitTests {
    UserData: IUser;
    UserDocument: UserDocument;

    before() {
        this.UserData = {
            age: 27,
            firstName: 'Daniel',
            lastName: 'Tester'
        };
        this.UserDocument = new DB.Models.User(this.UserData);
        this.UserDocument.save();
    }

    @test 'should contain property age'() {
        expect(this.UserDocument).has.property('age', this.UserData.age);
    }
    @test 'should contain property firstname'() {
        expect(this.UserDocument).has.property(
            'firstName',
            this.UserData.firstName
        );
    }
    @test 'should contain property lastName'() {
        expect(this.UserDocument).has.property(
            'lastName',
            this.UserData.lastName
        );
    }
}
