import GitHubProjectThumb from '../images/thumbnails/github-blog.webp'
import EcommerceProjectThumb from '../images/thumbnails/ecommerce.webp'
import AddressFinderProjectThumb from '../images/thumbnails/address-finder.webp'
import InteractivePricingThumb from '../images/thumbnails/interactive-pricing.webp'
import LinkShortenerThumb from '../images/thumbnails/link-shortener.webp'
import MultiStepForThumb from '../images/thumbnails/multi-step-form.webp'
import ProjectIDs from '../constants/ProjectsIDs'

const getThumbnail = (projectId: string) => {
  switch (projectId) {
    case ProjectIDs.GitHubProjectID:
      return GitHubProjectThumb
    case ProjectIDs.EcommerceProjectID:
      return EcommerceProjectThumb
    case ProjectIDs.AddressFinderProjectID:
      return AddressFinderProjectThumb
    case ProjectIDs.InteractivePricingID:
      return InteractivePricingThumb
    case ProjectIDs.LinkShortenerID:
      return LinkShortenerThumb
    case ProjectIDs.MultiStepFormID:
      return MultiStepForThumb
    default:
      break
  }
}

export default getThumbnail
