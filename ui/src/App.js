import React from 'react';
import { createGlobalStyle } from 'styled-components';

import AppRoutes from './routes/AppRoutes';
import backgroundImg from './assets/background.svg';

const GlobalStyle = createGlobalStyle`
h1 {
	margin: 0;
	padding: 0;
}

body {
	margin: 0;
	padding: 0;
	background-color: #F5F5F5;
	background-image: url(${backgroundImg});
	background-repeat: no-repeat;
	background-position: center center;
	background-attachment: fixed;
	background-size: cover;
}
`;

function App() {
	return (
		<div>
			<GlobalStyle />
			<AppRoutes />
		</div>
	);
}

export default App;
