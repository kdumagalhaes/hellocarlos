import { SectionTitle } from '../SectionTitle/SectionTitle'
import { Container, ProjectsGrid } from './styles'

// components
import { Card, CardProps } from './Card/Card'

const projects: CardProps[] = [
  {
    description:
      'Um ecommerce de café com checkout funcional ainda em desenvolvimento para treinar conceitos como criação de rotas e Context API.',
    language: 'React TS',
    thumbnail: 'coffeedelivery',
    title: 'Coffee Delivery Ecommerce',
    url: 'https://coffee-delivery-ecommerce.vercel.app/',
    repository: 'https://github.com/kdumagalhaes/coffee-delivery-ecommerce',
  },
  {
    description:
      'Um dashboard utilizando conceitos de grid display com troca de tema controlada pelo usuário.',
    language: 'React JS',
    thumbnail: 'dashboard',
    title: 'Social Media Dashboard',
    url: 'https://social-media-dashboard-red.vercel.app/',
    repository:
      'https://github.com/kdumagalhaes/social-media-dashboard-reactjs',
  },
  {
    description:
      'Um encurtador de URL em VUE Js, utilizando VueX para contexto e a API do Bit.ly.',
    language: 'Vue',
    thumbnail: 'encurtador',
    title: 'Encurtador de URL',
    url: 'https://link-shortener-vue.vercel.app/',
    repository: 'https://github.com/kdumagalhaes/link-shortener-vue',
  },
  {
    description:
      'Um dashboard de acompanhamento de tempo criado usando React, TypeScript, Redux e ViteJS baseado em um desafio do Frontendmentor.',
    language: 'React TS',
    thumbnail: 'timetracking',
    title: 'Time Tracking Dashboard',
    url: 'https://time-tracking-dashboard-react-ochre.vercel.app/',
    repository: 'https://github.com/kdumagalhaes/time-tracking-dashboard-react',
  },
]

export function Projects() {
  return (
    <Container id="projects">
      <SectionTitle text="Projetos" />
      <ProjectsGrid>
        {projects.map((project) => {
          return (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              language={project.language}
              thumbnail={project.thumbnail}
              url={`${project.url}`}
              repository={project.repository}
            />
          )
        })}
      </ProjectsGrid>
    </Container>
  )
}
