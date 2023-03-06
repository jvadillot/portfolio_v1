import { ImageDetails } from "../models/ImageDetails";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { popBounce } from "../utils/animations";

const TecStack = ({ width, height, src, alt, desc }: ImageDetails) => {
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
    <>
      <motion.li
        variants={popBounce}
        initial="hidden"
        animate={control}
        ref={ref}
        className="flex flex-col justify-center items-center shadow-xl w-[200px]"
      >
        <div>
          <img
            className="mx-auto"
            width={width}
            height={height}
            src={src}
            alt={alt}
          />
          <p className="py-4">{desc}</p>
        </div>
      </motion.li>
    </>
  );
};

export default TecStack;
