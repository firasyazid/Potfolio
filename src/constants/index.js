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
  tripguide, ecom,
  pilate,
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
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning Developer",
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
    title: "Web & Mobile Developer ",
    company_name: "Parhelion",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2022 - Present",
    points: [
      "Developing and maintaining Web & Mobile applications using React native , node js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Dockerizing the applications, including setting up pipelines and other configurations using Docker."

    ],
  },
  {
    title: "Internship (End of study) | Software Engineer, Full Stack Web/Mobile Application Developer & ML ",
    company_name: "B2M-IT",
    icon: meta,
    iconBg: "#383E56",
    date: "February 2024  - June 2024",
    points: [
"Developping an intelligent health platform :" ,
"Developing a mobile health service app using React Native, Node.js, and MongoDB.",
"Creating a dashboard with Angular, Node.js, and MongoDB.",
"Building a web application based on machine learning to predict diseases in patients for specialists.",
 "Implementing a CI/CD pipeline."





    ],
  },
  {
    title: "Internship MEAN Stack developer",
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
    title: "Internship MERN Stack Developer",
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
    name: "Intelligent Health Mobile Application",
    description:
    "Intelligent Health is a React Native mobile app that connects users with health specialists for remote consultations. The app includes a dashboard for specialists to manage appointments, view patient data, and more. The app also features a machine learning-based disease prediction system.",
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
      {
        name: "Flask",
        color: "pink-text-gradient",
      }
      
    ],
    image: tailwind,
    source_code_link: "https://drive.google.com/file/d/1Ini_6xoSRkzkTYqaX9skz-ttQpFW5RTS/view",
  },
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
    source_code_link: "https://drive.google.com/file/d/14pzzwhVW4jzNWhe0lIHkFb8RhN9SHs9J/view",
  },


  {
    name: "E-Commerce Web Application",
    description:
      "A fully functional e-commerce web application built with Next.js, allowing users to browse products, add them to their cart, and proceed to checkout. The app features user authentication, payment integration, and a responsive design optimized for mobile and desktop views. It includes real-time inventory tracking and an admin panel for managing products and orders.",
    tags: [
      {
        name: "next js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "yellow-text-gradient",
      },
    ],
    image: ecom,  
    source_code_link: "https://drive.google.com/file/d/1mZ82Q2pn90PX4dtcj5cduOvFS5j8yf69/view?usp=sharing",  
  },
  
 

  {
    name: "Pilates Mobile Application",
    description:
    "A mobile application for Pilates enthusiasts, offering personalized workout routines based on user goals and fitness levels. The app includes exercise tutorials, progress tracking, online reservations for classes, and subscription-based access to premium content.",
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
        name: "fitness",
        color: "orange-text-gradient",
      },
    ],
    image: pilate, 
    source_code_link: "https://drive.google.com/file/d/19RV5FGh5Qqu7cK3O3gnVucKp18OiunRM/view?usp=sharing",  
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
    source_code_link: "https://drive.google.com/file/d/1CbHWAINUdzsH45PVbsLmlVCabt-g3dqm/view",
  },
  
  {
    name: "Symptom-Based Disease Prediction Web Application with Machine Learning",
    description:
    "This web application utilizes a five machine learning models to predict diseases based on user-input symptoms. Users can input their symptoms, and the model will analyze them to provide potential disease predictions.",
     tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "Google Colab",
        color: "pink-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
    ],
    image: tesla,
    source_code_link: "https://drive.google.com/file/d/1CZZeao5r9RThe1XbSUEsAZc0bD_vsz3U/view?usp=sharing",
  },
  {
    name: "Mobile Car Rental Application",
    description:
    "A mobile car rental application using React Native and Node.js. The application allows users to search, book, and manage car rentals in real-time. It includes geolocation features, notifications, and an intuitive user interface for an optimal user experience.",
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
    image: redux,
    source_code_link: "https://drive.google.com/file/d/1Eg376QpWflGgiH3HDVtAmu4scnaP70Ou/view",
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
    source_code_link: "https://drive.google.com/file/d/1j-lSPOy7a6qyqEHi_oxeLQiB3iF64so9/view",
  },
];

export { services, technologies, experiences, testimonials, projects };
