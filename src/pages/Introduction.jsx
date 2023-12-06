import React from "react";
import { motion } from "framer-motion";
import useCheckScreenSize from "../utils/useCheckScreenSize";
import { fadeIn } from "../utils/motion";
import MetaTag from "../components/MetaTag";
import { HelmetProvider } from "react-helmet-async";

const Introduction = () => {
  const isBreakpoint = useCheckScreenSize("breakpoint");
  return (
    <HelmetProvider>
      <section id="introduction-section" className="bg-dark-background">
        <MetaTag
          title="Kokwan.M - Creative Designer & Developer | Portfolio Showcase"
          description="Explore Kokwan.M's Portfolio Website featuring a diverse range of innovative design and development projects. Discover unique creations that blend creativity with technology."
        />
        <div
          name="inner"
          className="flex justify-between mx-[5%] pt-[8%] pb-[8%] breakpoint:pt-[3%] breakpoint:mb-[3%] breakpoint:flex-col breakpoint:justify-end breakpoint:items-end"
        >
          {isBreakpoint ? (
            <div className="flex flex-row mb-8 w-[53%] justify-end items-center">
              <hr className="w-full white-pencil-style-right-to-left mr-[10%]" />
              <h2 className="text-3xl laptop:text-5xl font-japan-bold text-white-100">
                Intro
              </h2>
            </div>
          ) : (
            <div className="flex flex-col">
              <h2 className="text-2xl font-japan-bold text-white-100 ">
                Intro
              </h2>
              <hr className="w-[100%] white-pencil-style-left-to-right" />
            </div>
          )}
          <motion.p
            variants={fadeIn("", "", 0.1, 1.2)}
            initial="hidden"
            whileInView="show"
            className=" w-[72%] breakpoint:w-[50%] text-sm font-japan leading-6 tracking-wider text-white-100 breakpoint:text-[16px] breakpoint:text-end"
          >
            Welcome to my realm where the magic of design meets the wizardry of
            code. Dive in, explore, and let's create something magical together.
          </motion.p>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Introduction;
