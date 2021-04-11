const jsonServer = require('json-server');
const path = require('path');

const dbPath = path.join(__dirname, 'db');
console.log('dbPath', dbPath);

const mockRouter = require('./db/mock.json');
const todoRouter = require('./db/todos.json');
const shareLockedReducer = require('./db/shareLocked.json');

const sourceRouter = Object.assign({}, todoRouter, mockRouter, shareLockedReducer);

const server = jsonServer.create();
const router = jsonServer.router(sourceRouter);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(9090, () => {
  console.log('JSON Server is running at 9090');
});
