import * as express from 'express';
 
class UsersController {
  public path = '/users';
  public router = express.Router();
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.registerUser);
  }
 
  registerUser = (request: express.Request, response: express.Response) => {
    console.log(request);  
    response.send('From users controller');
  }
}
 
export default UsersController;