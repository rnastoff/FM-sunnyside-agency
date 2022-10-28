
import styles from './SquareButton.module.css';

interface Props {
  buttonColor: string;
}

const SquareButton = (props: Props) => {

  let buttonColor = props.buttonColor === "yellow" ? styles.buttonYellow : styles.buttonPink;

  return (
    <div className={styles.buttonGroup}>
      <button>LEARN MORE</button>
      <div className={`${styles.buttonUnderline} ${buttonColor}`}></div>
    </div>
  )
}

export default SquareButton;