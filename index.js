const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router(path.join(__dirname, "db.json"));
var port = process.env.YOUR_PORT || process.env.PORT || 8080;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log("JSON Server is running");
});
