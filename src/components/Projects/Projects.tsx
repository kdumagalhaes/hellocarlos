import { SectionTitle } from '../SectionTitle/SectionTitle'
import { Container, ProjectsGrid } from './styles'

// components
import { Card, CardProps } from './Card/Card'

const projects: CardProps[] = [
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptas eos fuga doloribus aspernatur rerum sunt dolores ipsum quis vitae dicta blanditiis corrupti excepturi dolorem quos, minima possimus quasi!',
    language: 'React TS',
    thumbnail: 'src/assets/thumbnails/todo-thumb.webp',
    title: 'Test project',
    url: '#',
    repository: '#',
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptas eos fuga doloribus aspernatur rerum sunt dolores ipsum quis vitae dicta blanditiis corrupti excepturi dolorem quos, minima possimus quasi!',
    language: 'React TS',
    thumbnail: 'src/assets/thumbnails/todo-thumb.webp',
    title: 'Test project',
    url: '#',
    repository: '#',
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptas eos fuga doloribus aspernatur rerum sunt dolores ipsum quis vitae dicta blanditiis corrupti excepturi dolorem quos, minima possimus quasi!',
    language: 'React TS',
    thumbnail: 'src/assets/thumbnails/todo-thumb.webp',
    title: 'Test project',
    url: '#',
    repository: '#',
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptas eos fuga doloribus aspernatur rerum sunt dolores ipsum quis vitae dicta blanditiis corrupti excepturi dolorem quos, minima possimus quasi!',
    language: 'React TS',
    thumbnail: 'src/assets/thumbnails/todo-thumb.webp',
    title: 'Test project',
    url: '#',
    repository: '#',
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
              url={project.url}
              repository={project.repository}
            />
          )
        })}
      </ProjectsGrid>
    </Container>
  )
}
