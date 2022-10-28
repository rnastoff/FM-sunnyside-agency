
import styles from './SquareTextAndImage.module.css';

interface Props {
  imageDesktop: string;
  imageMobile: string;
  alt: string;
  title: string;
  paragraph: string;
  color: string;
  square: string;
}

const SquareTextAndImage = (props: Props) => {

  let mobileOrder = props.square === "graphicDesign" ? styles.squareGraphicDesign : styles.squarePhotography;

  return (
    <div className={`${styles.square} ${mobileOrder}`}>
      <picture >
        <source media="(max-width: 1100px)" srcSet={props.imageMobile} />
        <img src={props.imageDesktop} alt={props.alt} className={styles.picture} />
      </picture>

      <div className={styles.textGroup}>
        <h3 style={{ color: props.color }} className={styles.title}>{props.title}</h3>
        <div className={styles.smallerText}>{props.paragraph}</div>
      </div>
    </div>
  )
}

export default SquareTextAndImage;