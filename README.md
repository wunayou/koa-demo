# koa-demo

 koa 运行过程
 - 运行this.callback 返回 handleRequest
 - const server = http.createServer(handleRequest(req,res));
    return server.listen(...args);
 - handleRequest(req,res) 返回 this.handleRequest(ctx, fnMiddleware)
 - this.handleRequest(ctx, fnMiddleware) {
 -fnMiddleware
