const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
    ctx.body = 'hello world';
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})