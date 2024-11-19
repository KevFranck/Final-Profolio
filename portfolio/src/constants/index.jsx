import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaDiscord,
    FaInstagram,
  } from "react-icons/fa6";
  
  import projectImage1 from "../assets/project1.png";
  import projectImage2 from "../assets/project2.jpeg";
  import projectImage3 from "../assets/project3.jpeg";
  import projectImage4 from "../assets/project4.png";
  import projectImage5 from "../assets/project5.jpg";
  import projectImage6 from "../assets/project6.jpg";
  
  import { RiReactjsLine } from "react-icons/ri";
  import { FaPython } from "react-icons/fa";
  import { SiMongodb } from "react-icons/si";
  import { SiDjango } from "react-icons/si";
  import { FcLinux } from "react-icons/fc";
  import { SiMysql } from "react-icons/si";
  import { FaAws } from "react-icons/fa6";        
  
  export const NAVIGATION_LINKS = [
    { label: "Projects", href: "#projects" },
    { label: "Bio", href: "#bio" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#work" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];
  
  export const HERO = {
    name: "KEVIN OWONA",
    greet: "Hello there! 👋🏻",
    description:
      "I am a Highly motivated and Experienced web developer seeking AWS Cloud Architect certification, combining expertise in scalable web solutions with cloud infrastructure and security",
  };
  
  export const PROJECTS = [
    {
      id: 1,
      name: "Personal Portfolio",
      description:
        "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
      image: projectImage1,
      githubLink: "https://github.com/user/personal-portfolio",
    },
    {
      id: 2,
      name: "UB School Sup",
      description:
        "UB SCHOOL SUP: A comprehensive management software for higher education institutions, streamlining admissions, academics, HR, and finances.",
      image: projectImage2,
      githubLink: "https://github.com/user/ecommerce-platform",
    },
    {
      id: 3,
      name: "UB Stock",
      description:
        "UB Stock is an inventory management software that tracks stock in real-time, tracing products, orders, and deliveries to optimize the supply chain.",
      image: projectImage3,
      githubLink: "https://github.com/user/task-management-tool",
    },
    {
      id: 4,
      name: "Authentication System",
      description:
        "The Python-based REST API authentication software utilizes Knox to secure user access, managing accounts, permissions, and sessions to protect web and mobile applications.",
      image: projectImage4,
      githubLink: "https://github.com/user/weather-app",
    },
    {
      id: 5,
      name: "IoT Smart Home",
      description:
        "The IoT smart home system remotely controls and monitors domestic devices for a more comfortable, energy-efficient, and secure living experience.",
      image: projectImage5,
      githubLink: "https://github.com/user/blog-platform",
    },
    {
      id: 6,
      name: "The Titanic Survival Survival",
      description:
        "The Titanic prediction system uses Machine Learning to forecast passenger survival based on characteristics like age, sex, and social class, analyzing historical data.",
      image: projectImage6,
      githubLink: "https://github.com/user/chat-application",
    },
  ];
  
  export const BIO = [
    "I am a passionate and versatile IT professional, graduated with a DSEP degree in 2018. I began my career as a web application developer at UNIVERS BINAIRE, where I worked from 2018 to 2023, successfully completing several innovative projects.",
    "In parallel with my professional experience, I pursued my studies and obtained my bachelor's degree in 2019, followed by a master's degree in Telecommunications and Computer Science in 2021. I possess solid expertise in various areas, including network administration, web development with HTML, Python, and Django, as well as JavaScript with React. I am also skilled in data analysis, machine learning, IoT, and cloud architecture.",
    "Since December 2023, I have been serving as an IT Engineer in the public sector, where I continue to leverage my skills to contribute to the development and improvement of public IT systems.",
    "Currently, I am preparing for two prestigious certifications: AWS Solutions Architect Associate and Python Certified Associate Program. My determination and commitment to excellence position me as a constantly evolving expert in the field of IT and telecommunications.",
  ];
  
  export const SKILLS = [
    {
      icon: <SiDjango className="text-4xl text-green-300 lg:text-5xl" />,
      name: "Django",
      experience: "2+ years",
    },
    {
      icon: <FaPython className="text-4xl text-yellow-300 lg:text-5xl" />,
      name: "Python",
      experience: "3+ year",
    },
    {
      icon: <SiMysql className="text-4xl text-sky-800 lg:text-5xl" />,
      name: "MySQL",
      experience: "3+ year",
    },
    {
      icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
      name: "MongoDB",
      experience: "1.5+ years",
    },
    {
      icon: <RiReactjsLine className="text-4xl text-blue-400 lg:text-5xl" />,
      name: "React",
      experience: "1+ year",
    },
    {
      icon: <FcLinux className="text-4xl  lg:text-5xl" />,
      name: "Linux",
      experience: "2+ years",
    },
    {
      icon: <FaAws icon="fa-solid fa-coffee" className="text-4xl text-sky-700 lg:text-5xl" />,
      name: "AWS",
      experience: "1+ year",
    },
  ];
  
  export const EXPERIENCES = [
    {
      title: "IT Engineer",
      company: "Public Fonction",
      duration: "December 2023 - Present",
      description:
        "As an IT Engineer in the public sector, I design, develop and implement information systems to support public missions and services, ensuring their security, reliability and efficiency. I work closely with administrative and technical teams to analyze needs and define tailored solutions, while complying with existing standards and regulations. I also ensure the maintenance and updating of existing systems, as well as user training to optimize their use.",
    },
    {
      title: "Wed Developer",
      company: "UNIVERS BINAIRE",
      duration: "September 2018 - December 2023",
      description:
        "As an Application Developer, I designed, developed and implemented innovative software solutions to meet the company's needs, using cutting-edge programming languages and technologies. I worked closely with design and testing teams to create robust, scalable and user-friendly applications, while adhering to quality and security standards. I also participated in the maintenance and continuous improvement of existing applications, resolving technical issues and integrating new features to enhance user experience. ",
    },
    {
      title: "Sales Engineer",
      company: "Afrikanet Online SARL",
      duration: "February 2018 - August 2018",
      description:
        "As a Sales Engineer, I was responsible for promoting and selling satellite internet access solutions to potential and existing customers, assessing their needs and providing tailored solutions. I also performed installations and configurations of satellite data transmission equipment at customer sites, while providing training and support on products and services. I managed sales, revenue, and customer relationships, identifying business development opportunities and proposing strategies to leverage them.",
    },
  ];
  
  export const EDUCATION = [
    {
      degree: "Master in Telecommunication and Computer Science",
      institution: "University Institute of Science and Technology of Yaounde",
      duration: "September 2012 - June 2014",
      description:
        "The Master's degree in Telecom and Computer Science trains experts in telecommunications, computer science, and networking. Students acquire skills in network design, development, and management, system security, signal processing, and data analysis, preparing them for leadership roles in telecommunications, computer science, and IT.",
    },
    {
      degree: "Bachelor in Telecommunication and Computer Science",
      institution: "University Institute of Science and Technology of Yaounde",
      duration: "September 2008 - June 2012",
      description:
        "The Bachelor's degree in Telecommunications and Computer Science trains professionals in networking, programming, and system management. Graduates are prepared for careers as network technicians, software developers, system administrators, security consultants, or systems engineers.",
    },
  ];
  
  export const SOCIAL_MEDIA_LINKS = [
    {
      href: "https://x.com/",
      icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
      icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
      icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://x.com/",
      icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://github.com/",
      icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://www.linkedin.com/",
      icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
    },
  ];