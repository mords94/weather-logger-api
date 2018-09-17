import {Router} from 'express'; 
import LogController from './controllers/LogController';
import Log from './models/Log';

const routes = Router();

const logController = new LogController(new Log());

routes.get('/', (_, res) => res.send('Application root'));

routes.route('/logs').get(logController.index).post(logController.create)

export default routes;