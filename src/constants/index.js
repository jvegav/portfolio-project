import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
} from "../assets/icons";

export const skills = [
    { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
    { imageUrl: typescript, name: "TypeScript", type: "Frontend" },
    { imageUrl: react, name: "React", type: "Frontend" },
    { imageUrl: html, name: "HTML", type: "Frontend" },
    { imageUrl: css, name: "CSS", type: "Frontend" },
    { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Frontend" },
    { imageUrl: nodejs, name: "Node.js", type: "Backend" },
    { imageUrl: java, name: "Java", type: "Backend" },
    { imageUrl: spring, name: "Spring Boot", type: "Backend" },
    { imageUrl: python, name: "Python", type: "Backend" },
    { imageUrl: mongodb, name: "MongoDB", type: "Database" },
    { imageUrl: postgresql, name: "PostgreSQL", type: "Database" },
    { imageUrl: express, name: "Express.js", type: "Backend" },
    { imageUrl: nextjs, name: "Next.js", type: "Frontend" },
    { imageUrl: docker, name: "Docker", type: "DevOps" },
    { imageUrl: git, name: "Git", type: "Version Control" },
    { imageUrl: github, name: "GitHub", type: "Version Control" },

];

export const experiences = [
    {
        title: "Software Design & Development Engineer",
        company_name: "APICIL",
        icon: car,
        iconBg: "#e8c1a0",
        date: "May 2026 – Aug 2026",
        points: [
            "Contributed to the migration of a legacy application to a microservices architecture, completing 50% of the migration scope over 4 months using Java, Spring Boot, and hexagonal architecture.",
            "Redesigned and re-architected a flawed feature specification after independently analyzing an undocumented legacy codebase, successfully deploying the solution to production with the DevSecOps team.",
            "Developed and maintained front-end features with Angular and TypeScript, collaborating cross-functionally with Business Analysts and senior engineers in an Agile Scrum environment (sprint planning, daily stand-ups, code reviews)."
        ],
    },
    {
        title: "Computer Vision Engineer",
        company_name: "Robocol Initiative – Universidad de los Andes",
        icon: car,
        iconBg: "#accbe1",
        date: "Aug 2023 – Jul 2025",
        points: [
            "Designed and implemented a real-time 3D vision algorithm using ROS, Python, and OpenCV.",
            "Reduced rover navigation error by 15% through improved perception and object-manipulation accuracy.",
            "Collaborated with robotics, perception, and navigation teams to optimize system performance."
        ],
    },
    {
        title: "Data Structures & Algorithms – Academic Assistant",
        company_name: "Universidad de los Andes",
        icon: car,
        iconBg: "#fbc3bc",
        date: "Aug 2024 – Jul 2025",
        points: [
            "Supported students during labs, improving algorithmic understanding and coding skills.",
            "Provided individualized feedback and optimized teaching resources."
        ],
    },
    {
        title: "Mobile Developer – FreshLink",
        company_name: "Academic Project",
        icon: car,
        iconBg: "#b7e4c7",
        date: "Jan 2025 – Jul 2025",
        points: [
            "Co-created a Flutter app connecting local shops with users to sell food surpluses.",
            "Developed core UI and backend integration, enabling a potential 10% waste reduction in pilot tests."
        ],
    },
    {
        title: "Full-Stack Developer – EcoTrade",
        company_name: "Personal Project",
        icon: car,
        iconBg: "#cdb4db",
        date: "Oct 2024 – Present",
        points: [
            "Designed and developed a full-stack circular economy platform for international students at INSA Lyon.",
            "Implemented user authentication, product listings, and real-time interactions using modern web technologies.",
            "Deployed the frontend on Vercel and the backend API on Render, ensuring scalability and reliability.",
            "Promoted sustainable reuse of furniture, bikes, and electronics, reducing waste and student setup costs."
        ],
    },
    {
        title: "Chrome Extension Developer – Listen",
        company_name: "Personal Project",
        icon: car,
        iconBg: "#a2d2ff",
        date: "Jul 2024 – Present",
        points: [
            "Built a multi-language text-to-speech Chrome extension using JavaScript and React.",
            "Reached 315+ monthly active users and maintained Web Store deployment.",
        ],
    }
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/jvegav',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/josue-vega-valbuena/',
    }
];


export const projects = [
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Listen – Chrome Extension',
        description:
            'Multi-language text-to-speech Chrome extension built with JavaScript and React. Helps users learn pronunciation instantly and reached over 315 monthly active users.',
        link: "https://github.com/jvegav/Listen-Chrome-Extension",
    },
    {
        iconUrl: car,
        theme: 'btn-back-green',
        name: 'FreshLink – Mobile App',
        description:
            'Flutter mobile app connecting users with local shops to buy food surpluses at reduced prices. Designed to reduce food waste by over 10% in early pilots.',
        link: "https://github.com/Grupo43Moviles20251/Flutter",
    },
    {
        iconUrl: car,
        theme: 'btn-back-red',
        name: 'BlockIt – Productivity Chrome Extension',
        description:
            'Website-blocking extension that enhances productivity. Users define distracting URLs and are automatically redirected to stay focused. Includes a clean UI and customizable lists.',
        link: "https://github.com/jvegav/SiteBlock-Chrome-Extension",
    },
    {
        iconUrl: car,
        theme: 'btn-back-yellow',
        name: 'EcoTrade – Sustainable Student Marketplace',
        description:
            'EcoTrade is a full-stack circular economy web platform designed for international students at INSA Lyon and similar institutions. It allows students to buy, sell, and reuse essential items such as furniture, bikes, and electronics, reducing waste, lowering setup costs, and fostering a sustainable and supportive student community.',
        link: 'https://eco-trade-one.vercel.app/'
    },
    {
        iconUrl: car,
        theme: 'btn-back-purple',
        name: 'SDG Text Analytics – Machine Learning Project',
        description:
            'Co-developed a REST API and web application to automatically classify citizen feedback according to the UN Sustainable Development Goals (SDG 3, 4, and 5). The project includes text preprocessing pipelines with scikit-learn, TF-IDF vectorization, classification with KNeighborsClassifier, continuous model retraining on new data, and result visualization for end users.',
        link: "https://github.com/jvegav/Proyecto-1-pipeline",
    },
];