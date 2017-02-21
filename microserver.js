const { send } = require('micro');

module.exports = function (request, response) {
  response.setHeader('Connection', 'close');
  send(response, 200, 'Hello World!');
};