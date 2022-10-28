
import styles from './Testimonial.module.css'

interface Props {
  image: string;
  text: string;
  name: string;
  position: string;
}

const Testimonial = (props: Props) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.testImage}>
        <img src={props.image} alt="" />
      </div>

      <div className={styles.testText}>{props.text}</div>
      <div className={styles.testName}>{props.name}</div>
      <div className={styles.testPosition}>{props.position}</div>
    </div>
  )
}

export default Testimonial;