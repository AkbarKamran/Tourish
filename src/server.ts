import { config } from "dotenv";
config();
var http = require("http");

import App from "./app";

const apps = new App().app;
var httpServer = http.createServer(apps);
const PORT = process.env.PORT || 3000;
const start = () => {
  httpServer.listen(PORT, () => {
    console.log(`Server is running:  http://localhost:${PORT}`);
  });
};
start();
