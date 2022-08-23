import React from 'react';
import { useState } from "react";
import { usePostHttp } from "../../hooks/useHttpHooks";
import { Container, Title, Span, Input, ResultButton } from "./MainPage.styles";
import Button from "../../components/Button/Button";
import wavingHand from '../../assets/waving-hand.png';


const MainPage = () => {

	const [value, setValue] = useState('');
	const [readyLink, setReadyLink] = useState('');


	let http = usePostHttp(value);

	const sumbitFormHandler = (e) => {
		e.preventDefault();

		setReadyLink(http);
		setValue('');
	};


	const inputChangeHandler = (e) => {
		setValue(e.target.value);

	};

	const copy = (text) => {
		navigator.clipboard.writeText(text);
	};

	return (
		<Container>
			<Title>Get the <Span>short</Span> link as you go <img src={wavingHand} alt="Waving hand emoji" height="31px" /></Title>
			<form onSubmit={sumbitFormHandler}>
				<Input
					type="url"
					placeholder="http://type-your-link.here ..."
					value={value}
					onChange={inputChangeHandler}
				/>
				<br />
				<Button text="Short me!" />
			</form>
			{readyLink ? <ResultButton onClick={() => copy(readyLink)}>{readyLink}</ResultButton> : null}
		</Container>
	);
};

export default MainPage;