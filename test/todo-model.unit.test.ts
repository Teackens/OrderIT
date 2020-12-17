import { suite, test } from '@testdeck/mocha';
import * as _chai from 'chai';
import { DB } from '../src/database/database';
import { ITodo, TodoDocument } from '../src/database/todo/todo.types';

_chai.should().not.equal;
@suite
class TodoModelUnitTests {
    TodoData: ITodo;
    todoDocument: TodoDocument;
    constructor() {
        this.TodoData = {
            title: 'Finalize unit test',
            description: 'is done when the unit tests are finaly working'
        };
        this.todoDocument = new DB.Models.Todo(this.TodoData);
        this.todoDocument.save();
        DB.Disconnect();
    }

    @test 'should contain property title'() {
        this.todoDocument.should.have.property('title', this.TodoData.title);
    }
    @test 'should contain property description'() {
        this.todoDocument.should.have.property(
            'description',
            this.TodoData.description
        );
    }
}
