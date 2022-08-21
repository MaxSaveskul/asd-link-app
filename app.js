const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require("cors");

const postLink = require('./routes/postLink');
const getLongLink = require('./routes/getLongLink');
const getRedirect = require('./routes/getRedirect');

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));

app.use('/link', postLink);
app.use('/longlink', getLongLink);
app.use('/g', getRedirect);



const PORT = config.get('port') || 5000;

async function start() {
	try {
		await mongoose.connect(config.get('mongoUri'), {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));

	} catch (e) {
		console.log('Server Error', e.message);
		process.exit(1);
	}
}

start();