import express, { response } from 'express';
import routes from './routes';
import cors from 'cors';
const app = express();

app.use(express.json());//

app.use(routes);

app.listen(3333);

