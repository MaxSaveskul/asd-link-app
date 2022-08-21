import styled from 'styled-components';

export const StyledButton = styled.button`
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
`;