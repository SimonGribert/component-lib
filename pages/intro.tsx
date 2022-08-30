import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Intro.module.css";
import { motion } from "framer-motion";

const imageContainer = {
  show: (nr: number) => ({
    y: "0%",
    zIndex: 300 / nr,
    height: `${100 + (nr - 1) * 10}%`,
  }),
  slide: (nr: number) => ({
    y: "-100%",
    transition: {
      duration: 1,
      delay: 1 * nr + 0.1 * (nr - 1),
      ease: [0.77, 0, 0.175, 1],
    },
  }),
};

const Intro: NextPage = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.images}
        initial={{ y: "0%" }}
        animate={{
          y: "-20%",
          transition: {
            duration: 2.2,
            delay: 1,
          },
        }}
      >
        <motion.div
          custom={1}
          initial="show"
          animate="slide"
          variants={imageContainer}
          className={styles.imageContainer}
        >
          <Image
            className={styles.image}
            src="/img1.jpeg"
            alt=""
            layout="fill"
          />
        </motion.div>
        <motion.div
          custom={2}
          initial="show"
          animate="slide"
          variants={imageContainer}
          className={styles.imageContainer}
        >
          <Image
            className={styles.image}
            src="/img2.jpeg"
            alt=""
            layout="fill"
          />
        </motion.div>
        <motion.div
          custom={3}
          initial="show"
          animate="slide"
          variants={imageContainer}
          className={styles.imageContainer}
        >
          <Image
            className={styles.image}
            src="/img3.jpeg"
            alt=""
            layout="fill"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Intro;
