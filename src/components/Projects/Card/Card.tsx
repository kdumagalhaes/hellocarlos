import { Container } from './styles'

// assets
import { FaGithub } from 'react-icons/fa'
import CardForm from '../../../assets/thumbnails/card-form.webp'
import CoffeeDelivery from '../../../assets/thumbnails/coffee-delivery-screen.webp'
import PokeList from '../../../assets/thumbnails/pokelist.webp'
import GitHubBlog from '../../../assets/thumbnails/github-blog.webp'

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
  let image = ''

  switch (thumbnail) {
    case 'coffeedelivery':
      image = CoffeeDelivery
      break
    case 'card-form':
      image = CardForm
      break
    case 'pokelist':
      image = PokeList
      break
    case 'github-blog':
      image = GitHubBlog
      break
    default:
      break
  }

  return (
    <Container>
      <img src={image} alt={title} className="thumbnail" />
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
