import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
.gradient1 {
position: absolute;
width: 354.41px;
height: 193.97px;
left: 1051.59px;
top: 601.87px;

background: radial-gradient(50% 50% at 50% 50%, #B9CEEA 0%, rgba(246, 251, 248, 0) 100%);
transform: matrix(1, 0, 0, -1, 0, 0);
}
.gradient2 {
	position: absolute;
width: 354.41px;
height: 193.97px;
left: 534.5px;
top: 566.07px;

background: radial-gradient(50% 50% at 50% 50%, #FFDF7C 0%, rgba(246, 251, 248, 0) 100%);
transform: matrix(1, 0, 0, -1, 0, 0);
}
.gradient3 {
	position: absolute;
width: 354.41px;
height: 193.97px;
left: 972.77px;
top: 681.72px;

background: radial-gradient(50% 50% at 50% 50%, #FFDF7C 0%, rgba(246, 251, 248, 0) 100%);
transform: matrix(1, 0, 0, -1, 0, 0);
}
.gradient4 {
	position: absolute;
width: 354.41px;
height: 193.97px;
left: 912.95px;
top: 642.56px;

background: radial-gradient(50% 50% at 50% 50%, #FAB7B8 0%, rgba(246, 251, 248, 0) 100%);
transform: matrix(1, 0, 0, -1, 0, 0);
}
.gradient5 {
	position: absolute;
width: 354.41px;
height: 193.97px;
left: 769.29px;
top: 727px;

background: radial-gradient(50% 50% at 50% 50%, #B9CEEA 0%, rgba(246, 251, 248, 0) 100%);
opacity: 0.7;
transform: matrix(1, 0, 0, -1, 0, 0);
}
.gradient6 {
	position: absolute;
width: 354.41px;
height: 193.97px;
left: 952.08px;
top: 245.13px;

background: radial-gradient(50% 50% at 50% 50%, #B9CEEA 0%, rgba(246, 251, 248, 0) 100%);
}
.gradient7 {
	position: absolute;
width: 354.41px;
height: 193.97px;
left: 435px;
top: 280.93px;

background: radial-gradient(50% 50% at 50% 50%, #FFDF7C 0%, rgba(246, 251, 248, 0) 100%);
}
.gradient8 {
	position: absolute;
width: 354.41px;
height: 193.97px;
left: 873.26px;
top: 165.28px;

background: radial-gradient(50% 50% at 50% 50%, #FFDF7C 0%, rgba(246, 251, 248, 0) 100%);
}
.gradient9 {
	position: absolute;
width: 354.41px;
height: 193.97px;
left: 813.45px;
top: 204.44px;

background: radial-gradient(50% 50% at 50% 50%, #FAB7B8 0%, rgba(246, 251, 248, 0) 100%);
}
.gradient10 {
	position: absolute;
width: 354.41px;
height: 193.97px;
left: 669.78px;
top: 120px;

background: radial-gradient(50% 50% at 50% 50%, #B9CEEA 0%, rgba(246, 251, 248, 0) 100%);
opacity: 0.7;
}
`

const Background = () => {
	return (
		<div>
			<GlobalStyle />
			<div className='gradient1'></div>
			<div className='gradient2'></div>
			<div className='gradient3'></div>
			<div className='gradient4'></div>
			<div className='gradient5'></div>
			<div className='gradient6'></div>
			<div className='gradient7'></div>
			<div className='gradient8'></div>
			<div className='gradient9'></div>
			<div className='gradient10'></div>
		</div>
	)
}

export default Background;