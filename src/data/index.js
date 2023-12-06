import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  redux,
  gitkraken,
  zustand,
  tailwind,
  framerMotion,
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
  pecgoLogo,
} from "../assets";

import {
  home_active,
  introduction_active,
  about_active,
  works_active,
  skills_active,
  projects_active,
  contact_active,
  home_inActive,
  introduction_inActive,
  about_inActive,
  works_inActive,
  skills_inActive,
  projects_inActive,
  contact_inActive,
} from "../assets/images/NAVBAR";

import {
  meowXMonster_image,
  meowXMonster_demo,
  SE_connect_image,
  SE_connect_demo,
  florave_image,
  forgetmenot_image,
  narcissus_image,
  membound_image,
  florave_demo,
  forgetmenot_demo,
  narcissus_demo,
  membound_demo,
} from "../assets/projects";

/* NAVIGATION LINKS */
export const navLinks = [
  {
    name: "Home",
    id: "mainVisual-section",
    activeIcon: home_active,
    inActiveIcon: home_inActive,
  },
  {
    name: "Introduction",
    id: "introduction-section",
    activeIcon: introduction_active,
    inActiveIcon: introduction_inActive,
  },
  {
    name: "About",
    id: "about-section",
    activeIcon: about_active,
    inActiveIcon: about_inActive,
  },
  {
    name: "Works",
    id: "works-section",
    activeIcon: works_active,
    inActiveIcon: works_inActive,
  },
  {
    name: "Skills",
    id: "skills-section",
    activeIcon: skills_active,
    inActiveIcon: skills_inActive,
  },
  {
    name: "Projects",
    id: "projects-section",
    activeIcon: projects_active,
    inActiveIcon: projects_inActive,
  },
  {
    name: "Contact",
    id: "contact-section",
    activeIcon: contact_active,
    inActiveIcon: contact_inActive,
  },
];

/* SKILLS DATA */
export const skills = {
  FrontEnd: [
    // Advanced skills
    {
      title: "React.js",
      title_two: "React Native",
      expertise: "advanced",
      icon: reactjs,
    },
    {
      title: "Next.js",
      expertise: "advanced",
      icon: nextjs,
    },
    {
      title: "Tailwind",
      expertise: "advanced",
      icon: tailwind,
    },
    {
      title: "Zustand",
      expertise: "advanced",
      icon: zustand,
    },
    // Intermediate skills
    {
      title: "Framer Motion",
      expertise: "intermediate",
      icon: framerMotion, 
    },
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
      title: "Redux",
      expertise: "intermediate",
      icon: redux,
    },
    {
      title: "Three.js",
      expertise: "basic",
      icon: threejs,
    },
  ],
  BackEnd: [
    // Intermediate skills
    {
      title: "Python",
      expertise: "intermediate",
      icon: python,
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
      expertise: "intermediate",
      icon: mongodb,
    },
    // Basic skills
    {
      title: "Django",
      expertise: "basic",
      icon: django,
    },
    {
      title: "MySQL",
      expertise: "basic",
      icon: mysql,
    },
  ],
  Tools: [
    // Advanced skills
    {
      title: "Gitkraken",
      expertise: "advanced",
      icon: gitkraken,
    },
    {
      title: "Figma",
      expertise: "advanced",
      icon: figma,
    },
    // Intermediate skills
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
  ],
};

export const workExperience = [
  {
    id: 1,
    company: "Pecgo",
    team: "Developer",
    position: "Junior Frontend Developer",
    period: "Aug 2023 - Dec 2023",
    location: "Bangkok, Thailand",
    description:
      "During my time as a Junior Frontend Developer at Pecgo, I was part of a dynamic team focused on improving our web applications. My role involved skillfully alternating between React.js and React Native to ensure cohesive and functional application performance. In collaboration with my team, I contributed to developing responsive designs, achieving a seamless and adaptable user experience on various devices. My work with Tailwind CSS and Framer Motion played a significant part in enhancing UI elements with both functionality and visual appeal. One of my collective achievements was elevating Pecgo's SEO score to a perfect 100, a testament to our commitment to writing clean, efficient code and adhering to SEO best practices.",
    logo: pecgoLogo,
    skills: [
      {
        name: "react.js",
      },
      {
        name: "next.js",
      },
      {
        name: "react-native",
      },
      {
        name: "tailwind",
      },
      {
        name: "zustand",
      },
    ],
  },
];

/* PROJECTS DATA */
export const projects = [
  {
    id: 1,
    name: "SE-Connect",
    label: "Design & Development",
    developed_by: "Team Mesan-Tech",
    developers: [
      {
        name: "Ko-Kwan.M",
      },
      {
        name: "Pochara.W",
      },
      {
        name: "Wit.Y",
      },
    ],
    description:
      "SE-Connect is the epitome of functionality harmonized with aesthetic finesse, where my work in design and front-end development intertwines with the robust backend skills of Pochara.W and Wit.Y. This application offers a sleek, minimalist interface for seamless room and locker reservations. It also boasts a dynamic blog section, catering to the evolving needs of a modern user base. Our commitment to user-centric design is evident in every aspect of SE-Connect, from its intuitive navigation to its elegant visual appeal. Leveraging technologies like React.js, Tailwind CSS, FastAPI, and ZODB, SE-Connect stands as a beacon of modern web development, blending practicality with polished design to create an unparalleled user experience.",
    tags: [
      {
        name: "react.js",
      },
      {
        name: "tailwind",
      },
      {
        name: "zustand",
      },
      {
        name: "fastapi",
      },
      {
        name: "zodb",
      },
    ],
    image: SE_connect_image,
    video: SE_connect_demo,
    source_code_link: "https://github.com/fuyunohibi/SE-Connect",
  },
  {
    id: 2,
    name: "MeowXMonster",
    label: "Game Design & Development",
    developed_by: "Team Computer Architecture",
    developers: [
      {
        name: "Chawalya.M",
      },
      {
        name: "Ko-Kwan.M",
      },
      {
        name: "Pochara.W",
      },
      {
        name: "Ravinan.R",
      },
      {
        name: "Thanyanit.P",
      },
      {
        name: "Wit.Y",
      },
    ],
    description:
      "Dive into the enchanting world of 'MeowXMonster,' a game where imagination runs wild. Crafted by Team Computer Architecture, this 'Plants vs. Zombies'-style adventure blends the allure of mystical creatures with the thrill of strategic gameplay. As players navigate through levels, they encounter an array of charismatic cats and mythical monsters, each bringing a unique flair to the game. Developed with C, Assembly, and Raylib, 'MeowXMonster' not only challenges players’ strategic skills but also immerses them in a whimsically chaotic world. It's an escapade that captures hearts with its quirky charm and clever game mechanics.",
    tags: [
      {
        name: "c",
      },
      {
        name: "assembly",
      },
      {
        name: "raylib",
      },
    ],
    image: meowXMonster_image,
    video: meowXMonster_demo,
    source_code_link: "https://github.com/fuyunohibi/MeowXMonster",
  },
  {
    id: 3,
    name: "Narcissus",
    label: "Design & Development",
    developed_by: "Team Mesan-Tech",
    developers: [
      {
        name: "Ko-Kwan.M",
      },
      {
        name: "Pochara.W",
      },
      {
        name: "Wit.Y",
      },
    ],
    description:
      "Narcissus, named after the simple yet captivating Narcissus flower, represents my initial foray into the world of React.js. This criminal recording system blends C++'s backend robustness with Node.js endpoints, creating a unique and efficient platform for managing criminal data. Our team's debut project, Narcissus is a straightforward, yet functional system, showcasing our growing skills with Tailwind and modern web technologies. It marks the start of our journey, reflecting both learning and resilience in new tech landscapes.",
    tags: [
      {
        name: "react.js",
      },
      {
        name: "tailwind",
      },
      {
        name: "nodejs",
      },

      {
        name: "c++",
      },
    ],
    image: narcissus_image,
    video: narcissus_demo,
    source_code_link: "https://github.com/",
  },
  {
    id: 4,
    name: "Floravé",
    developed_by: "Ko-Kwan.M",
    label: "Design & Development",
    description:
      "Floravé is a testament to the elegance and fluidity of React Native. It's an experimental app that showcases the beauty of animations in a mobile environment. Inspired by the graceful movements of flowers in a breeze, Floravé allows users to explore images through a unique sliding animation that mimics the delicate dance of petals. This project was a journey into the depths of React Native, focusing on creating an experience that is both minimalistic and captivating, much like the subtle allure of a blooming flower.",
    tags: [
      {
        name: "react-native",
      },
      {
        name: "redux",
      },
    ],
    image: florave_image,
    video: florave_demo,
    source_code_link: "https://github.com/",
  },
  {
    id: 5,
    name: "Forgetme-Not",
    developed_by: "Ko-Kwan.M",
    label: "Design & Development",
    description:
      "Forgetme-Not, a part of the flower-inspired app suite alongside Floravé, is a minimalist yet powerful reminder application. Echoing the delicate and memorable presence of its namesake flower, this app ensures that your important tasks are never forgotten. It provides a user-friendly experience with color palette customization options, mirroring the vibrant variety found in Forget-Me-Not blooms. Developed with React Native and Redux, Forgetme-Not is more than just an organizer; it's a harmonious blend of nature's inspiration and technological convenience, designed to bring efficiency and beauty into daily task management.",
    tags: [
      {
        name: "react-native",
      },
      {
        name: "redux",
      },
    ],
    image: forgetmenot_image,
    video: forgetmenot_demo,
    source_code_link: "https://github.com/",
  },
  {
    id: 6,
    name: "Membound",
    developed_by: "Ko-Kwan.M",
    label: "Design & Development",
    description:
      "Membound holds a special place as the project that marked my entry into the world of programming. As a social media web application, it's designed to create a space where users can freely share their thoughts and ideas, connecting with others in a virtual community. Developed using Python and Django, Membound represents my foundational steps in coding, embodying the learning and passion that fuelled my journey into the tech world.",
    tags: [
      {
        name: "python",
      },
      {
        name: "django",
      },
    ],
    image: membound_image,
    video: membound_demo,
    source_code_link: "https://github.com/",
  },
];
