import { Logo, Line, FlexContainer, StyledUl, ValidateLink, DocsLink } from './Header.styles'

const Header = () => {
	return (
		<FlexContainer>
			<div>
				<Line />
				<Logo to="/">asd.link®</Logo>
			</div>
			<nav>
				<StyledUl>
					<li><ValidateLink to="/validate-link">Validate link</ValidateLink></li>
					<li><DocsLink to="/docs">docs</DocsLink></li>
				</StyledUl>
			</nav>
		</FlexContainer>
	)
}

export default Header;