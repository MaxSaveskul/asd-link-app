import { useState } from "react";
import { Container, Title, Span, Input, Button, ResultDiv } from "./ValidatePage.styles";

const ValidatePage = () => {

	const [value, setValue] = useState('');
	const [readyLink, setReadyLink] = useState('http://super-long-link.com');

	const sumbitFormHandler = (e) => {
		e.preventDefault();
	}

	const inputChangeHandler = (e) => {
		setValue(e.target.value);
	}

	const copy = (text) => {
		navigator.clipboard.writeText(text)
	}

	return (
		<Container>
			<Title>Find out where's your <Span>short</Span> link goes 👋</Title>
			<form onSubmit={sumbitFormHandler}>
				<Input type="text" placeholder="asd.link/21asdh1..." value={value} onChange={inputChangeHandler} />
				<br />
				<Button type="submit">Validate me!</Button>
			</form>
			<ResultDiv onClick={() => copy(readyLink)}>{readyLink}</ResultDiv>
		</Container>
	)
}

export default ValidatePage;