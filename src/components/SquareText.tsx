
import styles from './SquareText.module.css';

import SquareButton from './SquareButton';

interface Props {
  title: string;
  paragraph: string;
  buttonColor: string;
  square: string;
}

const SquareText = (props: Props) => {

  let mobileOrder = props.square === "transform" ? styles.squareTransform : styles.squareStandOut;

  return (
    <div className={`${styles.square} ${mobileOrder}`}>
      <div className={styles.textGroup}>
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>
        <SquareButton buttonColor={props.buttonColor} />
      </div>
    </div>
  )
}

export default SquareText;