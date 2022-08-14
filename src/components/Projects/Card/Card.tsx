import { Container } from './styles'

// assets
import { FaGithub } from 'react-icons/fa'

export interface CardProps {
  title: string
  description: string
  url: string
  language: string
  thumbnail: string
  repository: string
}

export function Card({
  description,
  language,
  thumbnail,
  title,
  url,
  repository,
}: CardProps) {
  return (
    <Container>
      <img src={thumbnail} alt={title} className="thumbnail" />
      <div className="wrapper">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
        <div className="links-language">
          <a href={url} className="url" target="_blank" rel="noreferrer">
            Demo
          </a>
          <div className="techs">
            <p className="language">{language}</p>
            <a
              href={repository}
              className="repository"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={32} color="#EFE9F4" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}