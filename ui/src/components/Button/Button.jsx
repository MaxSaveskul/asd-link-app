import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from "./Button.styles";

const Button = ({ text }) => {
	return (
		<StyledButton type="submit">{text}</StyledButton>
	);

};

Button.propTypes = {
	text: PropTypes.string
};

export default Button;