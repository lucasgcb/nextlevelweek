import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
const app = express();
app.use(cors()); // Limitar URLs possiveis :)
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))) // Serve static files


app.listen(3333);