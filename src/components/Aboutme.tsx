import React, { useEffect } from "react";
import Angular from "../assets/angular.png";
import Aws from "../assets/aws.svg";
import ReactIcon from "../assets/react.png";
import Spring from "../assets/spring.svg";
import Docker from "../assets/docker.png";
import NextJs from "../assets/next.png";
import { ImageDetails } from "../models/ImageDetails";
import TecStack from "./TecStack";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInScale, fadeInVariant } from "../utils/animations";

const Aboutme = () => {

  const imageDetails: ImageDetails[] = [
    {
      width: 60,
      height: 60,
      src: Angular,
      alt: "Angular icon",
      desc: "Angular 11",
    },
    {
      width: 60,
      height: 60,
      src: Spring,
      alt: "Spring icon",
      desc: "Spring Boot",
    },
    {
      width: 60,
      height: 60,
      src: ReactIcon,
      alt: "React icon",
      desc: "React 18",
    },
    {
      width: 60,
      height: 60,
      src: Aws,
      alt: "Aws icon",
      desc: "Aws",
    },
    {
      width: 60,
      height: 60,
      src: Docker,
      alt: "Docker icon",
      desc: "Docker",
    },
    {
      width: 60,
      height: 60,
      src: NextJs,
      alt: "Next icon",
      desc: "NextJs 13",
    },
  ];
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
    <div id="about" className="w-full py-16 px-8 ">
      <div className="mx-auto xl:text-left xl:max-w-5xl justify-center flex flex-col items-center">
        <motion.h3
          variants={fadeInScale}
          initial="hidden"
          animate={control}
          ref={ref}
          className="text-3xl sm:text-3xl md:text-4xl font-bold mx-auto md:pb-6"
        >
          About me
        </motion.h3>
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate={control}
          ref={ref}
        >
          <p className="text-md sm:text-lg text-gray-600 py-4 ">
            Let me tell you about my story, I&apos;ve been interested in
            programming when i was a boy, always wanting to know more about how
            things in programs, webs and videogames were done under the surface.
            Turns out they were made by using something called programming
            languages, an there were a lot of them. So i picked java and started
            learning how it worked and how to start in the IT business.
          </p>
          <p className="text-md sm:text-lg  text-gray-600 py-4">
            Since then, i&apos;ve had the pleasure of building a lot of systems,
            both at work and as a hobbyist, such as Microservices, SPAs and
            sometimes, even little videogames!
          </p>
          <p className="text-md sm:text-lg  text-gray-600 py-4">
            Nowadays, i&apos;m focusing on learn new things and improve as a
            developer, adapting to the market trends in the process, here are
            some of the technologies i&apos;ve been working with lately:
          </p>
        </motion.div>
        <ul className="grid md:grid-cols-2 gap-10 py-12">
          {imageDetails.map((i, index) => (
            <TecStack
              key={index}
              width={i.width}
              height={i.height}
              src={i.src}
              alt={i.alt}
              desc={i.desc}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Aboutme;
