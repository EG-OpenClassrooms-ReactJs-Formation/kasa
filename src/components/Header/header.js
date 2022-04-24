import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logo from '../../assets/light_logo.png'
const StyledLink = styled(Link)`
  padding: 15px;
  color: ${colors.primary};
  text-decoration: none;
  font-size: 24px;
  &:hover {
    text-decoration: underline;
  }
`

const CardLogo = styled.img`
    height: 68px;
`

const HeaderWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
`
function Header() {
    
    return (
      <HeaderWrapper>
        <Link to={"/kasa"}>
            <CardLogo src={logo} alt="light_logo"/>
        </Link>
        <nav>
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/about">A propos</StyledLink>
        </nav>
      </HeaderWrapper>
    )
}

export default Header