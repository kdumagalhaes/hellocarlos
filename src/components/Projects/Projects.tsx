import { SectionTitle } from '../SectionTitle/SectionTitle'
import { Container, ProjectsGrid } from './styles'

// components
import { Card, CardProps } from './Card/Card'

const projects: CardProps[] = [
  {
    description: 'A Coffee ecommerce with a functional checkout',
    language: 'React TS',
    thumbnail: 'coffeedelivery',
    title: 'Coffee Delivery Ecommerce',
    url: 'https://coffee-delivery-ecommerce.vercel.app/',
    repository: 'https://github.com/kdumagalhaes/coffee-delivery-ecommerce',
  },
  {
    description: 'A To do application made with React + TypeScript and Vite.',
    language: 'React TS',
    thumbnail: 'todo',
    title: 'ToDo',
    url: 'https://to-do-react-coral.vercel.app/',
    repository: 'https://github.com/kdumagalhaes/to-do-react',
  },
  {
    description:
      "The OneBitHealth app calculates your IMC! It was made based on One Bit Code's RN beginner course!",
    language: 'React Native',
    thumbnail: 'onebithealth',
    title: 'OneBitHealth',
    url: '#',
    repository: 'https://github.com/kdumagalhaes/onebithealth',
  },
  {
    description:
      "A Time Tracking Dashboard created with React, TypeScript, Redux and ViteJS based on a Frontendmentor's challenge!",
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
      <SectionTitle text="Projects" />
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
