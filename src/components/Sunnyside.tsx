import styles from './Sunnyside.module.css';

import WeAreCreative from './WeAreCreative';
import Squares from './Squares';
import Testimonials from './Testimonials';
import ImageGroup from './ImageGroup';
import Footer from './Footer';



const Sunnyside = () => {
  return (
    <main className={styles.main}>
      <WeAreCreative />
      <Squares />
      <Testimonials />
      <ImageGroup />
      <Footer />
    </main>
  )
}

export default Sunnyside;