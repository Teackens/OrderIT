import express from 'express';
import { json } from 'body-parser';
import { DB } from './database/database';
import './utils/config';
// import { toDoRouter } from './routes/todo';

const app = express();
app.use(json());
// app.use(toDoRouter);

//new DB();

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});
