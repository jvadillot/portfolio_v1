import React from 'react';

const Hero = () => {
  return (
    <section id='/' className="min-h-screen flex flex-col justify-center ">
          <div className="text-center p-10">
            <h2 className="text-3xl md:text-4xl lg:text-6xl py-2 font-bold  ">
              Javier Vadillo
            </h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl py-2 font-semibold  ">
              Fullstack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-600">
              Building beautiful and efficient solutions.
            </p>
          </div>
        </section>
  )
}

export default Hero