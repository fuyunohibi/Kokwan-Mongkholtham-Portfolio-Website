import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  neovim,
  git,
  figma,
  threejs,
  python,
  django,
  c,
  cpp,
  java,
  mysql,
} from "../assets";

import {
  home_active,
  introduction_active,
  about_active,
  skills_active,
  works_active,
  contact_active,
  home_inActive,
  introduction_inActive,
  about_inActive,
  skills_inActive,
  works_inActive,
  contact_inActive,
} from "../assets/images/NAVBAR";

import {
  florave_demo,
  forgetmenot_demo,
  narcissus_demo,
  membound_demo,
} from "../assets/videos";

/* NAVIGATION LINKS */
export const navLinks = [
   {
      name: 'Home',
      id: 'mainVisual-section',
      activeIcon: home_active,
      inActiveIcon: home_inActive,
   },
   {
      name: 'Introduction',
      id: 'introduction-section',
      activeIcon: introduction_active,
      inActiveIcon: introduction_inActive,
   },
   {
      name: 'About',
      id: 'about-section',
      activeIcon: about_active,
      inActiveIcon: about_inActive,
   },
   {
      name: 'Skills',
      id: 'skills-section',
      activeIcon: skills_active,
      inActiveIcon: skills_inActive,
   },
   {
      name: 'Works',
      id: 'works-section',
      activeIcon: works_active,
      inActiveIcon: works_inActive,
   },
   {
      name: 'Contact',  
      id: 'contact-section',
      activeIcon: contact_active,
      inActiveIcon: contact_inActive,
   }
];


/* SKILLS DATA */
export const skills = {
    FrontEnd: [
      {
        title: "HTML",
        expertise: "intermediate",
        icon: html,
      },
      {
        title: "CSS",
        expertise: "intermediate",
        icon: css,
      },
      {
        title: "JavaScript",
        expertise: "intermediate",
        icon: javascript,
      },
      {
        title: "TypeScript",
        expertise: "intermediate",
        icon: typescript,
      },
      {
        title: "React.js",
        title_two: "React Native",
        expertise: "intermediate",
        icon: reactjs,
      },
      {
        title: "Tailwind",
        expertise: "intermediate",
        icon: tailwind,
      },
      {
        title: "Three.js",
        expertise: "basic",
        icon: threejs,
      },
      {
        title: "Redux",
        expertise: "intermediate",
        icon: redux,
      },
    ],
    BackEnd: [
      {
        title: "Python",
        expertise: "intermediate",
        icon: python,
      },
      {
        title: "Django",
        expertise: "basic",
        icon: django,
      },
      {
        title: "C",
        expertise: "intermediate",
        icon: c,
      },
      {
        title: "Cpp",
        expertise: "intermediate",
        icon: cpp,
      },
      {
        title: "Java",
        expertise: "intermediate",
        icon: java,
      },
      {
        title: "Node.js",
        expertise: "intermediate",
        icon: nodejs,
      },
      {
        title: "MongoDB",
        expertise: "basic",
        icon: mongodb,
      },
      {
        title: "MySQL",
        expertise: "basic",
        icon: mysql,
      }
    ],
    Tools: [
      {
        title: "Neovim",
        expertise: "intermediate",
        icon: neovim,
      },
      {
        title: "Git",
        expertise: "intermediate",
        icon: git,
      },
      {
        title: "Figma",
        expertise: "advanced",
        icon: figma,
      },
    ],
};


/* PROJECTS DATA */
export const projects = [
  {
    id: 1,
    name: 'Narcissus',
    label: 'Design & Development',
    developed_by: 'Team Mesan-Tech',
    developers: [
      {
        name: 'Ko-Kwan.M',
      },
      {
        name: 'Pochara.W',
      },
      {
        name: 'Wit.Y',
      },
    ],
    description: 'Narcissus is a criminal recording system that allows users to record and store information about criminals.',
    tags: [
      {
        name: 'react',
      },
      {
        name: 'tailwind',
      },
      {
        name: 'nodejs',
      },
      
      {
        name: 'c++',
      },
      
    ],
    video: narcissus_demo,
    source_code_link: "https://github.com/",
  },
  {
    id: 2,
    name: 'Floravé',
    developed_by: 'Ko-Kwan.M',
    label: 'Design & Development',
    description:
      'An application that allows users to display images in minimalistic and beautiful ways using a unique sliding animation.',
    tags: [
      {
        name: "react-native",
      },
    ],
    video: florave_demo,
    source_code_link: "https://github.com/",
  },
  {
    id: 3,
    name: 'Forgetme-Not',
    developed_by: 'Ko-Kwan.M',
    label: 'Design & Development',
    description:
      'A minimal but powerful reminder application that allows users to set reminders for their daily activities including color pallette customization.',
    tags: [
      {
        name: "react-native",
      },
      {
        name: "redux",
      },
    ],
    video: forgetmenot_demo,
    source_code_link: "https://github.com/",
  },
  {
    id: 4,
    name: 'Membound',
    developed_by: 'Ko-Kwan.M',
    label: 'Design & Development',
    description: 'Membound is a social media web application that allows users to share their thoughts and ideas with other users.',
    tags: [
      {
        name: 'python',
      },
      {
        name: 'django',
      },
    ],
    video: membound_demo,
    source_code_link: "https://github.com/",
  },
];