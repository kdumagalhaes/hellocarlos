import GitHubProjectThumb from '../images/thumbnails/github-blog.webp'
import EcommerceProjectThumb from '../images/thumbnails/ecommerce.webp'
import AddressFinderProjectThumb from '../images/thumbnails/address-finder.webp'

const getThumbnail = (projectId: string) => {
  switch (projectId) {
    case '1234':
      return GitHubProjectThumb
      break
    case '123456':
      return EcommerceProjectThumb
      break
    case '12345':
      return AddressFinderProjectThumb
      break
    default:
      break
  }
}

export default getThumbnail
