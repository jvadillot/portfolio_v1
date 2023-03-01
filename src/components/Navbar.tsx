import { Sling as Hamburger } from "hamburger-react";
import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import CV from '../assets/javier_vadillo_cv.pdf';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isYZero, setYZero] = useState<boolean>(true);

  const handleScroll = () => {
    setOpen(false);

    const currentScrollPos = window.scrollY;

    currentScrollPos > prevScrollPos ? setVisible(false) : setVisible(true);

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    setYZero(window.scrollY !== 0);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`bg-white w-full mx-auto h-20 py-4 flex justify-between items-center fixed left-0 right-0 px-8 md:px-12 transition duration-300 ease-out  ${
        visible ? "" : "-translate-y-28"
      } ${isYZero ? "shadow-lg" : ""}`}
    >
      <Link href="/" to="/">
        <img
          className="max-w-[30px] lg:max-w-[40px]  max-h-[30px] lg:max-h-[40px] w-full h-full cursor-pointer"
          alt="logo"
          src={Logo}
        ></img>
      </Link>
      <div className="hidden md:flex">
        <ul className="flex items-center">
          <li className="p-4 cursor-pointer font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setOpen(false)}
            >
              About me
            </Link>
          </li>

          <li className="p-4 cursor-pointer font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Link
              to="career"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setOpen(false)}
            >
              Career
            </Link>
          </li>
          <li className="p-4 cursor-pointer font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="p-4 cursor-pointer font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <button className="p-4 font-bold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <a
                href={CV}
                target='_blank'
                rel={'noreferrer'}
              >
                CV
              </a>
            </button>
          </li>
        </ul>
      </div>
      <div className="block md:hidden z-40">
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </div>
      <div
        className={
          isOpen
            ? "fixed z-10 right-0 top-0 w-[60%] border-l border-l-gray-900 h-full bg-white ease-in-out duration-500"
            : "fixed  right-[-100%]"
        }
      >
        <ul className="p-4 h-full flex flex-col align-middle items-center justify-center">
          <li className="p-4 font-bold">
          <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setOpen(false)}
            >
              About me
            </Link>
          </li>
          <li className="p-4 font-bold">
          <Link
              to="career"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setOpen(false)}
            >
              Career
            </Link>
          </li>
          <li className="p-4 font-bold">
          <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="p-4 font-bold">
          <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <button className="font-bold text-black p-4 rounded-md ">
              <a
                href={CV}
                target="_blank"
                rel="noreferrer"
              >
                CV
              </a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
function componentDidMount() {
  throw new Error("Function not implemented.");
}
