import express from 'express';
import { json } from 'body-parser';
import './utils/config';
import { todoRouter } from './routes/todo';
import { userRouter } from './routes/users';

const app = express();
app.use(json());
app.use(todoRouter);
app.use(userRouter);

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});

export { app as ExpressApp };
