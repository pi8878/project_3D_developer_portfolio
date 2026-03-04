import {
// meta,
//   starbucks,
//   tesla,
//   shopify,
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
  cyb,
  d6,
  scsu,
  carrent,
  jobit,
  tripguide,
  trackai,
  threejs,
  resai,
  presence,
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
    title: "Game Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technology/Coding Instructor",
    company_name: "CyberTeck Academy",
    icon: cyb, 
    iconBg: "#383E56",
    date: "August 2025 - Current",
    points: [
      "Delivering engaging instruction in Minecraft Programming, Game Design, Animation, and Lego Robotics for 8 to 12 student.",
      "Maintaining an organized, and on-time learning environment while fostering creativity and interest in technology.",
      "Set up laptops and classroom equipment to ensure smooth operation of technology-based lessons.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Density6",
    icon: d6,
    iconBg: "#E6DEDD",
    date: "March 2024 - Current",
    points: [
      "Designing and implementing cloud-based and cybersecurity solutions, improving system scalability and resilience",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Prototyped next-gen AI and AR/VR applications, integrating machine learning and real-time data visualizations.",
    ],
  },
  {
    title: "Visualization Laboratory Intern",
    company_name: "St. Cloud State University",
    icon: scsu,
    iconBg: "#383E56",
    date: "May 2023 - August 2023",
    points: [
      "Enhanced rendering speeds by 20% through 3D model optimization for Unity3D-based VR simulations.",
      "Applied Blender to adjust UV mapping and improve visual fidelity and realism in AR/VR models.",
      "Contributed to the creation of immersive user interfaces by embedding interactive elements into simulations.",
    ],
  },
  {
    title: "Research Assistant, Preservation of Endangered Language",
    company_name: "St. Cloud State University",
    icon: scsu,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - May 2023",
    points: [
      "Built a Text-to-Speech synthesis system to help revitalize Betine, an endangered language from Côte d'Ivoire",
      "Applied audio processing and machine learning models to improve synthesized voice clarity and realism",
      "Streamlined PSOLA analysis to merge different WAV files, improving playback and engagement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Resume Grader",
    description:
      "Use AI to help job seekers improve their resumes and increase their chances of landing interviews.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "GoogleStudio",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: resai,  //carrent
    source_code_link: "https://github.com/pi8878/ai-resume-architect",
  },
  {
    name: "Job Track AI",
    description:
      "Web application that enables users to track of job applications and manage every stage of the job application from application to interview to offer. (link to website) no code ",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "GeminiAI api",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
    ],
    image: trackai, //jobit
    source_code_link: "https://jobtrack-ai.vercel.app/",
  },
  {
    name: "Subscription API",
    description:
      "A production ready RESTful API for managing user subscriptions with automated renewal reminders, rate limiting, and  secure authenticatioin. Upstash and QStash Workflows, Arcjet, and Nodemailer.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: presence, //tripguide
    source_code_link: "https://github.com/pi8878/subscription_api",
  },
];

export { services, technologies, experiences, testimonials, projects };
