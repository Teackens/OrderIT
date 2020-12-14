import express from 'express';
import { json } from 'body-parser';
// import { toDoRouter } from './routes/todo';
import { connect } from './database/database';

const app = express();
app.use(json());
// app.use(toDoRouter);

connect();

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});
