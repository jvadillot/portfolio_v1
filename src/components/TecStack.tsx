import { ImageDetails } from "../models/ImageDetails";
import React from "react";

const TecStack = ({width, height, src, alt, desc} : ImageDetails) => {
  return (
    <>
      <li className="flex flex-col justify-center items-center shadow-xl w-[200px]">
        <div>
          <img className="mx-auto" width={width} height={height} src={src} alt={alt} />
          <p className="py-4">{desc}</p>
        </div>
      </li>
    </>
  );
};

export default TecStack;
