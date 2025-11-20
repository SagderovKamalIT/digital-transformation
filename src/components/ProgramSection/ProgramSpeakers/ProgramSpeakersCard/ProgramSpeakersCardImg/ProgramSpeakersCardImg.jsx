import styles from "./ProgramSpeakersCardImg.module.scss"

const ProgramSpeakersCardImg = ({ src, alt }) => {
  return (
    <img className={styles.speakers__img} src={src} alt={alt} />
  )
}

export default ProgramSpeakersCardImg;
