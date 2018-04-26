const Koa = require('./Application')
const app = new Koa()
app.use((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
})
app.listen(8002)