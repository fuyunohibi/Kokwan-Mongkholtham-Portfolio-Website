import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from '../components/Typewriter';
import { projects } from '../data';
import SectionTitle from '../components/SectionTitle'
import useCheckScreenSize from '../utils/useCheckScreenSize';
import { up_icon, down_icon } from '../assets/images/WORK';

const Works = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleProjectClick = (index) => {
    setActiveProject(activeProject === index ? null : index);
  }

  return (
    <section 
      id='works-section' 
      className='relative bg-background overflow-hidden min-h-full'
    >
      <div name='inner' className='flex flex-col mx-[5%] pb-[8%] pt-[3%]'>
         <SectionTitle title='Works' />
         <div className='mt-6'>
            {projects.map((project, index) => (
              <WorkCard
                key={project.id}
                project={project}
                onClick={() => handleProjectClick(index)}
                isActive={activeProject === index}
              />
            ))}  
         </div>
      </div>
    </section>
  );
};

const AnimatedContent = ({ isActive, project }) => (
  <AnimatePresence>
    {isActive && (
      <motion.div
        key={project.title}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      > 
        <div 
          onClick={(e) => e.stopPropagation()}
          name='video-contaienr' 
          className='flex justify-center'
        >
          <video 
            src={project.video} 
            alt={project.title} 
            name="work-video" 
            className='mt-10 mb-10 laptop:mb-12 w-[80%] tablet:w-[50%] laptop:w-[40%]' 
            controls
            poster={project.image}
          />
        </div>
        <div name='developer-container' className='flex-col items-center  space-y-4 mb-5'>
          <div className='flex justify-center'>
             <Typewriter text={`「Developed by」 |`} delay={0.1} className='font-japan-bold text-black-100 text-sm text-center mr-3' />
             <Typewriter text={`${project.developed_by}`} delay={0.1} className='font-japan-bold text-black-100 text-sm text-center' />
          </div>
          <div className={`${project.developers ? '' : 'hidden'} flex justify-center`}>
              {project.developers && project.developers.map((developer, index) => {
                return (
                  <Typewriter 
                    key={developer.name}
                    text={`${developer.name}${(index === project.developers.length - 1) ? '' : ',ㅤ'}`} 
                    delay={0.1} 
                    className='font-japan-bold text-black-100 text-sm text-center' 
                  />
                );
              })}
          </div>
        </div>
        <div className='flex flex-col mx-[5%]'>
          <p name="work-description" className='font-japan text-gray-800 text-sm text-center'>{project.description}</p>
          <div className="mt-5 flex flex-wrap justify-start tablet:mt-10 tablet:justify-center">
            {project.tags && project.tags.map((tag) => (
                <div key={tag.name} className="bg-gray-200 px-1 py-1 mr-2 mb-1 mt-2 rounded-md">
                    <p className="font-japan text-gray-700 text-xs ">#{tag.name}</p>
                </div>
            ))}
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const WorkCard = ({ project, onClick, isActive }) => {
  const isTablet = useCheckScreenSize('tablet');
  return (
    <>
      <motion.div 
        layout 
        name="work-container" 
        onClick={onClick}
        className='flex flex-col items-center tablet:flex-row tablet:justify-between tablet:items-start tablet:mx-[5%] overflow-auto'
      >
        <Typewriter className='mb-10 tablet:mt-4 font-japan-bold text-sm breakpoint:text-md laptop:text-lg' text={`「${project.label}」`} delay={0.1} />
        <h3 className='font-vanilla text-primary text-6xl '>{project.name}</h3>
        {!isTablet && <AnimatedContent isActive={isActive} project={project} />}
      </motion.div>
      {isTablet && <AnimatedContent isActive={isActive} project={project} />}
      <div 
        name='icon-container' 
        className='flex justify-center mt-6 tablet:justify-end tablet:mr-[5%]' 
        onClick={(e) => {e.stopPropagation(); onClick();}}
      >
        <img src={isActive ? up_icon : down_icon} alt={isActive ? 'Up Icon' : 'Down Icon'} className='w-6 h-6 ' />
      </div>
      <hr className='mt-6 mb-12 tablet:mb-20 pencil-style'/>
    </>
  );
};
 
export default Works;