import styled from 'styled-components';
import { Link } from "react-router-dom";

export const LineImg = styled.img`
	position: absolute;
	left: 17px;
	top: 29.54px;
	z-index: -1;
`;

export const Logo = styled(Link)`
	cursor: pointer;
	text-decoration: none;
	position: relative;
	left: 21.6px;
	top: 27.06px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	color: #000000;
`;

export const FlexContainer = styled.header`
	display: flex;
	justify-content: space-between;
`;

export const StyledUl = styled.ul`
	list-style-type: none;
	display: flex;
	position: relative;
	right: 18px;
	top: 18px;
`;

export const ValidateLink = styled(Link)`
	cursor: pointer;
	text-decoration: none;
	width: 91px;
	height: 19px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	color: #515151;
	margin-right: 30px;

	&:hover {
		text-decoration: none;
		cursor: pointer;
		opacity: 0.85;
		}
`;

export const DocsLink = styled(Link)`
	cursor: pointer;
	text-decoration: none;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	color: #101010;
	padding: 16px 32px;
	background: #F0B80D;
	border: 1px solid #FFD24B;
	box-shadow: 0px 10px 34px #EAC555;
	border-radius: 40px;

	&:hover {
		text-decoration: none;
		cursor: pointer;
		opacity: 0.85;
		}
`;