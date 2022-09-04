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
import { FiGithub, FiLinkedin } from "react-icons/fi";

const containerVariants: Variants = {
  hoverStart: {
    scale: 1.1,
    zIndex: 30,
    transition: {
      duration: 0.7,
      delay: 0.2,
      zIndex: {
        duration: 0,
        delay: 0.2,
      },
    },
  },
  hoverEnd: {
    scale: 1,
    zIndex: 0,
    transition: {
      duration: 0.7,
      zIndex: {
        duration: 0,
        delay: 0.7,
      },
    },
  },
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

// const personThreeVariants: Variants = {
//   initial: {
//     zIndex: 0,
//     transition: {
//       duration: 0,
//     },
//   },
//   hoverStart: {
//     zIndex: 30,
//     transition: {
//       duration: 0,
//     },
//   },
// };

const Person = ({
  headshot,
  name,
  title,
  index,
  backgroundAnimation,
}: PersonProps): JSX.Element => {
  const containerAnimation: AnimationControls = useAnimation();
  const hoverAnimation: AnimationControls = useAnimation();
  // const personThreeAnimation: AnimationControls = useAnimation();

  const extraDelay = 0.2 * index;

  const onHoverStart = () => {
    containerAnimation.start("hoverStart");
    // personThreeAnimation.start("hoverStart");
    backgroundAnimation.start("hoverStart");
    hoverAnimation.start("hoverStart");
  };

  const onHoverEnd = () => {
    containerAnimation.start("hoverEnd");
    // personThreeAnimation.start("initial");
    backgroundAnimation.start("initial");
    hoverAnimation.start("hoverEnd");
  };

  useEffect(() => {
    containerAnimation.start("enter");
  }, [containerAnimation]);

  /*
    onHover
    1. Scale thing
    2. zIndex personThree above 10
    3. Display a new background color at above 10 zindex
    4. Said background should go from opacity 0 -> 0.5 as it scales
    5. Then the side panel appears

    Might need to also manually change imgContainer zindex
  */

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
      <motion.div
        // initial="initial"
        // animate={personThreeAnimation}
        className={styles.personThree}
        // variants={personThreeVariants}
      >
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
        >
          {/* <p className={styles.aboutMe}>The time, this accumsan sad augue, posuere posuere elit lorem see!</p>
          <div className={styles.divider} /> */}
          <div>
            <h4 className={styles.infoTitle}>Work</h4>
            <p className={styles.infoContent}>https://enegic.com</p>
            <p className={styles.infoContent} style={{ marginBottom: "40px" }}>
              simon.gribert@perific.com
            </p>
            <div className={styles.divider} />
          </div>
          <div>
            <h4 className={styles.infoTitle}>Private</h4>
            <p className={styles.infoContent}>simon.gribert.com</p>
            <p className={styles.infoContent}>simon@gribert.com</p>
            <p className={styles.infoContent} style={{ marginBottom: "40px" }}>
              0735403705
            </p>
            <div className={styles.divider} />
          </div>
          <div>
            <h4 className={styles.infoTitle}>Socials</h4>
            <div className={styles.socialsContainer}>
              <div className={styles.infoIcon}>
                <FiGithub
                  color="#161619"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className={styles.infoIcon}>
                <FiLinkedin
                  color="#161619"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Person;
