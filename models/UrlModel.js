const { Schema, model } = require('mongoose');

const UrlModel = new Schema({
	codeUrl: {
		type: String
	},
	longUrl: {
		type: String
	},
	shortUrl: {
		type: String
	}
});

module.exports = model('UrlModel', UrlModel);