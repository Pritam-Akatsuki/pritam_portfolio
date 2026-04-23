export const personalInfo = {
  name: "Pritam Lambade",
  title: "Software Developer",
  tagline: "Flutter · Angular · React · SAP Spartacus",
  email: "pritamlambade@gmail.com",
  phone: "+91 8600429659",
  location: "Maharashtra, India",
  github: "https://github.com/Pritam-Akatsuki",
  linkedin: "https://www.linkedin.com/in/pritam-lambade-7996b420a/",
  instagram: "https://www.instagram.com/_noname.2001/",
  hackerrank: "https://www.hackerrank.com/profile/pritamlambade",
  portfolio: "https://pritam-akatsuki.github.io/MyPortfolio.github.io/portfolio.html",
  resumeLink: "https://drive.google.com/file/d/1w4dZojTny_kqF9otvbqCFGGeprDveSIH/view?usp=sharing",
  about:
    "Software Developer with 3+ years of experience building scalable web and mobile applications using Flutter, Angular, and React. Specialized in SAP Spartacus and SAP Commerce Cloud (Hybris) customizations, frontend architecture, and API integrations. Strong focus on performance, clean UI, analytics, and maintainable code.",
};

export const skills = [
  { name: "Flutter", color: "#02569B", category: "Frontend" },
  { name: "React", color: "#61DAFB", category: "Frontend" },
  { name: "Angular", color: "#DD0031", category: "Frontend" },
  { name: "TypeScript", color: "#3178C6", category: "Frontend" },
  { name: "HTML5", color: "#E34F26", category: "Frontend" },
  { name: "CSS3", color: "#1572B6", category: "Frontend" },
  { name: "Material-UI", color: "#007FFF", category: "Frontend" },
  { name: "SAP Spartacus", color: "#0070F3", category: "eCommerce" },
  { name: "SAP Hybris", color: "#005BAC", category: "eCommerce" },
  { name: "RxJS", color: "#B7178C", category: "eCommerce" },
  { name: "JSP", color: "#F89820", category: "eCommerce" },
  { name: "REST APIs", color: "#25D366", category: "Backend" },
  { name: "Node.js", color: "#43853D", category: "Backend" },
  { name: "MySQL", color: "#00758F", category: "Backend" },
  { name: "Razorpay", color: "#3395FF", category: "Backend" },
  { name: "Git", color: "#F05032", category: "Tools" },
  { name: "Postman", color: "#FF6C37", category: "Tools" },
  { name: "Jira", color: "#0052CC", category: "Tools" },
  { name: "Figma", color: "#F24E1E", category: "Tools" },
  { name: "AWS", color: "#FF9900", category: "Tools" },
];

export const projects = [
  {
    id: 1,
    title: "SUCO – Food Delivery App",
    description:
      "Full-featured food ordering mobile app with product listing, category toggling, cart management, and order placement. Integrated Razorpay payment gateway handling success/failure callbacks with secure backend API.",
    tags: ["Flutter", "REST APIs", "Razorpay"],
    color: "#02569B",
    emoji: "🍔",
    duration: "Nov 2024 – Present",
    link: "#",
    github: "https://github.com/Pritam-Akatsuki",
  },
  {
    id: 2,
    title: "SAP Spartacus eCommerce",
    description:
      "Customized Spartacus storefront for dynamic Unit of Measure (UOM) selection on PDP and cart pages. Used BaseSiteService with custom logic to conditionally render components based on active site.",
    tags: ["Angular", "Spartacus", "TypeScript", "RxJS"],
    color: "#DD0031",
    emoji: "🛒",
    duration: "Jan 2024 – Oct 2024",
    link: "#",
    github: "https://github.com/Pritam-Akatsuki",
  },
  {
    id: 3,
    title: "SAP Hybris Storefront",
    description:
      "Enhanced JSP-based storefront with reusable tag files, form analytics tracking, SEO meta tags, dynamic page titles, and bundled product purchase functionality on PDP.",
    tags: ["Hybris", "JSP", "JavaScript", "SEO"],
    color: "#005BAC",
    emoji: "⚙️",
    duration: "2023 – 2024",
    link: "#",
    github: "https://github.com/Pritam-Akatsuki",
  },
  {
    id: 4,
    title: "CRM Application",
    description:
      "React-based CRM platform for customer and sales management. Designed responsive UI with Material-UI components and implemented full CRUD APIs for managing customer and sales records.",
    tags: ["React", "MySQL", "Material-UI"],
    color: "#61DAFB",
    emoji: "📊",
    duration: "2023",
    link: "#",
    github: "https://github.com/Pritam-Akatsuki",
  },
];

export const experience = [
  {
    id: 1,
    role: "Software Developer",
    company: "Purity Technology Solution",
    location: "Ratnagiri, Maharashtra",
    duration: "May 2023 – Present",
    type: "Full-time",
    color: "#FFD600",
    points: [
      "Developed and maintained web and mobile applications using Flutter, Angular, and React.",
      "Customized SAP Spartacus storefronts to support dynamic business requirements and multi-site behavior.",
      "Worked on SAP Commerce Cloud (Hybris) JSP-based storefront enhancements.",
      "Integrated REST APIs, handled authentication, data mapping, and error handling.",
      "Implemented payment gateway integrations and managed frontend response flows.",
      "Improved UI performance, code reusability, and analytics tracking while ensuring GDPR compliance.",
    ],
  },
  {
    id: 2,
    role: "Web Development Intern",
    company: "The Sparks Foundation",
    location: "Remote",
    duration: "2022",
    type: "Internship",
    color: "#FF6B35",
    points: [
      "Built responsive web interfaces using HTML, CSS and JavaScript.",
      "Collaborated with team on real-world client projects.",
      "Hands-on experience with Git version control.",
    ],
  },
  {
    id: 3,
    role: "Frontend Development Intern",
    company: "OctaNet",
    location: "Remote",
    duration: "2022",
    type: "Internship",
    color: "#FF3CAC",
    points: [
      "Built interactive frontend components with React and Bootstrap.",
      "Implemented responsive designs and improved cross-browser compatibility.",
    ],
  },
];

export const certifications = [
  { name: "UI/UX Design with Figma", issuer: "Udemy", year: "2025" },
  { name: "JavaScript, SQL, CSS, React", issuer: "HackerRank", year: "2023" },
  { name: "AWS Academy Cloud Foundations", issuer: "AWS Academy", year: "2022" },
];
