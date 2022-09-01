import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Intro.module.css";
import { motion, Variants } from "framer-motion";

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

//     1s -> 2s -> 3s -> 4s
// p1: -- -> ^^ -> -- -> --
// p2: -- -> ^  -> ^^ -> --
// p3: -- -> -- -> ^  -> ^^

const Intro: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.maxWContainer}>
          <div className={styles.personContainer}>
            <motion.div
              initial={{ y: "150%" }}
              animate={{
                y: "0%",
                transition: {
                  duration: 2,
                  delay: 4.5,
                  ease: [0.77, 0, 0.175, 1],
                },
              }}
              className={styles.person}
            >
              {/* <Image
              src="/headshot.jpeg"
              alt=""
              width="245"
              height="320"
              layout="responsive"
            /> */}
              <div className={styles.personTwo}>
                <div className={styles.imgContainer}>
                  <Image
                    src="/headshot.jpeg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    style={{
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <motion.div
                  initial={{ y: "-100%" }}
                  animate={{
                    y: "0%",
                    transition: {
                      duration: 1,
                      delay: 6.1,
                      ease: [0.77, 0, 0.175, 1],
                    },
                  }}
                  className={styles.nameContainer}
                >
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        duration: 0.2,
                        delay: 7,
                      },
                    }}
                  >
                    Simon Gribert
                  </motion.h3>
                  <motion.h4
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        duration: 0.2,
                        delay: 7,
                      },
                    }}
                  >
                    Full Stack Developer
                  </motion.h4>
                </motion.div>
              </div>
            </motion.div>
            <div className={styles.person} style={{ marginTop: "96px" }}>
              {/* <Image
              src="/headshot.jpeg"
              alt=""
              width="245"
              height="320"
              layout="responsive"
            /> */}
              {/* <Image
                src="/headshot.jpeg"
                alt=""
                layout="fill"
                objectFit="cover"
              /> */}
              <div className={styles.personTwo}>
                <div className={styles.imgContainer}>
                  <Image
                    src="/headshot.jpeg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className={styles.nameContainer}>
                  <h3>Michael Gribert</h3>
                  <h4>Senior Industry Salesman</h4>
                </div>
              </div>
            </div>
            <div className={styles.person}>
              {/* <Image
              src="/headshot.jpeg"
              alt=""
              width="245"
              height="320"
              layout="responsive"
            /> */}
              {/* <Image
                src="/headshot.jpeg"
                alt=""
                layout="fill"
                objectFit="cover"
              /> */}
              <div className={styles.personTwo}>
                <div className={styles.imgContainer}>
                  <Image
                    src="/headshot.jpeg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className={styles.nameContainer}>
                  <h3>Jakob Gribert</h3>
                  <h4>Senior Logistics Expert</h4>
                </div>
              </div>
            </div>
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
