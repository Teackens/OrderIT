import { suite, test } from '@testdeck/mocha';
import { expect } from 'chai';
import { DB } from '../src/database/database';
import { ITodo, TodoDocument } from '../src/database/todo/todo.types';

@suite
class TodoModelUnitTests {
    TodoData: ITodo;
    todoDocument: TodoDocument;

    before() {
        this.TodoData = {
            title: 'Finalize unit test',
            description: 'is done when the unit tests are finaly working'
        };
        this.todoDocument = new DB.Models.Todo(this.TodoData);
        this.todoDocument.save();
    }

    @test 'should contain property title'() {
        expect(this.todoDocument).has.property('title', this.TodoData.title);
    }
    @test 'should contain property description'() {
        expect(this.todoDocument).has.property(
            'description',
            this.TodoData.description
        );
    }
}
