export const popBounce = {
  visible: {
    opacity: 1,
    scale: [1, 2, 1],
    transition: { ease: "easeInOut", duration: 0.5 },
  },
  hidden: { opacity: 0, scale: 0 },
};

export const fadeInScale = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ease: "easeInOut", duration: 0.5 },
  },
  hidden: { opacity: 0, scale: 0 },
};

export const fadeInVariant = {
  visible: { opacity: 1, transition: { ease: "easeInOut", duration: 0.75 } },
  hidden: { opacity: 0 },
};

export const fadeInVariantDelay1 = {
    visible: { opacity: 1, transition: { ease: "easeInOut", duration: 0.75, delay: 1} },
    hidden: { opacity: 0 },
  };
