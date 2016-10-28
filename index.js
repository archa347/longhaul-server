var Server = require('./lib/server')

module.exports = function(config) {
	return new Server(config)
}
