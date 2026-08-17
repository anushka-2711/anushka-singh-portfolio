export const personalInfo = {
  name: 'Anushka Singh',
  title: 'Aspiring Full Stack Developer',
  roleTagline: 'B.Tech CSE student turning curiosity into useful digital experiences.',
  email: 'anushkasingh2721@gmail.com',
  phone: '9155430899',
  location: 'Roorkee, Uttarakhand, India',
  github: '',
  linkedin: '',
  shortBio: 'I am a 2nd-year Computer Science student who enjoys building clear, practical web experiences and strengthening the fundamentals behind them.',
  fullBio: `I am a 2nd-year Bachelor of Technology (B.Tech) student in Computer Science & Engineering at Roorkee Institute of Technology (RIT). I am building my foundation across web development, C/C++ problem solving, and software fundamentals while looking for opportunities to learn from real product teams.`,
  careerObjective: 'Seeking a Web Development or Full Stack Developer internship where I can apply my fundamentals, contribute with energy, and grow through meaningful product work.',
  education: {
    institution: 'Roorkee Institute of Technology (RIT)',
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    status: '2nd Year',
    coursework: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Web Development', 'Database Management Systems']
  }
};

export const skillsData = [
  { category: 'Build with', items: [
    { name: 'HTML5', level: 'Comfortable', description: 'Semantic structure and accessible forms', icon: 'Globe' },
    { name: 'CSS3', level: 'Comfortable', description: 'Responsive layouts, Grid and Flexbox', icon: 'Layout' },
    { name: 'JavaScript', level: 'Growing', description: 'ES6+, DOM manipulation and async logic', icon: 'FileCode' },
    { name: 'React.js', level: 'Growing', description: 'Components, props and state hooks', icon: 'Atom' }
  ]},
  { category: 'Think with', items: [
    { name: 'C / C++', level: 'Core', description: 'Logic building, OOP and data structures', icon: 'Cpu' },
    { name: 'Git & GitHub', level: 'Learning', description: 'Version control and project workflows', icon: 'Github' },
    { name: 'Node.js', level: 'Exploring', description: 'JavaScript runtime and API fundamentals', icon: 'Server' },
    { name: 'MongoDB', level: 'Exploring', description: 'Document database and CRUD concepts', icon: 'Database' }
  ]}
];

export const projectsData = [
  {
    id: 'trinetra', number: '01', title: 'TRINETRA', subtitle: 'Smart Blind Stick',
    description: 'An assistive technology concept for visually impaired users, pairing obstacle detection with audio, vibration, and emergency feedback.',
    features: ['Ultrasonic obstacle detection', 'Audio and vibration feedback', 'Emergency alert trigger design'],
    techStack: ['C++', 'Sensors', 'Web UI'], tag: 'Assistive technology', accent: 'orange'
  },
  {
    id: 'astra-sos', number: '02', title: 'Astra SOS', subtitle: 'Emergency Safety App',
    description: 'A responsive safety interface designed to make distress alerts and location sharing easier to access when every second matters.',
    features: ['Quick SOS interaction', 'Emergency contact management', 'High-contrast accessibility'],
    techStack: ['React', 'JavaScript', 'CSS'], tag: 'Web application', accent: 'lime'
  },
  {
    id: 'algo-visualizer', number: '03', title: 'Algo Visualizer', subtitle: 'Learning tool for algorithms',
    description: 'An interactive educational tool that makes sorting algorithms easier to understand by turning each step into a visible moment.',
    features: ['Step-by-step animation', 'Custom array generation', 'Interactive speed controls'],
    techStack: ['React', 'JavaScript', 'Algorithms'], tag: 'EdTech', accent: 'blue'
  }
];
