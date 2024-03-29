import styles from './ProjectButtons.module.scss'
interface ProjectButtonsProps {
  live: string
  repository: string
}
const ProjectButtons = ({ live, repository }: ProjectButtonsProps) => {
  return (
    <div className={styles['buttons-container']}>
      <a href={live} target="_blank" rel="noreferrer">
        Live
      </a>
      <a href={repository} target="_blank" rel="noreferrer">
        Repo
      </a>
    </div>
  )
}

export default ProjectButtons
