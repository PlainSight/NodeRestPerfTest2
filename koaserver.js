global.Promise = require('bluebird');
var koa = require('koa');
var app = koa();

app.use(function *(){
	this.set('Connection', 'close');
  this.body = 'Hello World!';
});

app.listen(8000);
