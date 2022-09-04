import { SectionTitle } from '../SectionTitle/SectionTitle'
import { Container, Bio } from './styles'

// assets
import ProfilePicture from '../../assets/images/profile-pic.webp'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export function AboutMe() {
  return (
    <Container id="about-me">
      <SectionTitle text="Sobre Mim" />
      <Bio>
        <img
          className="profile-pic"
          src={ProfilePicture}
          alt="carlos pereira's picture"
        />
        <div className="wrapper">
          <p className="paragraph">
            Como Product Support Engineer, sou responsável pela análise, solução
            de problemas e condução da resolução de problemas do produto
            enquanto me engajo com todos os níveis da Organização de Suporte,
            Produto (Gerentes de Produto), Desenvolvimento (Gerentes,
            Engenheiros de Software), equipes de operações, como uma camada de
            suporte interna do produto.
          </p>
          <p className="paragraph">
            Anteriormente, era responsável pela gestão da equipe de Analistas de
            Suporte da área de Produto de Lojas Físicas. Como líder, meu papel
            era garantir o bem-estar e proporcionar o melhor ambiente para a
            equipe trabalhar com alto desempenho e engajamento. Além disso,
            também conduzia o planejamento de ações com base em nossas demandas
            e metas.
          </p>
          <p className="paragraph">
            Atualmente sou um Product Support Engineer pleno trabalhando nas
            soluções VTEX IO, VTEX Store Framework, VTEX CMS e infraestrutura
            (SRE), o que me permitiu estar diretamente relacionado com a visão e
            o futuro de nossos principais produtos , além de estar em contato
            direto com ferramentas Front-end.
          </p>
          <div className="resume-social">
            <a
              className="link"
              href="https://drive.google.com/file/d/1TP5-ap0kg_rmWGaplx6linlmZjZZ_1Ef/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Currículo
            </a>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/kdumagalhaes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={38} color="#EFE9F4" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kdumagalhaes"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={38} color="#EFE9F4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Bio>
    </Container>
  )
}
