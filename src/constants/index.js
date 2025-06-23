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
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  sv,
  zipy,
  coursera,
  udemy,
  udemyStack,
  pythonCoursera,
  freecode,
  duke,
  campus,
  mimoWeb,
  mimo1,
  mimoSql,
  pong,
  firstPort,
  gptWhatsapp,
  disney,
  svCertificate,
  zipyReco,
  svReco,
  dimaPic,
  bots,
  stealthTelegram,
  cross_platform,
  apps4all,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "experience",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const services = [
  {
    title: "Frontend developer",
    icon: web,
    titleKey: "services.frontend",
  },
  {
    title: "Backend Developer",
    icon: mobile,
    titleKey: "services.backend",
  },
  {
    title: "Bots & Automation Developer",
    icon: backend,
    titleKey: "services.bots",
  },
  {
    title: "Mobile Developer",
    icon: creator,
    titleKey: "services.mobile",
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
    name: "Python",
    icon: python,
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
    title: "Web & Mobile App Developer",
    company_name: "Apps4All",
    icon: apps4all,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Developing comprehensive web and mobile applications using modern tech stacks.",
      "Building responsive web applications with React, Next.js, and TypeScript.",
      "Creating cross-platform mobile apps using React Native and Flutter.",
      "Implementing full-stack solutions with Node.js, MongoDB, and cloud services.",
    ],
  },
  {
    title: "Bots and Automation Developer",
    company_name: "Bots4All",
    icon: bots,
    iconBg: "#E6DEDD",
    date: "2022 - 2023",
    points: [
      "Specialized in automation creating advanced bots for Telegram, WhatsApp, Binance, and more.",
      "Developed tailored scraping bots and various automation solutions,",
      "efficiently streamlining digital tasks for diverse client needs.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Zipy",
    icon: zipy,
    iconBg: "#E6DEDD",
    date: "2020 - 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Learning from the best, about best practices related to programing and newer frameworks and libraries",
      "Thinking about efficiency of both server and client side.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Outstanding student who consistently demonstrated exceptional aptitude and dedication. A top-performer with an A+ honor. Highly recommended.",
    name: "Yaniv Almog",
    designation: "Teacher",
    signedFile: svReco,
    company: "Sv-college",
    image:
      "https://media.licdn.com/dms/image/D4D03AQGLYrAKBVZd0g/profile-displayphoto-shrink_800_800/0/1689979504386?e=1716422400&v=beta&t=5FLfuJdsTZ7HsPRYd9a9nKCVYHGf9RyuXhGe4RNm4Tw",
  },
  {
    testimonial:
      "I had the pleasure of working with Niv.  He is eager to learn new skills and technologies. He is also a great team player who communicates well and collaborates effectively with other developers.  I highly recommend  Niv for any frontend development roles",
    name: "Yura",
    designation: "Senior Frontend",
    signedFile: zipyReco,
    company: "Zipy",
    image: "https://ca.slack-edge.com/T0XM0LL0J-UAQ1UFNBT-7eecbbd5dbb1-72",
  },
  {
    testimonial:
      "Strong Recommendation for Niv Barcechet - Exceptional Front-End Programmer I am writing to highly recommend Niv as an exceptional front-end programmer. During his tenure at Zipy, Niv's expertise in React, Next.js, and Typescript has consistently impressed us.",
    name: "Dima",
    designation: "CEO",
    signedFile: zipyReco,
    company: "Zipy",
    image: dimaPic,
  },
];

const tagsColors = {
  html: "orange-text-gradient",
  css: "pink-text-gradient",
  react: "blue-text-gradient",
  js: "green-text-gradient",
  node: "orange-text-gradient",
  mongo: "green-text-gradient",
  sql: "orange-text-gradient",
  gql: "green-text-gradient",
  next: "blue-text-gradient",
  api: "green-text-gradient",
  playwright: "pink-text-gradient",
};

const projects = [
  {
    name: "SMAP - Social Network for Sports",
    description:
      "SMAP is the ultimate social networking platform for sports enthusiasts, often described as 'the Tinder of sports.' This innovative mobile application connects athletes and sports lovers based on their preferred activities, skill levels, and location. Built with Expo React Native for cross-platform compatibility and styled with NativeWindCSS for a sleek, responsive design.",
    tags: [
      {
        name: "Expo React Native",
        color: tagsColors.react,
      },
      {
        name: "NativeWindCSS",
        color: tagsColors.css,
      },
      {
        name: "MongoDB",
        color: tagsColors.mongo,
      },
      {
        name: "Node.js",
        color: tagsColors.node,
      },
      {
        name: "supabase",
        color: tagsColors.api,
      },
    ],
    image: carrent, // Using existing image for now
    link: "#",
    source_code_link: "#",
  },
  {
    name: "Everest College - Complete CRM System",
    description:
      "A comprehensive Customer Relationship Management system designed specifically for educational institutions. This full-scale CRM solution manages students, teachers, and administrators across multiple college locations with advanced sales tracking capabilities and dedicated mobile applications.",
    tags: [
      {
        name: "React",
        color: tagsColors.react,
      },
      {
        name: "Node.js",
        color: tagsColors.node,
      },
      {
        name: "MongoDB",
        color: tagsColors.mongo,
      },
      {
        name: "Expo React Native",
        color: tagsColors.react,
      },
      {
        name: "supabase",
        color: tagsColors.api,
      },
      {
        name: "tailwind CSS",
        color: tagsColors.css,
      },
    ],
    image: jobit, // Using existing image for now
    link: "#",
    source_code_link: "#",
  },
  {
    name: "InfoTech - Engineering CRM & PDF Automation",
    description:
      "InfoTech is a sophisticated CRM system specifically designed for engineering equipment testing and certification. The platform automates the creation of professional PDF forms for various types of engineering equipment testing procedures, ensuring compliance with industry standards.",
    tags: [
      {
        name: "Next.js",
        color: tagsColors.next,
      },
      {
        name: "Tailwind CSS",
        color: tagsColors.css,
      },
      {
        name: "Expo React Native",
        color: tagsColors.react,
      },
      {
        name: "Node.js",
        color: tagsColors.node,
      },
      {
        name: "supabase",
        color: tagsColors.api,
      },
      {
        name: "MongoDB",
        color: tagsColors.mongo,
      },
    ],
    image: tripguide, // Using existing image for now
    link: "#",
    source_code_link: "#",
  },
  {
    name: "Shuk-Sham - Modern Supermarket Network",
    description:
      "Shuk-Sham represents the next generation of e-commerce solutions for supermarket chains. This comprehensive platform combines the power of Next.js for lightning-fast frontend performance with WordPress WooCommerce as a headless CMS backend, providing modern shopping experience.",
    tags: [
      {
        name: "Next.js",
        color: tagsColors.next,
      },
      {
        name: "WordPress",
        color: tagsColors.api,
      },
      {
        name: "WooCommerce",
        color: tagsColors.api,
      },
      {
        name: "Expo React Native",
        color: tagsColors.react,
      },
      {
        name: "tailwind CSS",
        color: tagsColors.css,
      },
      {
        name: "MongoDB",
        color: tagsColors.mongo,
      },
      {
        name: "supabase",
        color: tagsColors.api,
      },
    ],
    image: disney, // Using existing image for now
    link: "#",
    source_code_link: "#",
  },
  {
    name: "Stealth Telegram Extractor",
    description:
      "This tool is a highly efficient Telegram scraper capable of extracting data from private and closed groups undetected. It's designed to avoid blocks and bans, ensuring continuous operation and reliability. Ideal for users needing deep insights from Telegram's exclusive channels without compromising speed or data integrity.",
    tags: [
      {
        name: "Node.js",
        color: tagsColors.node,
      },
      {
        name: "Playwright",
        color: tagsColors.playwright,
      },
    ],
    image: stealthTelegram,
    link: "https://github.com/Nivnivu/telebot",
    source_code_link: "https://github.com/Nivnivu/telebot",
  },
  {
    name: "Cross-Platform Dispatcher",
    description:
      "Cross-Platform Dispatcher is an API that instantly relays messages from a Telegram channel to Facebook, WhatsApp, and X (the new Twitter). This tool simplifies multi-platform engagement, ensuring messages are uniformly distributed across key social networks, enhancing reach and connectivity with ease. Ideal for seamless digital communication strategies.",
    tags: [
      {
        name: "Node.js",
        color: tagsColors.node,
      },
      {
        name: "Facebook Graph API",
        color: tagsColors.api,
      },
      {
        name: "Whatsapp API",
        color: tagsColors.api,
      },
      {
        name: "X API",
        color: tagsColors.api,
      },
      {
        name: "Telegram API",
        color: tagsColors.api,
      },
    ],
    image: cross_platform,
    link: "https://github.com/Nivnivu/crossPlatforms",
    source_code_link: "https://github.com/Nivnivu/crossPlatforms",
  },
];

const certificates = [
  {
    name: "Full-Stack Development",
    titleKey: "certificates.fullStack",
    image: svCertificate,
    verifyLink: "https://www.nivbarsh.com/assets/svc-8afcecef.png",
  },
  {
    name: "Full-Stack Bootcamp",
    titleKey: "certificates.bootcamp",
    image: udemyStack,
    verifyLink:
      "https://www.udemy.com/certificate/UC-008e28ba-d63b-4585-bd93-ad8f8c99f27a/",
  },
  {
    name: "Python For Everybody with honor",
    titleKey: "certificates.python",
    image: pythonCoursera,
    verifyLink:
      "https://www.coursera.org/account/accomplishments/verify/L4CY4QXLX2QC",
  },
  {
    name: "Data Science Math Skills",
    titleKey: "certificates.dataScience",
    image: duke,
    verifyLink:
      "https://www.coursera.org/account/accomplishments/verify/Q7SUGZUMYWET",
  },
  {
    name: "Responsive Web Design",
    titleKey: "certificates.webDesign",
    image: freecode,
    verifyLink:
      "https://www.freecodecamp.org/certification/Nivbarsh/responsive-web-design",
  },
  {
    name: "Self.py",
    titleKey: "certificates.selfPy",
    image: campus,
    verifyLink:
      "https://courses.campus.gov.il/certificates/30472d809b114cf8b8115b202412ee82",
  },
  {
    name: "Python",
    titleKey: "certificates.pythonCert",
    image: mimoWeb,
    verifyLink:
      "https://nivnivu.github.io/personal-portfolio/static/media/mimo.5a743441184fb17644e5.JPG",
  },
  {
    name: "Web Development",
    titleKey: "certificates.webDev",
    image: mimo1,
    verifyLink:
      "https://nivnivu.github.io/personal-portfolio/static/media/mimo-web.0d53f55ab726acf01184.JPG",
  },
  {
    name: "SQL",
    titleKey: "certificates.sql",
    image: mimoSql,
    verifyLink:
      "https://nivnivu.github.io/personal-portfolio/static/media/mimo-sql.136aa7edc11cece06b3f.JPG",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  certificates,
};
