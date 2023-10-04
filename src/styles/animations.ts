import { Variants } from "framer-motion";

export const fadeInVariant: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1.1,
    },
  },
};

export const parentVariant:Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      ease: [0.32, 0.23, 0.4, 0.9],
      staggerChildren: 0.2,
    },
  },
};

export const childVariants:Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  },
};
