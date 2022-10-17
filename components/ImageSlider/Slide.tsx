import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { SlideProps } from "./imageSlider";
import styles from "./ImageSlider.module.css";

const imageContainer: Variants = {
  show: (nr: number) => ({
    y: `${nr === 1 ? 0 : 15}%`,
    zIndex: 300 / nr,
    // height: `${110 * nr}%`,
    height: `${100 + (nr - 1) * 15}%`,
  }),
  slide: (nr: number) => ({
    y: [nr === 1 ? "0%" : "15%", "0%", "-100%"],
    transition: {
      // 1: 0->3s, 2: 0->4.5, 3: 0->6s || Slides up after - 1: 1.5s, 2: 3s, 3: 4.5s
      duration: nr === 1 ? 1.5 : 3, // 1: 1.5s, 2: 3s 3: 3s
      times: [0, nr === 1 ? 0 : 0.5, 1],
      delay: nr === 3 ? 3 : 1.5, // 1: 1.5s, 2: 1.5s, 3: 3s
      ease: [0.77, 0, 0.175, 1],
    },
  }),
};

const Slide = ({ nr, imageSrc }: SlideProps): JSX.Element => {
  return (
    <motion.div
      custom={nr}
      initial="show"
      animate="slide"
      variants={imageContainer}
      className={styles.imageContainer}
    >
      <Image className={styles.image} src={imageSrc} alt="" layout="fill" />
    </motion.div>
  );
};

export default Slide;
