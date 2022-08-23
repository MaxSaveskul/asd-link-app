import React from 'react';
import { useState } from "react";
import { Container, Title, Span, Input, ResultButton } from "./ValidatePage.styles";
import { useGetHttp } from "../../hooks/useHttpHooks";
import wavingHand from '../../assets/waving-hand.png';
import Button from "../../components/Button/Button";

const ValidatePage = () => {

	const [value, setValue] = useState('');
	const [readyLink, setReadyLink] = useState('');


	let trimmedValue = value.replace("http://localhost:5000/g/", "");

	let http = useGetHttp(trimmedValue);

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
			<Title>
				Get the {" "}
				<Span>long</Span> {" "}
				link as you go
				{" "}<img src={wavingHand} alt="Waving hand emoji" height="31px" />
			</Title>
			<form onSubmit={sumbitFormHandler}>
				<Input
					type="url"
					placeholder="http://localhost:5000/g/yourlinkcode"
					value={value}
					onChange={inputChangeHandler} />
				<br />
				<Button text="Validate" />
			</form>
			{readyLink && <ResultButton onClick={() => copy(readyLink)}>{readyLink}</ResultButton>}
		</Container>
	);
};

export default ValidatePage;