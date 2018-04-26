const http = require('http')
module.exports = class Application {
	constructor() {
		this.middleware = [];
	}
	listen(...args) {
		const server = http.createServer(this.callback())
		return server.listen(...args)
	}
	callback() {
		// const fn = compose(this.middleware)  //组合函数
		const fn2 = function(arr){
			return arr[0]
		}
		const fn = this.middleware[0]
		const handleRequest = (req, res) => {
			return fn(req, res);
		};
		return handleRequest;
	}
	use(fn) {
		this.middleware.push(fn);
		return this;
	}
	handleRequest(req, res,fnMiddleware) {
		return fnMiddleware(req,res)
	}
}