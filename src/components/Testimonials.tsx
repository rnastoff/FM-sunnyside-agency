
import styles from './Testimonials.module.css';

import Testimonial from './Testimonial';

import emily from '../images/image-emily.jpg';
import thomas from '../images/image-thomas.jpg';
import jennie from '../images/image-jennie.jpg';

const Testimonials = () => {
  return (
    <div className={styles.testimonialsGroup}>
      <div className={styles.testimonialsText}>CLIENT TESTIMONIALS</div>
      <div className={styles.testimonials}>
        <Testimonial
          image={emily}
          text={"We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."}
          name={"Emily R."}
          position={"Marketing Director"}
        />
        <Testimonial
          image={thomas}
          text={"Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."}
          name={"Thomas S."}
          position={"Chief Operating Officer"}
        />
        <Testimonial
          image={jennie}
          text={"Incredibly end result! Our sales increased over 400% when we worked with Sunnyside. Highly Recommended!"}
          name={"Jennie F."}
          position={"Business Owner"}
        />
      </div>
    </div>
  )
}

export default Testimonials;