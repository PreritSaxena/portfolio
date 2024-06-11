import {   abes, ccdps , drifko, codeclause ,sync} from "../assets/images";
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
    threejs,
    c,
    

} from "../assets/icons";

import hospital from "../assets/projects/hospital.png";
import ppe from "../assets/projects/ppe.png";
import dashboard from "../assets/projects/dashboard.png";
import dashboard1 from "../assets/projects/dashboard1.png";
import weather from "../assets/projects/weather.png";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },

    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: c,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const educations = [
    {
        title: "ABES Institute of Technology, Ghaziabad",
        company_name: "BTech, Computer Science and Engineering (2021-2025)",
        icon: abes,
        iconBg: "#accbe1",
        date: "Oct 2021 - Sep 2025",
        points: [
            "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at ABES Institute Of Technology",
            "Completed 6 semesters, participated in various Hackathons, and currently a trainee at NVIDIA Training, working on exciting AI/ML projects.",
            "Proficient in Data Structures, Algorithms, Web Development, Database Management Systems, Operating Systems, and Computer Networks.",
        ],  
    },
    {
        title: "Ch. Chhabil Dass Public School Ghaziabad",
        company_name: "CBSE (XII), PCM Grade: 83%",
        icon: ccdps ,
        iconBg: "#fbc3bc",
        date: "2020 - 2021",
        points: [
            "Completed intermediate education with a focus on Physics, Chemistry, and Mathematics (PCM) from Ch. Chhabil Dass Public School, securing 83%.",
            "Actively engaged in extracurricular activities such as sports, clubs, or volunteer work",
            
        ],
    },
    {
        title: "Ch. Chhabil Dass Public School Ghaziabad",
        company_name: "CBSE (X), Grade: 89.4%",
        icon: ccdps,
        iconBg: "#b7e4c7",
        date: "Jan 2018 - Jan 2019",
        points: [
            "Completed high school education with a focus on diverse subjects at Ch. Chhabil Dass Public School, achieving an impressive 89.4",
            "Effective communication and teamwork abilities showcased through group projects, presentations, or leadership roles.",
            
        ],
    },
   
];

export const experience = [
    {
        title: "Web Developer Intern",
        company_name: "Drifko",
        icon: drifko,
        iconBg: "#accbe1",
        date: "Nov 2023 - Present",
        points: [
            "At Drifko, I enhanced the company's website by collaborating with the development team, showcasing proficiency in web technologies for impactful solutions.",
            "Interacted with diverse stakeholders and team members, fostering effective communication and teamwork skills.",
            "Participated in various events alongside the team, such as Startup Mahakumbh, showcasing the collective efforts and innovative spirit of the organization.",
        ],  
    },
   
    {
        title: "Web Developer Intern",
        company_name: "Sync's",
        icon: sync,
        iconBg: "#b7e4c7",
        date: "Mar 2023 - Apr 2023",
        points: [
            "Successfully completed tasks and small projects, including the development of a quiz app and a music player.",
            "Recognized for exceptional performance and dedication, receiving a Letter of Recommendation (LOR) certificate as a testament to skills and contributions.",
            
        ],
    },
   
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
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: hospital,
        theme: 'btn-back-red',
        name: 'Hospital Management System',
        description: 'Developed a hospital management platform with separate admin and user dashboards. Patients can book appointments and communicate with admins. Admins manage doctors, appointments, and authentication using JWT for security.',
        skills : 'MongoDB, ExpressJS, ReactJs, NodeJS',
        Github : 'https://github.com/PreritSaxena/Doctor-s-Appointment',
        link: 'https://hospital-management-system-cwz.netlify.app/',
    },
    {
        iconUrl: ppe,
        theme: 'btn-back-green',
        name: 'PPE Voilation Detection',
        description: 'Developed an AI-ML powered system to detect Personal Protective Equipment (PPE) violations. The system identifies whether a person is complying with safety protocols. If a violation is detected, an email alert is sent via the Gmail API.',
        skills : 'Python, OpenCV, KubeFlow, Gmail API',
        link: '',
    },
    {
        iconUrl: dashboard1,
        theme: 'btn-back-blue',
        name: 'Expense Tracker App',
        description: 'The Expense Tracker App, built with Next.js, Drizzle ORM, Clerk, and Tailwind CSS, lets users manage budgets and track expenses. It features a secure login, budget creation and modification, detailed expense tracking, and a dashboard with visual charts for clear financial overviews.',
        skills : 'NextJS, Drizzle ORM, Clerk, Tailwind Css',
        Github: 'https://github.com/PreritSaxena/expense-tracker',
        link : 'https://expense-tracker-prerit.vercel.app/'
    },
    {
        iconUrl: weather,
        theme: 'btn-back-pink',
        name: 'Weather App',
        description: 'Developed a user-friendly application enabling users to access current weather data by granting location or searching worldwide, providing comprehensive details such as wind speed, humidity, and weather conditions.',
        skills : "HTML, CSS, JavaScript, Weather API",
        Github: 'https://github.com/PreritSaxena/WetherApp',
        link : '',
    },

];

