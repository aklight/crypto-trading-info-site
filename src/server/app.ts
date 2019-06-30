import * as express from "express";
import * as path from "path";

class App {
  public app: express.Application;
  public port: number;

  constructor(controllers, port) {
    this.app = express();
    this.port = port;

    this.initializeMiddlwares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlwares() {
    this.app.use(express.json({ extended: false }));
    this.app.use("/", express.static(path.resolve("./src/server/public")));
    this.app.use("/static", express.static(path.resolve("./dist/client")));
  }

  private initializeControllers(controllers) {
    controllers.forEach(controller => {
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