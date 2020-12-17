import { suite, test } from '@testdeck/mocha';
import { assert } from 'chai';
import { agent } from 'supertest';
import { ExpressApp } from '../src/server';

@suite
class UserRouterUnitTests {
    @test
    async 'should return OK status'(
        done: () => (value: void) => void | PromiseLike<void>
    ) {
        return await agent(ExpressApp)
            .get('/api/user')
            .then(function (response) {
                assert.equal(response.status, 200);
            })
            .then(done());
    }
}
