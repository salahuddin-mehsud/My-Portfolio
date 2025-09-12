// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/online_study.png';
import agcLogo from './assets/company_logo/online.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/microsoft.png';
import bsaLogo from './assets/education_logo/ibm.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import SocketLogo from './assets/tech_logo/socket_logo.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'Web-Socket', logo: SocketLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "MERN-Stack Developer",
      company: "Online Courses",
      date: "2023 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development.implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Online Courses",
      date: "2023 - Present",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, Python, SQL, C++, DevOps, Web-Socket.",
      skills: [
        "JavaScript",
        "Python",
        "C++",
        "DevOps",
        "HTML",
        "CSS",
        "SQL",
        "NoSQL",
        "Web-Socket",
      ],
    },
  
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Microsoft",
      date: "September 7, 2025",
      grade: "99% / Duration 39 hr",
      desc: "Completed Microsoft Full-Stack course covering Computational Thinking, Algorithms, Programming Principles, C#, Back-End and Full-Stack Web Development, Git/GitHub version control, pseudocode, and program development, gaining hands-on experience in building complete web applications.",
      degree: "Foundations of Coding Full-Stack by Microsoft",
      certLink: "https://coursera.org/share/ff26961293d485ad8e0888bd056cd898",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "IBM",
      date: "September 6, 2025",
      grade: "95% / Duration 9 hr",
      desc: "Completed IBM Introduction to DevOps course, learning DevOps practices including Scrum, CI/CD, Test-Driven Development, Cloud-Native Computing, Microservices, Performance Metrics, and cross-functional collaboration to drive team-oriented culture transformation",
      certLink: "https://coursera.org/share/b7424cd1af2b9ecf81efbddf2b5229d7",
    },
  ];
  
  export const projects = [
  {
    id: 0,
    title: "Car Modifier Website",
    description:
      "A MERN stack app that lets users customize cars with colors, wheels, and accessories in a responsive interface.",
    image: githubdetLogo,
    tags: ["React JS", "Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript", "Three.JS"],
    github: "https://github.com/salahuddin-mehsud/Car_Modifier.git",
    webapp: "https://github.com/salahuddin-mehsud/Car_Modifier.git",
  },
  {
    id: 1,
    title: "Smart Task & Team Manager (Trello + AI)",
    description:
      "A MERN-based task management platform with real-time collaboration, AI-assisted task prioritization, and secure authentication.",
    image: csprepLogo,
    tags: ["React JS", "Node.js", "Express", "MongoDB", "Socket.io", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/salahuddin-mehsud/Smart-Task-Team-Manager.git",
    webapp: "https://github.com/salahuddin-mehsud/Car_Modifier.git",
  },
  {
    id: 2,
    title: "E-Commerce Store with Custom Recommendation Engine",
    description:
      "A MERN e-commerce platform with product listings, secure checkout, and a custom recommendation engine based on user behavior.",
    image: movierecLogo,
    tags: ["React JS", "Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript", "AI"],
    github: "https://github.com/salahuddin-mehsud/E-Commerce-Store.git",
    webapp: "https://github.com/salahuddin-mehsud/Car_Modifier.git",
  },
];
