import App from './app';
import UsersController from '../server/routes/api/users';

const app = new App([new UsersController()], 4000);

app.listen();
