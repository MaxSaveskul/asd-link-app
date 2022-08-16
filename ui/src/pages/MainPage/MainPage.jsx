import { useState } from "react";
import { Container, Title, Span, Input, Button, ResultDiv } from "./MainPage.styles";

const MainPage = () => {

	const [value, setValue] = useState('');
	const [readyLink, setReadyLink] = useState('asd.link/21asdh1');

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
			<Title>Get the <Span>short</Span> link as you go 👋</Title>
			<form onSubmit={sumbitFormHandler}>
				<Input
					type="text"
					placeholder="http://type-your-link.here ..."
					value={value}
					onChange={inputChangeHandler}
				/>
				<br />
				<Button type="submit">Short me!</Button>
			</form>
			<ResultDiv onClick={() => copy(readyLink)}>{readyLink}</ResultDiv>
		</Container>
	)
}

export default MainPage;