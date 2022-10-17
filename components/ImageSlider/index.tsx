import styles from "./ImageSlider.module.css";
import Slide from "./Slide";

const ImageSlider = (): JSX.Element => {
  return (
    <div className={styles.images}>
      <Slide nr={1} imageSrc="/img1.jpeg" />
      <Slide nr={2} imageSrc="/img2.jpeg" />
      <Slide nr={3} imageSrc="/img3.jpeg" />
    </div>
  );
};

export default ImageSlider;
