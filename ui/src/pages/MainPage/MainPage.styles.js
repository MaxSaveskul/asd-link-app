import styled from 'styled-components';

export const Container = styled.div`
	width: 490px;
	margin: 0 auto; 
	margin-top: 120px;
	text-align: center;
	
`

export const Title = styled.h1`
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	line-height: 39px;
	color: #000000;
	margin-bottom: 31px;
`

export const Span = styled.span`
	color: rgba(83, 128, 234, 1);
`

export const Input = styled.input`
	box-sizing: border-box;
	padding: 16px;
	width: 420px;
	height: 51px;
	background: #F9FAFF;
	border: 1px solid #DEE6FF;
	border-radius: 5px;
	outline: none;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	margin-bottom: 36px;

	&::placeholder {
		color: #AAAAAA;
	}
`

export const Button = styled.button`
	cursor: pointer;

	padding: 16px 32px;

	width: 200px;
	height: 51px;

	background: #5380EA;
	border: 1px solid #5380EA;
	box-shadow: 0px 10px 34px rgba(83, 128, 234, 0.5);
	border-radius: 40px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	color: #FFFFFF;
	margin-bottom: 38px;

	&:hover {
	text-decoration: none;
	cursor: pointer;
	opacity: 0.85;
	}
`

export const ResultDiv = styled.button`
	border: 0;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 420px;
	height: 95px;
	background: #F6FBF8;
	box-shadow: 0px 24px 24px rgba(0, 0, 0, 0.08);
	backdrop-filter: blur(4px);
	border-radius: 10px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	color: #656565;
	margin-left: 35px;

	&:hover {
	text-decoration: none;
	cursor: pointer;
	opacity: 0.85;
	}
`