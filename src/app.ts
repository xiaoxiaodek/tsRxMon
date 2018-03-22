import * as Koa  from 'koa';
import * as config from 'config';
import * as bodyParser from 'koa-bodyparser';
import * as logger from 'koa-logger';
import * as session from 'koa-session';
import 'reflect-metadata';
import {useKoaServer} from 'routing-controllers';

import {LogController} from './controller/LogController';
const app = new Koa();
const port = config.get<string>('serverPort');
// middlewares
app.use(bodyParser({
  enableTypes: ['json', 'form', 'text']
}));
app.use(logger());
// koa-session
session(app);
// routing-controller
useKoaServer(app, { controllers: [LogController]});
app.use(require('koa-static')(__dirname + '/public'));

// logger
app.use(async (ctx, next) => {
  const start: number = new Date().getTime();
  await next();
  const ms: number = new Date().getTime() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
// error-handling
app.on('error', (err: any, ctx: Koa.Context) => {
  console.error('server error', err, ctx)
});

// module.exports = app;
