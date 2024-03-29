import styles from './ProjectDescription.module.scss'
interface ProjectDescriptionProps {
  name: string
  description: string
  techs: string[]
}
const ProjectDescription = ({
  description,
  techs,
  name,
}: ProjectDescriptionProps) => {
  return (
    <>
      <p className={styles.title}>{name}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles['techs-container']}>
        {techs.map((tech, index) => {
          return (
            <p className={styles.tech} key={index}>
              {tech}
            </p>
          )
        })}
      </div>
    </>
  )
}

export default ProjectDescription
