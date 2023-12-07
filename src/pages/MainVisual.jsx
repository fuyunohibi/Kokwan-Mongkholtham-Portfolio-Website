import React from "react";
import { motion } from "framer-motion";
import useCheckScreenSize from "../utils/useCheckScreenSize";
import my_image from "../assets/images/MAIN/my_image.webp";
import my_image_2 from "../assets/images/MAIN/my_image_2.webp";
import Introduction from "./Introduction";
import Typewriter from "../components/Typewriter";
import MetaTag from "../components/MetaTag";
import { HelmetProvider } from "react-helmet-async";

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1 } },
};

const Oval = () => {
  return (
    <div
      className="border border-accent top-1/2 w-[2.9rem] h-[6.25rem] rounded-full"
      style={{
        borderRadius: "100%",
        transform: "rotate(45.477deg)",
      }}
    />
  );
};

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center absolute top-2 left-1/2 transform -translate-x-1/2  z-50">
      <div className="flex flex-col items-center justify-center">
        <motion.h4
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-accent text-2xl font-vanilla absolute"
        >
          Let's Create Magic
        </motion.h4>
        <div className="flex flex-row">
          {Array.from({ length: 3 }, (_, i) => (
            <Oval key={i} />
          ))}
        </div>
      </div>
      <motion.hr
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        className="border-accent w-80  mb-3"
      />
      <Typewriter
        text="Ko-Kwan Mongkholtham"
        delay={0.05}
        className="text-highlight text-sm font-japan"
      />
    </div>
  );
};

const MainVisual = ({ introductionRef }) => {
  const isBreakpoint = useCheckScreenSize("breakpoint");
  return (
    <HelmetProvider>
      <section id="mainVisual-section" className="breakpoint:bg-background">
        <MetaTag
          title="Kokwan.M - Creative Designer & Developer | Portfolio Showcase"
          description="Explore Kokwan.M's Portfolio Website featuring a diverse range of innovative design and development projects. Discover unique creations that blend creativity with technology."
        />
        {isBreakpoint ? (
          <motion.div
            name="inner"
            className="relative flex flex-col mx-[5%] laptop:pt-[4.6rem] "
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div name="top-container" className="flex flex-row justify-between">
              <div name="text-left" className="ml-[5%] mt-[3%] z-[30]">
                <div className="flex flex-row gap-[43%]">
                  <p className="ghibli-float-text text-[2vw] font-japan text-primary">
                    H<br />e<br />l<br />l<br />o
                  </p>
                  <p className="ghibli-float-text text-[2vw] font-japan text-primary">
                    Y<br />o<br />u<br />
                  </p>
                  <p className="ghibli-float-text text-[2vw] font-japan text-primary">
                    2<br />0<br />2<br />3
                  </p>
                  <p className="ghibli-float-text text-[2vw] font-japan text-primary">
                    C<br />a<br />p<br />t<br />a<br />i<br />n
                  </p>
                </div>
              </div>
              <div name="img-right" className="w-[75%]">
                <img
                  src={my_image_2}
                  alt="My background Image"
                  className="max-w-[100%] h-auto"
                />
              </div>
            </div>
            <div name="bottom-container" className="z-10">
              <div name="img-left" className="w-[40%] mt-[-20%]">
                <img
                  src={my_image}
                  alt="My Profile Image"
                  className="max-w-[100%] h-full"
                />
              </div>
              <div name="text-right" className="ml-[44%] mt-[-32%]">
                <div className="flex flex-col">
                  <h3 className="ghibli-typewriter-text text-[2.4vw] font-japan text-accent transform -rotate-[1.8deg] mb-2">
                    Ko-Kwan Mongkholtham
                  </h3>
                  <div className="flex justify-start mb-3 ml-12">
                    <hr className="pencil-style-left-to-right w-[60%]" />
                  </div>
                  <p className="text-[1.5vw] tracking-wider font-japan text-primary">
                    <span className="ghibli-typewriter-text-border">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&nbsp; mold&nbsp; dreams
                      with lines of code
                    </span>
                    <br />
                    <span className="ghibli-typewriter-text-border-delay">
                      But,&nbsp; I&nbsp; hold no magic wand.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              ref={introductionRef}
              name="Introduction"
              className="mt-[5%] z-0 ml-[-6%]"
            >
              <Introduction />
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full h-screen overflow-hidden"
          >
            <img
              src={my_image}
              alt="my image"
              className="absolute top-0 left-0 w-full h-full object-cover transform scale-125 -translate-x-5 translate-y-2"
            />
            <Logo />
          </motion.div>
        )}
      </section>
    </HelmetProvider>
  );
};

export default MainVisual;
