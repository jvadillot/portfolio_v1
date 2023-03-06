import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { fadeInVariant } from "../utils/animations";

const Contact = () => {
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
    <motion.div
      variants={fadeInVariant}
      initial="hidden"
      animate={control}
      ref={ref}
      id="contact"
      className="h-screen justify-center flex text-center flex-col mx-4"
    >
      <h2 className="text-2xl py-6 font-bold">
        Now that you know a little bit of me, let&apos;s get in touch!
      </h2>
      <h3 className="text-lg py-2 font-semibold">
        {" "}
        You can reach me by clicking the following icons
      </h3>
      <div className="text-5xl flex justify-center gap-16 py-4 text-gray-600">
        <a
          href="https://es.linkedin.com/in/javier-vadillo-torres-413bbb150"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="mailto:vadillotorresjavier@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillMail />
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
