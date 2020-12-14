import mongoose from 'mongoose';

interface ITodo {
    title: string;
    description: string;
}

interface TodoDoc extends mongoose.Document {
    title: string;
    description: string;
}

interface todoModelInterface extends mongoose.Model<TodoDoc> {
    build(attr: ITodo): TodoDoc;
}

const ToDoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
});

const Todo = mongoose.model<TodoDoc, todoModelInterface>('ToDo', ToDoSchema);

Todo.build({ description: 'sdfs', title: 'sdfdsfd' });

export { Todo };