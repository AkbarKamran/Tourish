import { config } from "dotenv";
config();
var http = require("http");
import { akbar } from "./src/Api/V1/lib/helpers/helper";

import App from "./src/app";

const apps = new App().app;
var httpServer = http.createServer(apps);

const start = () => {
  httpServer.listen(process.env.PORT, () => {
    console.log(`Server is running:  http://localhost:${process.env.PORT}`);
  });
};
start();
