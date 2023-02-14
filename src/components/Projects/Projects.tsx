import { SectionTitle } from '../SectionTitle/SectionTitle'
import { Container, ProjectsGrid } from './styles'

// components
import { Card, CardProps } from './Card/Card'
import { useTranslation } from 'react-i18next'

const projects: CardProps[] = [
  {
    description: 'projects.cards.cardDescription1',
    language: 'React TS',
    thumbnail: 'coffeedelivery',
    title: 'Coffee Delivery Ecommerce',
    url: 'https://coffee-delivery-ecommerce.vercel.app/',
    repository: 'https://github.com/kdumagalhaes/coffee-delivery-ecommerce',
  },
  {
    description: 'projects.cards.cardDescription2',
    language: 'React TS',
    thumbnail: 'github-blog',
    title: 'GitHub Blog',
    url: 'https://github-blog-self.vercel.app/',
    repository: 'https://github.com/kdumagalhaes/github-blog',
  },
  {
    description: 'projects.cards.cardDescription3',
    language: 'React TS',
    thumbnail: 'card-form',
    title: 'Interactive Credit Card Form',
    url: 'https://interactive-card-details-form-liard.vercel.app/',
    repository: 'https://github.com/kdumagalhaes/interactive-card-details-form',
  },
  {
    description: 'projects.cards.cardDescription4',
    language: 'React TS',
    thumbnail: 'timetracking',
    title: 'Time Tracking Dashboard',
    url: 'https://time-tracking-dashboard-react-ochre.vercel.app/',
    repository: 'https://github.com/kdumagalhaes/time-tracking-dashboard-react',
  },
]

export function Projects() {
  const { t } = useTranslation()

  return (
    <Container id="projects">
      <SectionTitle text="projects.title" />
      <ProjectsGrid>
        {projects.map((project) => {
          return (
            <Card
              key={project.title}
              title={project.title}
              description={t(project.description)}
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
