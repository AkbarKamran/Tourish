import express, { Request, Response, Application } from "express";
import router from "./Api/V1/routes/router";
import cors from "cors";

class App {
  public app: Application;
  //   public Port: any = process.env.PORT;

  constructor() {
    this.app = express();
    this.initialize();

    router(this.app);
  }

  private initialize() {
    this.app.use(cors({ credentials: true, origin: true }));
    this.app.use(express.json());
  }
}
export default App;
