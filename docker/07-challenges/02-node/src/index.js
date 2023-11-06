const express = require("express");

const APP_PORT = 3000;

const app = express();
const routes = require("./routes");

for (const route of routes) {
  app[route.type](route.path, route.action);
}

app.listen(APP_PORT, () => {
  console.log(`App is running at ${APP_PORT}`);
});
