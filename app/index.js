import express from 'express'; 
import routes from './routes';
import parser from 'body-parser';

const app = express();
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use('/', routes)

export default app;