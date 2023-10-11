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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  veb,
  SpendWise,
  CryptoWorld,
  UpstoneEstates,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Vebholic",
    icon: veb,
    iconBg: "#383E56",
    date: "Mar 2023 - Present",
    points: [
      "Delivered full-stack solutions with proficiency in ReactJS, NodeJS, ExpressJS, MongoDB and TypeScript",
      "Formulated intricate MongoDB queries aggregation pipelines.",
      "Optimised development experience in many projects by implementing Vite.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Upstone Estates",
    description:
      "Web application that enables users to input their properties with images with an amazing dynamic dashboard and also we can watch the properties of other dealers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: UpstoneEstates,
    source_code_link: "https://github.com/DhruvKhandelwal21/Upstone-estate",
    hosted_link: "https://upstone-estate-7c12.vercel.app",
  },
  {
    name: "Spend Wise",
    description:
      "Web-based platform that allows users to login with complete authentication, add their expenses, incomes, search and analysis of expenditure through react-charts.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: SpendWise,
    source_code_link:
      "https://github.com/DhruvKhandelwal21/Expense-Tracker-Frontend",
    hosted_link: "https://expense-tracker-frontend-virid.vercel.app/",
  },
  {
    name: "Cryptoworld",
    description:
      "An amazing frontend application which displays the analysis(Price, Market Cap, Daily-Change) of top crypto-currencies along with the latest news.",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: CryptoWorld,
    source_code_link: "https://github.com/DhruvKhandelwal21/Cryptoworld",
    hosted_link: "https://master--cryptozworld.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
