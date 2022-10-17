import {
  AnimationControls,
  motion,
  useAnimation,
  Variants,
} from "framer-motion";
import Image from "next/image";
import styles from "./Persons.module.css";
import type { PersonProps } from "./persons";
import { useEffect, useState } from "react";
import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";

const containerVariants: Variants = {
  initial: { y: "160%" },
  enter: (extraDelay) => ({
    y: "0%",
    transition: {
      duration: 2,
      delay: 4.5 + extraDelay,
      ease: [0.77, 0, 0.175, 1],
    },
  }),
  hoverStart: {
    scale: 1.1,
    zIndex: 30,
    transition: {
      duration: 0.7,
      // delay: 0.2,
      zIndex: {
        duration: 0,
        // delay: 0.2,
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
};

const nameCardVariants: Variants = {
  initial: { y: "-100%" },
  slideDown: {
    y: "0%",
    transition: {
      duration: 1,
      ease: [0.77, 0, 0.175, 1],
    },
  },
};

const textFadeInVariants: Variants = {
  initial: { opacity: 0 },
  fadeIn: (extraDelay) => ({
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: extraDelay ? extraDelay : 0,
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

const hoverBackgroundVariants: Variants = {
  initial: {
    display: "none",
    zIndex: 0,
    opacity: 0,
    transition: {
      duration: 0,
      delay: 0.7,
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
      // delay: 0.2,
      opacity: {
        duration: 0.7,
        // delay: 0.2,
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
}: // backgroundAnimation,
PersonProps): JSX.Element => {
  const [clickable, setClickable] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const containerAnimation: AnimationControls = useAnimation();
  const personThreeAnimation: AnimationControls = useAnimation();
  const nameCardAnimation: AnimationControls = useAnimation();
  const textFadeInAnimation: AnimationControls = useAnimation();
  const backgroundAnimation: AnimationControls = useAnimation();
  // const hoverAnimation: AnimationControls = useAnimation();
  // const personThreeAnimation: AnimationControls = useAnimation();

  const extraDelay = 0.2 * index;
  const revertDelay = (2 - index) * 0.2;

  const toggleModal = async () => {
    if (!clickable) return;

    setClickable(false);
    let animations: Promise<any>[] = [];
    if (open) {
      animations.push(
        containerAnimation.start("hoverEnd"),
        backgroundAnimation.start("initial")
      );
    } else {
      animations.push(
        containerAnimation.start("hoverStart"),
        backgroundAnimation.start("hoverStart")
      );
    }

    await Promise.all(animations);
    setOpen((prev) => !prev);
    setClickable(true);
  };

  // const onHoverStart = () => {
  //   containerAnimation.start("hoverStart");
  //   // personThreeAnimation.start("hoverStart");
  //   backgroundAnimation.start("hoverStart");
  //   hoverAnimation.start("hoverStart");
  // };

  // const onHoverEnd = () => {
  //   containerAnimation.start("hoverEnd");
  //   // personThreeAnimation.start("initial");
  //   backgroundAnimation.start("initial");
  //   hoverAnimation.start("hoverEnd");
  // };

  useEffect(() => {
    const handleEntranceAnimation = async () => {
      await containerAnimation.start("enter");
      await nameCardAnimation.start("slideDown");
      await textFadeInAnimation.start("fadeIn");

      setClickable(true);
    };

    handleEntranceAnimation();
  }, [containerAnimation, nameCardAnimation, textFadeInAnimation]);

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
    <>
      <motion.div
        // onHoverStart={onHoverStart}
        // onHoverEnd={onHoverEnd}
        // variants={containerVariants}
        // custom={extraDelay}
        // initial="initial"
        // animate={containerAnimation}
        style={{ marginTop: index === 1 ? "96px" : "0px" }}
        className={styles.person}
      >
        <motion.div
          variants={containerVariants}
          custom={extraDelay}
          initial="initial"
          animate={containerAnimation}
          className={styles.personThree}
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
              initial="initial"
              variants={nameCardVariants}
              animate={nameCardAnimation}
              className={styles.nameContainer}
            >
              <motion.h3
                initial="initial"
                variants={textFadeInVariants}
                animate={textFadeInAnimation}
              >
                {name}
              </motion.h3>
              <motion.h4
                initial="initial"
                variants={textFadeInVariants}
                animate={textFadeInAnimation}
              >
                {title}
              </motion.h4>
              <motion.div
                initial="initial"
                variants={textFadeInVariants}
                animate={textFadeInAnimation}
                className={styles.buttonContainer}
                custom={revertDelay}
              >
                <button tabIndex={-1} onClick={toggleModal}>
                  <FiArrowRight size={24} />
                </button>
              </motion.div>
            </motion.div>
          </div>
          {/* <motion.div
          variants={hoverVariants}
          animate={hoverAnimation}
          initial="initial"
          className={styles.hoverContainer}
        >
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
        </motion.div> */}
        </motion.div>
      </motion.div>

      <motion.div
        initial="initial"
        animate={backgroundAnimation}
        variants={hoverBackgroundVariants}
        className={styles.hoverBackground}
        onClick={toggleModal}
      />
    </>
  );
};

export default Person;
