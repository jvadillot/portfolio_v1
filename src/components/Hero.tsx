import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInVariant, fadeInVariantDelay1, popBounce } from "../utils/animations";

const Hero = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section id="/" className="min-h-screen flex flex-col justify-center ">
      <div className="text-center p-10">
        <motion.h2
          variants={fadeInVariant}
          initial="hidden"
          animate={control}
          ref={ref}
          className="text-3xl md:text-4xl lg:text-6xl py-2 font-bold  "
        >
          Javier Vadillo
        </motion.h2>
        <motion.h3 variants={fadeInVariantDelay1}
          initial="hidden"
          animate={control}
          ref={ref} className="text-xl md:text-2xl lg:text-3xl py-2 font-semibold  ">
          Fullstack Developer
        </motion.h3>
        <motion.p variants={fadeInVariantDelay1}
          initial="hidden"
          animate={control}
          ref={ref} className="text-md py-5 leading-8 text-gray-600">
          Building beautiful and efficient solutions.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
