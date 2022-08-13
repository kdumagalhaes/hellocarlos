import { Container, Header, Logo, NavMenu } from './styles'

export function HeaderNav() {
  return (
    <Container>
      <Header>
        <Logo>
          cp<span className="logo-dot">.</span>
          <span className="seo-text">Carlos Pereira - Frontend developer</span>
        </Logo>
        <NavMenu>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#">about me</a>
            </li>
            <li className="nav-item">
              <a href="#">projects</a>
            </li>
            <li className="nav-item">
              <a href="#">resumé</a>
            </li>
            <li className="nav-item">
              <a href="#">contact</a>
            </li>
          </ul>
        </NavMenu>
      </Header>
    </Container>
  )
}
