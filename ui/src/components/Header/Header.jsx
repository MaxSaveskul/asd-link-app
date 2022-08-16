import { Logo, LineImg, FlexContainer, StyledUl, ValidateLink, DocsLink } from './Header.styles'
import lineLogo from '../../assets/line-logo.svg'

const Header = () => {
	return (
		<FlexContainer>
			<div>
				<LineImg src={lineLogo} />
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