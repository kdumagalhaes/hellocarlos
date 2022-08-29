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
              <a href="#about-me">about me</a>
            </li>
            <li className="nav-item">
              <a href="#projects">projects</a>
            </li>
            <li className="nav-item">
              <a
                href="https://drive.google.com/file/d/1TP5-ap0kg_rmWGaplx6linlmZjZZ_1Ef/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                resume
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact">contact</a>
            </li>
          </ul>
        </NavMenu>
      </Header>
    </Container>
  )
}
