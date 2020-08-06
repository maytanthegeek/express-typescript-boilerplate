import express from 'express';
import dotenv from 'dotenv';
import pino from 'express-pino-logger';
import bodyParser from 'body-parser';
import SampleController from './sample-controller';

dotenv.config();

class App {
  private app: express.Application;

  private port: number;

  constructor(controllers: any[], port: number | string = 3000) {
    this.app = express();
    this.port = +port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(pino());
  }

  private initializeControllers(controllers: any[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  listen() {
    // eslint-disable-next-line no-console
    this.app.listen(this.port, () => console.log(`Server started listening on port ${this.port}`));
  }
}

const { PORT } = process.env;
const app = new App([new SampleController()], PORT);

app.listen();
