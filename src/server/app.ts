import express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';

class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: any, port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlwares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlwares() {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use('/', express.static(path.resolve('./src/server/public')));
    this.app.use('/static', express.static(path.resolve('./dist/client')));
  }

  private initializeControllers(controllers: any) {
    controllers.forEach((controller: any) => {
      this.app.use('/', controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server started on port ${this.port}`);
    });
  }
}

export default App;
