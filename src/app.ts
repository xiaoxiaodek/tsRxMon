import * as Koa  from 'koa';
import * as config from 'config';
import * as bodyParser from 'koa-bodyparser';
import * as logger from 'koa-logger';
import * as session from 'koa-session';
const routes = require('./routes/*')


const app = new Koa();

// middlewares
app.use(bodyParser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(logger());
session(app);
app.use(require('koa-static')(__dirname + '/public'));

// logger
app.use(async (ctx, next) => {
  const start: number = new Date().getTime();
  await next();
  const ms: number = new Date().getTime() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
})

// routes
app.use(routes);
// error-handling
app.on('error', (err: any, ctx: Koa.Context) => {
  console.error('server error', err, ctx)
});

module.exports = app;
