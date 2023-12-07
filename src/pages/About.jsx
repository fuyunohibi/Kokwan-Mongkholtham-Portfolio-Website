import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import SectionTitle from "../components/SectionTitle";
import useCheckScreenSize from "../utils/useCheckScreenSize";
import about_image from "../assets/images/ABOUT/about_image.webp";
import Typewriter from "../components/Typewriter";
import MetaTag from "../components/MetaTag";
import { HelmetProvider } from "react-helmet-async";

const About = () => {
  const isBreakpoint = useCheckScreenSize("breakpoint");
  return (
    <HelmetProvider>
      <section
        id="about-section"
        className="relative bg-background overflow-hidden min-h-screen "
      >
        <MetaTag
          title="Kokwan.M - Creative Designer & Developer | Portfolio Showcase"
          description="Explore Kokwan.M's Portfolio Website featuring a diverse range of innovative design and development projects. Discover unique creations that blend creativity with technology."
        />

        <div
          name="inner"
          className="flex flex-col mx-[5%] pb-[8%] pt-[3%] breakpoint:pt-[0%] breakpoint:flex-row"
        >
          <div name="about_block" className="flex flex-col">
            <SectionTitle title="About" />
            <motion.p
              variants={fadeIn("", "", 0.1, 1.2)}
              initial="hidden"
              whileInView="show"
              className="w-[100%] breakpoint:w-[70%] text-sm font-didact leading-6 tracking-wider text-black-100  breakpoint:text-[1.6vw] breakpoint:leading-[2.8vw] "
            >
              Design's allure caught my imagination since childhood, spinning
              tales through colors and patterns. Yet, as the hands of time
              moved, I stumbled upon another form of enchantment — coding. A
              seemingly cryptic language that, when rightly whispered, could
              transform dreams into digital reality. Today, I stand at the
              confluence of these two magical worlds. Molding the visual and
              vibrant charm of design with the powerful logic of coding, I help
              transform dreams into tangible experiences. As a modern-day
              alchemist, my craft lies in bringing ideas to life, one line of
              code at a time.
            </motion.p>
          </div>
          {isBreakpoint ? (
            <div name="image_container_2" className="mt-[25%]">
              <div
                name="quote_text"
                className="absolute flex flex-row gap-[43%] top-0 right-0 mr-[12%] mt-[10%] z-10"
              >
                <p className="text-accent font-japan text-[2vw]">
                  J<br />u<br />s<br />t<br /> a<br /> l<br />i<br />t<br />t
                  <br />l<br />e<br /> b<br />i<br />t<br /> o<br />f<br /> m
                  <br />e
                </p>
                <p className="text-accent font-japan text-[2vw]">
                  C<br />o<br />m<br />e<br /> a<br />n<br />d<br /> s<br />e
                  <br />e<br />k<br /> m<br />e
                </p>
              </div>
              <div name="right" className="flex relative">
                <div name="first_img" className="w-[50vw]">
                  <img
                    src={about_image}
                    alt="My About Image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  name="quote_block"
                  className="absolute pr-5 pt-5 right-0 bottom-0 mr-[80%] mb-[10%] bg-primary opacity-90 h-[28%] w-[100%] flex justify-end items-start"
                >
                  <Typewriter
                    className="text-white-100 font-japan text-md laptop:text-lg text-end"
                    text="Seek out and reach for it!"
                    delay={0.05}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div name="image_container" className="w-[100%] mt-16">
              <div name="top" className="flex relative h-[100%]">
                <div name="first_img" className="w-[50%] relative z-10">
                  <img
                    src={about_image}
                    alt="about image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  name="quote_block"
                  className="absolute pl-5 pt-5  pr-5 ml-[39%] mt-[18%] left-0 top-0 bg-primary-opacity-90-percent h-[33%] w-[61%] z-20 smallMobile:h-[43%] "
                >
                  <Typewriter
                    className="text-white-100 font-japan text-sm "
                    text="Seek out and reach for it!"
                    delay={0.05}
                  />
                </div>
              </div>
              <div
                name="quote_text"
                className="flex items-center ml-[5%] mt-[-60%] relative z-30"
              >
                <p className="text-accent font-japan text-[1rem]">
                  A<br /> p<br />a<br />r<br />t<br /> o<br />f<br /> m<br />e
                </p>
                <p className="mt-[20%] text-accent font-japan text-[1rem]">
                  D<br />i<br />s<br />c<br />o<br />v<br />e<br />r<br /> m
                  <br />e
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </HelmetProvider>
  );
};

export default About;
