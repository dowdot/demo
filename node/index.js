const Koa = require('koa')
const app = new Koa()

app.use((ctx, next) => {
  ctx.body = '123'
})

app.listen(80)
