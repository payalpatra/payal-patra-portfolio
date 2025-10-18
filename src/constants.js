// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Experience Section Logo's
import fisLogo from "./assets/company_logo/fis_logo.jpeg";
import foxmulaLogo from "./assets/company_logo/foxmula_logo.jpeg";

// Education Section Logo's
import schoolLogo from "./assets/education_logo/school_logo.png";
import collegeLogo from "./assets/education_logo/college_logo.jpeg";

// Project Section Logo's
import RapydPaymentSystem from "./assets/work_logo/RapydPaymentSystem.png";
import FoodOrderingSystem from "./assets/work_logo/FoodOrderingSystem.png";
import PharmacySystem from "./assets/work_logo/PharmacySystem.png";
import MemoryBank from "./assets/work_logo/MemoryBank.png";
import AmazonClone from "./assets/work_logo/AmazonClone.png";
import WhatsappClone from "./assets/work_logo/WhatsappClone.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "SASS", logo: sassLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },

      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: fisLogo,
    role: "Software Engineer",
    company: "FIS Gloabal",
    date: "June 2022 - Present",
    desc: "At FIS Global, I developed and maintained key web applications including RIB, COLB, and ROLB, focusing on enhancing functionality and responsiveness to boost user engagement. I later transitioned into mobile development, contributing to the FCB-MB Mobile Banking project using React Native. My role involved resolving critical defects such as UI layout inconsistencies and data synchronization issues, ensuring a smooth and reliable user experience. I also played a pivotal role in bridging collaboration between web and mobile teams, streamlining workflows and improving overall project outcomes.",
    skills: [
      "JavaScript",
      "React JS",
      "React Native",
      "Material UI",
      "HTML",
      "CSS",
      "Redux",
      "Microfrontend",
      "Postman",
      "Appium",
    ],
  },

  {
    id: 1,
    img: foxmulaLogo,
    role: "Frontend Developer Intern",
    company: "Foxmula",
    date: "Mar 2021 - May 2021",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "SASS"],
  },
];

export const education = [
  {
    id: 0,
    img: collegeLogo,
    school: "CV Raman Global University, Bhubaneswar ",
    date: "Aug 2008 - April 2022",
    desc: "I completed my Bachelor's degree in Computer Science (B.Tech) from CV Raman Global University. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development, I gained practical insights into the world of software development. My time at College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Technology - B.Tech (Computer Science)",
  },
  {
    id: 1,
    img: schoolLogo,
    school: "D.A.V Public School, Bhubaneswar",
    date: "Apr 2016 - March 2018",
    desc: "I completed my class 12 education from D.A.V Public School, Bhubaneswar, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "CBSE(XII) - PCM",
  },
];

export const projects = [
  {
    id: 0,
    title: "Rapyd Payment System",
    description:
      "This is a Fullstack Payment Platform that supports sending and recieving of payments. This application uses Rapyd payment APIs to handle the payments of the user.",
    image: RapydPaymentSystem,
    tags: ["reactsjs", "nodejs", "styled-components", "mongoose", "expressjs"],
    github: "https://github.com/payalpatra/RapydPay-Payment-System",
  },
  {
    id: 1,
    title: "Food Ordering System",
    description:
      "This application has 3 roles. The Customer can register and Order any Food item, access all his past orders but can not access the orders of other customers. The admin can access the orders and information of all the users. It also stores sessions/cookies.",
    image: FoodOrderingSystem,
    tags: ["nodejs", "mongodb", "scss", "expressjs", "tailwind-css"],
    github: "https://github.com/payalpatra/Food-Ordering-System",
  },
  {
    id: 2,
    title: "Pharmacy Application",
    description:
      "This is a Mern-Stack application. The user can shop for medicines according to their desired category. This application also supports bank payments for buying products.",
    image: PharmacySystem,
    tags: [
      "redux",
      "nodejs",
      "javascript",
      "css",
      "mongodb",
      "expressjs",
      "reactsjs",
    ],
    github: "https://github.com/payalpatra/Pharmacy-Management-Application",
  },
  {
    id: 3,
    title: "Memory Bank",
    description:
      "This is a MERN stack application. This is like a social media app where you can create your own post like, edit, and delete the existing posts. The interface of the application may look simple but it has all the important functionalities.",
    image: MemoryBank,
    tags: [
      "redux",
      "nodejs",
      "javascript",
      "express",
      "mongodb",
      "reactjs",
      "material-ui",
    ],
    github: "https://github.com/payalpatra/Memory-Bank-App",
  },
  {
    id: 4,
    title: "Amazon Clone",
    description:
      "This is basically a clone of the well-known E-commerce website Amazon. It uses Firebase for User Authentication. The specialty of this clone is it uses 3 different styling methods.",
    image: AmazonClone,
    tags: [
      "javascript",
      "html",
      "reactjs",
      "react-router-dom",
      "react-styled-component",
    ],
    github: "https://github.com/payalpatra/Amazon-Clone",
  },
  {
    id: 5,
    title: "Whatsapp Clone",
    description:
      "This is a Full-stack Chat Application that resembles Whatsapp with google authentication. Any user can log in with their Google account and Create a Room for conversation.",
    image: WhatsappClone,
    tags: [
      "javascript",
      "css3",
      "reactjs",
      "material-ui",
      "google-authentication",
    ],
    github: "https://github.com/payalpatra/Whatsapp__Clone",
  },
];
