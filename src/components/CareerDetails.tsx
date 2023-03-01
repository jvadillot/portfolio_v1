import { Career } from "../models/Career";
import { CareerModel } from "../models/CareerModel";
import React, { useState } from "react";

const CareerDetails = ({career}: {career: CareerModel}) => {
  const [active, setActive] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <ul className="flex flex-wrap justify-between border-b mx-10 border-gray-200  ">
        {career.career.map((d:any, i:number) => (
          <li key={i} className="mx-10">
            <a
              href={`#${d.enterprise}`}
              onClick={() => setActive(i)}
              className="inline-block text-center text-xl"
            >
              {d.enterprise}
            </a>
          </li>
        ))}
      </ul>
      <h2 className="py-4 text-xl lg:text-3xl md:text-2xl font-bold">{career.career[active].position}</h2>
      <h4 className="py-4 text-lg lg:text-2xl md:text-xl font-semibold">{career.career[active].period}</h4>
        <div>
          {career.career[active].details.map((d:any, i:number) => (
            <p key={i} className=" text-gray-600 w-auto text-center break-words mx-10 my-3">
              {d}
            </p>
          ))}
        </div>
    </div>
  );
};

export default CareerDetails;
