import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
   
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Mobile developer Freelancer ",
    company_name: "Parhelion",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2022 - Present",
    points: [
      "Developing and maintaining Mobile applications using React native , node js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Dockerizing the applications, including setting up pipelines and other configurations using Docker."

    ],
  },
  {
    title: "Intership MEAN Stack developer",
    company_name: "Parhelion",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "June 2022 - September 2022",
    points: [
      "Design and development of an e-commerce web application using the MEAN stack technology.",
      "Development of the Express.js server for handling HTTP requests and security.",
      "Deployment to production on a Node.js server."
     ],
  },
  {
    title: "Intership MERN Stack Developer",
    company_name: "After Code",
    icon: shopify,
    iconBg: "#383E56",
    date: "February 2021 - June 2021",
    points: [
      "Design and development of a hotel reservation web application using the MERN stack technology.",
       "Implementation of the Node.js server with Express to handle reservation requests and communicate with the MongoDB database.",
     ],
  },
   
];

const testimonials = [
  
  
];

const projects = [
  {
    name: "Delta Cuisine Application",
    description:
    "Delta Cuisine is a React Native mobile app utilizing Node.js and MongoDB. It provides architects with a streamlined platform to consult project estimates, convert measurements, and more. The app offers a user-friendly interface for efficient management of project-related tasks",
     tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node js ",
        color: "pink-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/firasyazid/DeltaCuisineBack-",
  },


  {
    name: "E-commerce web application",
    description:

    "Angular and Node.js power our e-commerce website and dashboard, providing a seamless user interface and robust backend for secure transactions, authentication, and data management.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "node js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      
    ],
    image: jobit,
    source_code_link: "https://github.com/firasyazid/AngularProject",
  },


  {
    name: "Ilo9 Mobile Application",
    description:
 "Ilo9 Mobile App, built with React Native and Node.js, is a service platform akin to Menge, focusing on gardening and related services. It efficiently connects users with reliable service providers for a seamless experience.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/firasyazid/-Mobile-Project-nodejs",
  },
];

export { services, technologies, experiences, testimonials, projects };
