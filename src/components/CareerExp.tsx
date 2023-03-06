import { Career } from "../models/Career";
import { CareerModel } from "../models/CareerModel";
import React, { useEffect, useState } from "react";
import CareerDetails from "./CareerDetails";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { fadeInScale, fadeInVariant } from "../utils/animations";

const CareerExp = () => {
  const [active, setActive] = useState<number>(0);
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const dummyDetails: Career[] = [
    {
      enterprise: "Atos",
      position: "Technician/Fullstack developer",
      period: "Nov 2018 - March 2022",
      details: [
        "Developed and maintained client applications, services and frameworks using Angular 8, Spring boot 2, Jenkins and Openshift.",
        "Tested both frontend and backend services thoroughly using Postman and Docker containers to guarantee that everything works like a clock.",
        "Major clients i've worked with in this period are Groupe PSA and Toledo's city council social welfare department.",
      ],
    },
    {
      enterprise: "Plexus",
      position: "Fullstack developer",
      period: "March 2022 - Present",
      details: [
        "Create and design from scratch custom applications and microservices with Spring boot 2, Angular 11 and React 18.",
        "Build integrations into a complex workflow of projects, developing loosely couple solutions and deploying them into containers using Docker compose.",
        "Experiment and innovate by researching other technologies to be at the vanguard of the latest technological trends and best practises.",
      ],
    },
  ];
  const model: CareerModel = {
    career: dummyDetails,
  };
  return (
    // añadir timeline
    <div
      id="career"
      className="h-screen justify-center flex text-center flex-col"
    >
      <motion.p
        variants={fadeInScale}
        initial="hidden"
        animate={control}
        ref={ref}
        className="text-2xl md:text-3xl lg:text-4xl font-bold py-4 md:py-10"
      >
        Some background story
      </motion.p>
      <motion.h3
        variants={fadeInVariant}
        initial="hidden"
        animate={control}
        ref={ref}
        className="text-md text-gray-600 md:text-lg lg-text-xl py-2 px-4"
      >
        In this never ending journey that programming is, let me give you some
        details about the experiences i&apos;ve had in my career
      </motion.h3>
      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        animate={control}
        ref={ref}
        className="flex py-6 justify-center"
      >
        <div className="hidden md:block">
          <CareerDetails career={model} />
        </div>
        <div className=" md:hidden overflow-auto inline-block text-center ">
          {dummyDetails.map((d: any, i: number) => (
            <a
              className="px-2 text-lg cursor-pointer underline"
              key={d.enterprise}
              onClick={() => setActive(i)}
            >
              {d.enterprise}
            </a>
          ))}
          <div>
            <h2 className="py-4 text-xl lg:text-3xl md:text-2xl font-bold">
              {dummyDetails[active].position}
            </h2>
            <h4 className="py-4 text-lg lg:text-2xl md:text-xl font-semibold underline">
              {dummyDetails[active].period}
            </h4>
            <div>
              {dummyDetails[active].details.map((d, i) => (
                <p
                  key={i}
                  className="py-2 text-gray-600 text-base mx-4 text-center"
                >
                  {d}
                </p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CareerExp;
