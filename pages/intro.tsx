import type { NextPage } from "next";
import styles from "../styles/Intro.module.css";
import { ImageSlider, Persons } from "../components";

//     1.5s -> 3s -> 4.5s -> 6s -> 7.5s
// p1:  --  -> ^^ ->  --  -> --
// p2:  --  -> ^  ->  ^^  -> --
// p3:  --  -> -- ->  ^   -> ^^ -> --

/*
  Create component for each Sliding image
  Call animation with useEffect? - might complicate code
  Create component for all of the intro images - keeping it separated.

  We need to control the  hover/click ability.
  Only hover/click after each person sildes in and the bottom part with name and
  title appears, then allow  hover/click
  Is  hover/click allowed on first person even if 3rd is not done animating?
  If yes: we can keep  hover/click login inside each own person.
*/

const Intro: NextPage = () => {
  return (
    <div className={styles.container}>
      <Persons />
      <ImageSlider />
    </div>
  );
};

export default Intro;
