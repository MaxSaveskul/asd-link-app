import styled, { createGlobalStyle } from 'styled-components'

import './App.css';
import Background from './components/Background/Background';
import AppRoutes from './routes/AppRoutes'

const GlobalStyle = createGlobalStyle`
body {
	margin: 0;
	padding: 0;
}
`

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Background />
			<AppRoutes />
		</div>
	);
}

export default App;
