const { Router } = require('express');
const UrlModel = require('../models/UrlModel');
const shortId = require('shortid');
const validUrl = require('valid-url');

const router = new Router();

const baseUrl = "http://localhost:5000/g/";

router.post('/short-url', async (req, res) => {

	const { longUrl } = req.body;

	if (!validUrl.isUri(baseUrl)) {
		return res.status(401).json('Invalid base URL');
	}

	const codeUrl = shortId.generate();

	if (validUrl.isUri(longUrl)) {
		try {
			let url = await UrlModel.findOne({
				longUrl
			})

			if (url) {
				return res.json(url);
			}

			const shortUrl = baseUrl + codeUrl;

			url = new UrlModel({
				codeUrl,
				longUrl,
				shortUrl: shortUrl
			})

			await url.save();
			res.json(url);

		} catch (e) {
			res.status(500).json('Server Error');
			console.log('Error: ', e.message);
		}
	}
});

module.exports = router;