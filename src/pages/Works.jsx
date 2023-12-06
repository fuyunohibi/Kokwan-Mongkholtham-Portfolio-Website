import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "../components/Typewriter";
import { workExperience } from "../data";
import SectionTitle from "../components/SectionTitle";
import { up_icon, down_icon } from "../assets/images/WORK";
import MetaTag from "../components/MetaTag";
import { HelmetProvider } from "react-helmet-async";

const Works = () => {
  const [activeWork, setActiveWork] = useState(null);

  const handleWorkClick = (index) => {
    setActiveWork(activeWork === index ? null : index);
  };

  return (
    <HelmetProvider>
      <section
        id="works-section"
        className="relative bg-background overflow-hidden min-h-full"
      >
        <MetaTag
          title="Kokwan.M - Creative Designer & Developer | Portfolio Showcase"
          description="Explore Kokwan.M's Portfolio Website featuring a diverse range of innovative design and development projects. Discover unique creations that blend creativity with technology."
        />
        <div
          name="inner"
          className="flex flex-col mx-[5%] pb-[20%] pt-[3%]
        tablet:pb-[9%]
        breakpoint:pb-[8%]
        laptop:pb-[6%]
        desktop:pb-[5%]
      "
        >
          <SectionTitle title="Work Experience" />
          <div className="mt-6">
            {workExperience.map((work) => (
              <WorkCard
                key={work.id}
                work={work}
                onClick={() => handleWorkClick(work.id)}
                isActive={activeWork === work.id}
              />
            ))}
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Works;

// export const workExperience = [
//   {
//     id: 1,
//     company: "Pecgo",
//     team: "Developer",
//     position: "Junior Frontend Developer",
//     monthPeriod: "Aug - Dec",
//     yearPeriod: "2023",
//     description: "",
//     skills: [
//       {
//         name: "react.js",
//       },
//       {
//         name: "next.js",
//       },
//       {
//         name: "react-native",
//       },
//       {
//         name: "tailwind",
//       },
//       {
//         name: "zustand",
//       },
//     ],
//   },
// ];

const AnimatedContent = ({ isActive, work }) => (
  <AnimatePresence>
    {isActive && (
      <motion.div
        key={work.title}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
      >
        <div className="flex flex-col mt-10">
          <p
            name="work-description"
            className="text-sm font-didact leading-6 tracking-wider text-black-100 
              text-center
              tablet:text-end 
            "
          >
            {work.description}
          </p>
          <div
            className="mt-5 flex flex-wrap justify-center 
            tablet:justify-end
            "
          >
            {work.skills &&
              work.skills.map((skill, index) => (
                <div
                  key={index}
                  className={`bg-gray-200 px-1 py-1 mb-1 mt-2 rounded-md
                    ${index !== work.skills.length - 1 ? "mr-2" : ""}
                  `}
                >
                  <p className="font-japan text-gray-700 text-xs ">
                    #{skill.name}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const WorkCard = ({ work, onClick, isActive }) => {
  return (
    <>
      <motion.div
        layout
        name="work-container"
        onClick={onClick}
        className="flex flex-col items-center tablet:flex-row tablet:justify-between tablet:items-start tablet:mx-[5%] overflow-auto"
      >
        <div
          className="flex justify-center items-center 
          w-24 h-24 mobile:w-24 mobile:h-24 smallMobile:w-20 smallMobile:h-20 spinY"
        >
          <img
            src={work.logo}
            alt="Work logo"
            className="object-cover w-12 h-12 
              tablet:w-16 tablet:h-16
              breakpoint:w-20 breakpoint:h-20
              laptop:w-24 laptop:h-24
            "
          />
        </div>

        <div
          className="flex flex-col justify-center items-center
          tablet:items-end tablet:justify-end tablet:w-[70%]
          laptop:w-[75%]
          "
        >
          <p
            className="text-gray-600 text-xs font-japan
            laptop:text-sm"
          >
            {work.period}
          </p>
          <Typewriter
            className="mt-1  font-japan-bold text-sm breakpoint:text-md laptop:text-lg
            "
            text={`${work.position} at ${work.company}`}
            delay={0.1}
          />

          {<AnimatedContent isActive={isActive} work={work} />}
          <div
            name="icon-container"
            className="flex justify-center mt-8 tablet:justify-end
              breakpoint:mt-10
              desktop:mt-8
            "
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            <img
              src={isActive ? up_icon : down_icon}
              alt={isActive ? "Up Icon" : "Down Icon"}
              className="w-6 h-6 "
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};
