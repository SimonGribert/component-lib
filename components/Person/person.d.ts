import { AnimationControls } from "framer-motion";

export type PersonProps = {
  headshot: string;
  name: string;
  title: string;
  index: number;
  backgroundAnimation: AnimationControls;
};
