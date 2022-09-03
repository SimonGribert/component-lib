import {
  AnimationControls,
  motion,
  useAnimation,
  Variants,
} from "framer-motion";
import Image from "next/image";
import styles from "./Person.module.css";
import type { PersonProps } from "./person";
import { useEffect } from "react";

const containerVariants: Variants = {
  hoverStart: { scale: 1.1, transition: { duration: 0.7, delay: 0.2 } },
  hoverEnd: { scale: 1, transition: { duration: 0.7 } },
  initial: { y: "150%" },
  enter: (extraDelay) => ({
    y: "0%",
    transition: {
      duration: 2,
      delay: 4.3 + extraDelay,
      ease: [0.77, 0, 0.175, 1],
    },
  }),
};

const hoverVariants: Variants = {
  initial: { x: "0%", zIndex: -15, opacity: 0 },
  hoverStart: {
    x: "93%",
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.7,
      opacity: {
        duration: 0,
      },
    },
  },
  hoverEnd: {
    x: "0%",
    opacity: 0,
    transition: {
      duration: 1,
      opacity: {
        delay: 1,
        duration: 0,
      },
    },
  },
};

const Person = ({ headshot, name, title, index }: PersonProps): JSX.Element => {
  const containerAnimation: AnimationControls = useAnimation();
  const hoverAnimation: AnimationControls = useAnimation();
  const extraDelay = 0.2 * index;

  const onHoverStart = () => {
    containerAnimation.start("hoverStart");
    hoverAnimation.start("hoverStart");
  };

  const onHoverEnd = () => {
    containerAnimation.start("hoverEnd");
    hoverAnimation.start("hoverEnd");
  };

  useEffect(() => {
    containerAnimation.start("enter");
  }, [containerAnimation]);

  return (
    <motion.div
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      variants={containerVariants}
      custom={extraDelay}
      style={{ marginTop: index === 1 ? "96px" : "0px" }}
      initial="initial"
      animate={containerAnimation}
      className={styles.person}
    >
      <div className={styles.personThree}>
        <div className={styles.personTwo}>
          <div className={styles.imgContainer}>
            <Image
              src={headshot}
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
                delay: 6.1 + extraDelay,
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
                  delay: 7 + extraDelay,
                },
              }}
            >
              {name}
            </motion.h3>
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.2,
                  delay: 7 + extraDelay,
                },
              }}
            >
              {title}
            </motion.h4>
          </motion.div>
        </div>
        <motion.div
          variants={hoverVariants}
          animate={hoverAnimation}
          initial="initial"
          className={styles.hoverContainer}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Person;
