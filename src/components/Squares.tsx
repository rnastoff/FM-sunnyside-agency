import styles from './Squares.module.css'

import SquareText from './SquareText';
import SquareImage from './SquareImage';
import SquareTextAndImage from './SquareTextAndImage';

import imageTransformDesktop from '../images/desktop/image-transform.jpg';
import imageTransformMobile from '../images/mobile/image-transform.jpg';
import imageStandOutDesktop from '../images/desktop/image-stand-out.jpg';
import imageStandOutMobile from '../images/mobile/image-stand-out.jpg';
import imageGraphicDesignDesktop from '../images/desktop/image-graphic-design.jpg';
import imageGraphicDesignMobile from '../images/mobile/image-graphic-design.jpg';
import imagePhotographyDesktop from '../images/desktop/image-photography.jpg';
import imagePhotographyMobile from '../images/mobile/image-photography.jpg';



const Squares = () => {
  return (
    <div className={styles.squares}>
      <SquareText
        title={"Transform your brand"}
        paragraph={"We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."}
        buttonColor={"yellow"}
        square={"transform"}
      />
      <SquareImage
        imageDesktop={imageTransformDesktop}
        imageMobile={imageTransformMobile}
        alt={"Transform"}
        square={"imageTransform"}
      />
      <SquareImage
        imageDesktop={imageStandOutDesktop}
        imageMobile={imageStandOutMobile}
        alt={"Stand Out"}
        square={"imageStandout"}
      />
      <SquareText
        title={"Stand out to the right audience"}
        paragraph={"Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital plcaes."}
        buttonColor={"pink"}
        square={"standOut"}
      />
      <SquareTextAndImage
        imageDesktop={imageGraphicDesignDesktop}
        imageMobile={imageGraphicDesignMobile}
        alt={"Graphic Design"}
        title={"Graphic Design"}
        paragraph={"Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."}
        color={"#25544a"}
        square={"graphicDesign"}
      />
      <SquareTextAndImage
        imageDesktop={imagePhotographyDesktop}
        imageMobile={imagePhotographyMobile}
        alt={"Photography"}
        title={"Photography"}
        paragraph={"Increase your credibility by getting the most stunning, high-quality photos that improve your business image."}
        color={"#1e526a"}
        square={"photography"}
      />
    </div>
  )
}

export default Squares;