import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  figma,
  netflix,
  studiofitness,
  timeshift,
  olxclone,
  todo,
  usermanagement,
  s3,
  jwt,
  passport,
  oracle,
  allianz,
  freelancer
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Business Operations",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "oracle",
    icon: oracle,
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
    name: "passport",
    icon: passport,
  },
  {
    name: "s3",
    icon: s3,
  },
  {
    name: "jwt",
    icon: jwt,
  },
  
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "December 2022 - Present",
    points: [
      "Proven expertise in full-stack MERN development, implementing advanced features for robust and scalable applications.",
      "Consistently met project timelines, demonstrating high efficiency across multiple MERN stack projects.",
      "Delivered client satisfaction through high-quality solutions, exceeding expectations and garnering positive feedback.",
      "Showcased problem-solving skills and adaptability by resolving complex technical challenges with innovative solutions.",
    ],
  },
  {
    title: "Business Operations Expert",
    company_name: "Allianz Technology",
    icon: allianz,
    iconBg: "#E6DEDD",
    date: "March 2019 - November 2022",
    points: [
      "Successfully optimized core business processes, resulting in a 20% increase in overall efficiency.",
      "Organizational Skills & Ability to Effectively Prioritize Work.",
      "Strategic Planning, Project Management and Cross-Functional Collaboration.",
      "Single Point of Contact (SPOC) for overseeing and championing the implementation and management of Bot and Robotics Process Automation initiatives.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Bravo Silpa for doing a fantastic job and holding yourself to a high level in customer service. Thank you for making a positive impact on service delivery. Cheers to you.!",
    name: "Jacinda Da Rosa",
    designation: "Underwriting Head of Multinational - Financial Lines",
    company: "AGCS",
    image: "https://res.cloudinary.com/djd2rpgil/image/upload/v1701794011/portfolio/kaa8vphihpqcghfw7qob.jpg",
  },
  {
    testimonial:
      "Kudos for Silpa Sreekumar! She has been fantastic help to me and recently on multiple accounts and deserves a solid “bravo” for the excellent work.",
    name: "Joseph Ferrone",
    designation: "Account Executive Officer",
    company: "Travelers",
    image: "https://res.cloudinary.com/djd2rpgil/image/upload/v1701794002/portfolio/mknwotjojeefarrzbm8v.jpg",
  },
  {
    testimonial:
      "Just wanted to put in a good word for Silpa Sreekumar. She was diligent in identifying the problem, understanding the cause. She is the one who takes pride in her work and reacts swiftly and efficiently. She is a please to work with.!",
    name: "Blynda Christian",
    designation: "Executive Underwriter",
    company: "Allianz Global Corporate & Specialty",
    image: "https://res.cloudinary.com/djd2rpgil/image/upload/v1701793990/portfolio/mgekd2eh1r8juowc3nln.jpg",
  },
];

const projects = [
  {
    name: "StudioFitness",
    description:
      "Web-based platform comprehensive solution designed to streamline and enhance the operations of fitness centers by providing various features and live sessions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: studiofitness,
    source_code_link: "https://github.com/silpasheela/StudioFitness",
  },
  {
    name: "TimeShift",
    description:
      "An e-commerce website dedicated to luxury watches which is designed to be user-friendly, allowing customers to easily browse through the collection.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "ejs",
        color: "pink-text-gradient",
      },
    ],
    image: timeshift,
    source_code_link: "hhttps://github.com/silpasheela/TIME-Shift-e-commerce-Project",
  },
  {
    name: "Netflix Clone",
    description:
      "A replica of the popular streaming service, Netflix, using React.js and TMDB which provides a user-friendly interface experience that Netflix offers.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "TMDB",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/silpasheela/Netflix-Clone-React",
  },
  {
    name: "To-Do App",
    description:
      "The application features an intuitive interface where users can add new tasks, mark tasks as completed, and delete tasks managed using React's state management.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/silpasheela/ToDo-React",
  },
  {
    name: "OLX Clone",
    description:
      "A project involved in creating a clone of the popular online marketplace, OLX, using React which incorporates the feature of detailed item view when clicked.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "cloudinary",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: olxclone,
    source_code_link: "https://github.com/silpasheela/OLX-Clone-React",
  },
  {
    name: "User Management",
    description:
      "A comprehensive User Management System using React. The application provides an efficient platform for managing user data within an organization.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
    ],
    image: usermanagement,
    source_code_link: "https://github.com/silpasheela/MERN-User-Management-System",
  },
];

export { services, technologies, experiences, testimonials, projects };
