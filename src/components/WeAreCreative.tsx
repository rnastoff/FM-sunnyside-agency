
import styles from './WeAreCreative.module.css';

import Nav from './Nav';

import arrowDown from '../images/icon-arrow-down.svg';

const WeAreCreative = () => {
  return (
    <div className={styles.weAreCreative}>
      <Nav />
      <h1>WE ARE CREATIVES</h1>
      <img src={arrowDown} alt="arrow" className={styles.arrowDown} />
    </div>
  )
}

export default WeAreCreative;