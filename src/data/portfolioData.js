export const personalInfo = {
  name: "Anushka Singh",
  title: "Aspiring Full Stack Developer",
  roleTagline: "2nd Year B.Tech CSE Student at Roorkee Institute of Technology (RIT)",
  email: "www.anushkasingh2721@gmail.com",
  phone: "9155430899",
  location: "Roorkee, Uttarakhand, India",
  github: "",
  linkedin: "",
  shortBio: "2nd-year B.Tech Computer Science & Engineering student at Roorkee Institute of Technology (RIT). Passionate about web development, C/C++ problem solving, and building practical applications.",
  fullBio: `I am a 2nd-year Bachelor of Technology (B.Tech) student in Computer Science & Engineering at Roorkee Institute of Technology (RIT). 

I have a keen interest in Web Development and Computer Science fundamentals. I am actively working on my skills in C, C++, HTML5, CSS3, JavaScript, and React.js. I enjoy building clean, functional web projects and am eager to apply my learning through an internship opportunity.`,
  careerObjective: "Seeking a Web Development / Full Stack Developer Internship where I can apply my programming fundamentals in C/C++, HTML/CSS, JavaScript, and React, learn industry best practices, and contribute enthusiastically as a 2nd-year B.Tech CSE student.",
  education: {
    institution: "Roorkee Institute of Technology (RIT)",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    status: "2nd Year",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++)",
      "Web Development Fundamentals",
      "Database Management Systems",
      "Computer Organization",
      "Discrete Mathematics"
    ]
  }
};

export const skillsData = [
  {
    category: "Programming Languages",
    items: [
      { name: "C", level: "Beginner", description: "Core syntax, pointers & logic building", icon: "Code" },
      { name: "C++", level: "Intermediate", description: "Data structures & Object-oriented logic", icon: "Cpu" },
      { name: "JavaScript", level: "Intermediate", description: "ES6+, DOM manipulation & async logic", icon: "FileCode" }
    ]
  },
  {
    category: "Frontend Web Development",
    items: [
      { name: "HTML5", level: "Intermediate", description: "Semantic web structure & forms", icon: "Globe" },
      { name: "CSS3", level: "Intermediate", description: "Flexbox, Grid & responsive layout", icon: "Layout" },
      { name: "React.js", level: "Beginner", description: "Components, props & state hooks", icon: "Atom" },
      { name: "Tailwind CSS", level: "Beginner", description: "Utility classes & responsive styling", icon: "Sparkles" }
    ]
  },
  {
    category: "Backend & Database Fundamentals",
    items: [
      { name: "Node.js", level: "Beginner", description: "Basic JavaScript runtime concepts", icon: "Server" },
      { name: "Express.js", level: "Beginner", description: "Basic server routing & API setup", icon: "Layers" },
      { name: "MongoDB", level: "Beginner", description: "Document database concepts & CRUD", icon: "Database" }
    ]
  },
  {
    category: "Developer Tools",
    items: [
      { name: "Git", level: "Beginner", description: "Version control & basic commands", icon: "GitBranch" },
      { name: "GitHub", level: "Beginner", description: "Code hosting & repository basics", icon: "Github" },
      { name: "Figma", level: "Beginner", description: "UI wireframe exploration & layout design", icon: "Figma" }
    ]
  }
];

export const projectsData = [
  {
    id: "trinetra",
    title: "Smart Blind Stick / TRINETRA",
    subtitle: "Assistive Technology Project",
    description: "An assistive technology project designed for visually impaired individuals. Uses distance sensors and audio feedback to provide obstacle warnings and emergency alerts.",
    features: [
      "Ultrasonic sensor obstacle detection",
      "Audio and vibration feedback alert system",
      "Emergency alert trigger design"
    ],
    techStack: ["C++", "HTML5", "CSS3", "JavaScript"],
    githubUrl: "",
    liveUrl: "",
    statusText: "Demo & Repo Coming Soon",
    tag: "Hardware & Web"
  },
  {
    id: "astra-sos",
    title: "Astra SOS App",
    subtitle: "Emergency Safety Web Application",
    description: "A responsive emergency safety web application created to broadcast distress alerts and share location information during emergency situations.",
    features: [
      "Quick SOS distress button trigger",
      "Emergency contact management interface",
      "High-contrast dark layout for quick accessibility"
    ],
    techStack: ["React.js", "JavaScript", "HTML5", "CSS3"],
    githubUrl: "",
    liveUrl: "",
    statusText: "Demo & Repo Coming Soon",
    tag: "Web Application"
  },
  {
    id: "algo-visualizer",
    title: "Algo Visualizer",
    subtitle: "Algorithm Simulator Web App",
    description: "An educational web tool designed to visualize sorting algorithms like Bubble Sort step-by-step, helping beginners understand algorithmic execution.",
    features: [
      "Step-by-step visual animation of sorting steps",
      "Custom array generator for visual testing",
      "Interactive speed control buttons"
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "React.js"],
    githubUrl: "",
    liveUrl: "",
    statusText: "Demo & Repo Coming Soon",
    tag: "EdTech & Algorithms"
  }
];
