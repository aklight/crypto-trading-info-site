import App from './app';
import UsersController from '../server/routes/api/users';
import connectDB from '../../config/db';

// Connect to mongo DB
// connectDB();

const app = new App([
  new UsersController(),
], 5000);

app.listen();
