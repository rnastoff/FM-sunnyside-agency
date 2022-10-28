
import styles from './ImageGroup.module.css';

import milkBottlesDesktop from '../images/desktop/image-gallery-milkbottles.jpg';
import milkBottlesMobile from '../images/mobile/image-gallery-milkbottles.jpg';
import orangeDesktop from '../images/desktop/image-gallery-orange.jpg';
import orangeMobile from '../images/mobile/image-gallery-orange.jpg';
import coneDesktop from '../images/desktop/image-gallery-cone.jpg';
import coneMobile from '../images/mobile/image-gallery-cone.jpg';
import sugarCubesDesktop from '../images/desktop/image-gallery-sugarcubes.jpg';
import sugarCubesMobile from '../images/mobile/image-gallery-sugarcubes.jpg';


const ImageGroup = () => {
  return (
    <div className={styles.imageGroup}>
      <div className={`${styles.pic} ${styles.picMilk}`}></div>
      <div className={`${styles.pic} ${styles.picOrange}`}></div>
      <div className={`${styles.pic} ${styles.picCone}`}></div>
      <div className={`${styles.pic} ${styles.picSugar}`}></div>
    </div>
  )
}

export default ImageGroup;