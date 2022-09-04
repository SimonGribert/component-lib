import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Intro.module.css";
import {
  AnimationControls,
  motion,
  useAnimation,
  Variants,
} from "framer-motion";
import { Person } from "../components";

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
      duration: nr === 1 ? 1.5 : 3, // 1: 1, 2: 2.1 3: 3.2
      times: [0, nr === 1 ? 0 : 0.5, 1], // 1: 0 2: 1.1 3: 1.1
      // delay: 1 * nr + 0.1 * (nr - 1),
      delay: nr === 3 ? 3 : 1.5,
      ease: [0.77, 0, 0.175, 1],
    },
  }),
};

const hoverBackgroundVariants: Variants = {
  initial: {
    display: "none",
    zIndex: 0,
    opacity: 0,
    transition: {
      duration: 0,
      delay: 0.8,
      opacity: {
        duration: 0.7,
        delay: 0,
      },
    },
  },
  hoverStart: {
    display: "block",
    zIndex: 20,
    opacity: 0.7,
    transition: {
      duration: 0,
      delay: 0.2,
      opacity: {
        duration: 0.7,
        delay: 0.2,
      },
    },
  },
};

//     1.5s -> 3s -> 4.5s -> 6s
// p1:  --  -> ^^ ->  --  -> --
// p2:  --  -> ^  ->  ^^  -> --
// p3:  --  -> -- ->  ^   -> ^^

const Intro: NextPage = () => {
  const backgroundAnimation: AnimationControls = useAnimation();

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.maxWContainer}>
          <div className={styles.personContainer}>
            <Person
              key={0}
              headshot="/headshot.jpeg"
              name="Simon Gribert"
              title="Full Stack Developer"
              index={0}
              backgroundAnimation={backgroundAnimation}
            />
            <Person
              key={1}
              headshot="/headshot.jpeg"
              name="Michael Gribert"
              title="Senior Industry Salesman"
              index={1}
              backgroundAnimation={backgroundAnimation}
            />
            <Person
              key={2}
              headshot="/headshot.jpeg"
              name="Jakob Gribert"
              title="Logistics Intern"
              index={2}
              backgroundAnimation={backgroundAnimation}
            />
            <motion.div
              initial="initial"
              animate={backgroundAnimation}
              variants={hoverBackgroundVariants}
              className={styles.hoverBackground}
            />
          </div>
        </div>
      </div>
      <motion.div
        className={styles.images}
        // initial={{ y: "0%" }}
        // animate={{
        //   y: "-20%",
        //   transition: {
        //     duration: 2.2,
        //     delay: 1,
        //   },
        // }}
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
