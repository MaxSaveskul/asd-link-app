/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, Code } from './DocsPage.styles';

const DocsPage = () => (
	<Container>
		<h1>API</h1>
		<p>POST http://localhost:5000/link/short-url</p>
		<p>GET http://localhost:5000/longlink/:code</p>
		<h2>POST</h2>
		<p>axios.post("http://localhost:5000/link/short-url", &#123; longUrl: link &#125;)</p>
		<h5>Response:</h5>
		<Code>&#123;
			"codeUrl": "TtkY1ur8u",
			"longUrl": "https://www.linkedin.com/in/maxsaveskul/",
			"shortUrl": "http://localhost:5000/g/TtkY1ur8u",
			"_id": "63025648025149739e0782ff",
			"__v": 0
			&#125;</Code>
		<h2>GET</h2>
		<p>axios.get(http://localhost:5000/longlink/:code)</p>
		<h5>Response:</h5>
		<Code>
			"https://www.linkedin.com/in/maxsaveskul/"
		</Code>
	</Container>

);

export default DocsPage;