import React from "react";
import RandomGradientBlock from "../components/randomGradientBlock";
import {
  frontend_icon,
  backend_icon,
  tools_icon,
} from "../assets/images/SKILLS";
import { motion } from "framer-motion";
import Typewriter from "../components/Typewriter";
import { containerVariants, itemVariants } from "../utils/motion";
import { skills } from "../data";
import SectionTitle from "../components/SectionTitle";
import MetaTag from "../components/MetaTag";
import { HelmetProvider } from "react-helmet-async";

const Skills = () => (
  <HelmetProvider>
    <section id="skills-section" className="bg-background">
      <MetaTag
        title="Skills Page - Kokwan Portfolio Website"
        description="Welcome to my portfolio website."
      />
      <div name="inner" className="flex flex-col mx-[5%]">
        <SectionTitle title="Skills" />
        <SkillsContainer
          title="Front End Development"
          skills={skills.FrontEnd}
          icon={frontend_icon}
        />
        <SkillsContainer
          title="Back End Development"
          skills={skills.BackEnd}
          icon={backend_icon}
        />
        <SkillsContainer
          title="Software Tools"
          skills={skills.Tools}
          icon={tools_icon}
        />
      </div>
    </section>
  </HelmetProvider>
);

const SkillsContainer = ({ title, skills, icon }) => (
  <motion.div
    className="flex flex-wrap gap-7 pb-10"
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
  >
    <SkillCard title={title} skills={skills} icon={icon} />
  </motion.div>
);

const SkillCard = ({ title, skills, icon }) => (
  <div className="flex flex-col w-full relative overflow-hidden pb-5 breakpoint:pb-16 laptop:pb-32 ">
    <Typewriter
      text={title}
      delay={0.05}
      className="mt-6 font-japan-bold relative text-sm breakpoint:text-md laptop:text-lg text-center tablet:text-start"
    >
      <img
        src={icon}
        alt={icon + " icon"}
        className="w-5 h-5 inline-block mr-2"
      />
    </Typewriter>
    <SkillsGrid skills={skills} />
  </div>
);

const SkillsGrid = ({ skills }) => (
  <motion.div
    className={`tablet:-mt-8 desktop:-mt-12 grid grid-cols-3 tablet:grid-cols-4 laptop:grid-cols-5 desktop:grid-cols-6 gap-5 px-3 `}
    variants={itemVariants}
  >
    {skills.map((skill) => (
      <SkillItem skill={skill} key={skill.id || skill.title} />
    ))}
  </motion.div>
);

const SkillItem = ({ skill }) => (
  <div className="relative tablet:-mb-14 breakpoint:-mb-20 laptop:-mb-28 desktop:-mb-40">
    <motion.div
      name="combined-container"
      whileHover={{
        scale: 1.08,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 0.95 }}
      className="hover:drop-shadow-xl"
    >
      <motion.div
        name="icon-container"
        className="flex flex-col items-center justify-center w-[100%] mt-10  tablet:p-8 breakpoint:p-6 desktop:p-12 bg-transparent transition-all duration-200 relative"
      >
        <RandomGradientBlock>
          <div className="w-24 h-24 mobile:w-32 mobile:h-32 smallMobile:w-20 smallMobile:h-20 flex justify-center items-center spinY">
            <img
              src={skill.icon}
              alt="Skill image"
              className="w-12 h-12 object-cover"
            />
          </div>
        </RandomGradientBlock>
      </motion.div>
      <div
        name="title-expertise-container"
        className="flex justify-start relative -top-3 smallMobile:-top-1 left-[15%] tablet:-top-11 tablet:left-[20%] breakpoint:-top-10 breakpoint:left-[26%] laptop:left-[25%] desktop:-top-16 desktop:left-[28%]"
      >
        <div
          name="expertise-container"
          className="w-2 mr-[0.6rem] mt-[-0.7rem]"
        >
          <p className="text-gray-500 text-xs font-japan transform rotate-90">
            {skill.expertise}
          </p>
        </div>
        {skill.title_two ? (
          <div name="skills-container" className="flex gap-2 z-10">
            <SplitText text={skill.title} />
            <SplitText text={skill.title_two} />
          </div>
        ) : (
          <SplitText text={skill.title} />
        )}
      </div>
    </motion.div>
  </div>
);

const SplitText = ({ text }) => (
  <p className="text-black-100 text-xs breakpoint:text-[1rem] breakpoint:leading-[1.3rem] font-japan mt-[-0.7rem] z-10">
    {text.split("").map((char, index) => (
      <span key={index}>
        {char}
        <br />
      </span>
    ))}
  </p>
);

export default Skills;
