import React, { useEffect } from "react";
import Card from "./Card";
import { motion, useAnimation } from "framer-motion";
import { fadeInScale, fadeInVariant, popBounce } from "../utils/animations";
import { useInView } from "react-intersection-observer";

const Projects = ({ projects }: any) => {

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
    <div
      id="projects"
      className="h-screen justify-center flex text-center flex-col"
    >
      <motion.h3
        variants={fadeInVariant}
        initial="hidden"
        animate={control}
        ref={ref}
      >
        {" "}
        Projects: Coming soon
      </motion.h3>
      <motion.div
        variants={popBounce}
        initial="hidden"
        animate={control}
        ref={ref}
        className="grid grid-cols-2 h-auto w-auto pt-10"
      >
        {projects.map((p: any, i: number) => (
          <Card
            key={i}
            cardTitle={p.projectName}
            cardContent={p.projectDetails}
            linkTo={p.linkTo}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
