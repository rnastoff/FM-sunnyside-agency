import styles from './SquareImage.module.css';

interface Props {
  imageDesktop: string;
  imageMobile: string;
  alt: string;
  square: string;
}

const SquareImage = (props: Props) => {

  let mobileOrder = props.square === "imageTransform" ? styles.imageTransform : styles.imageStandOut;

  return (
    <div className={`${styles.square} ${mobileOrder}`}>
      <picture >
        <source media="(min-width: 1100px)" srcSet={props.imageMobile} />
        <img src={props.imageDesktop} alt={props.alt} className={styles.picture} />
      </picture>
    </div>
  )
}

export default SquareImage;