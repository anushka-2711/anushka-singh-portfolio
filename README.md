# Anushka Singh — Student Developer Portfolio

Personal portfolio for Anushka Singh, a second-year Computer Science & Engineering student at Roorkee Institute of Technology.

The site presents her learning journey, technical foundation, academic projects, and availability for web development or full-stack internships.

## Highlights

- Editorial-inspired responsive interface with a warm, accessible color system
- Internship-focused hero section and clear calls to action
- About, education, coursework, skills, and selected projects sections
- Responsive navigation with keyboard-friendly Escape handling
- Reduced-motion support and visible focus states
- Project cards that clearly label prototypes and current learning work
- Contact form that opens a pre-filled email draft through the visitor's default email app
- SEO-friendly page title and description

## Built with

- React 18
- Vite
- JavaScript (ES modules)
- Tailwind CSS
- Lucide React icons
- Google Fonts: DM Sans and Space Grotesk

## Getting started

### Requirements

- Node.js 18 or newer
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite in your browser.

### Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/       # Page sections and UI components
├── data/              # Personal, skill, and project content
├── App.jsx            # Page composition
├── index.css          # Design system and global styles
└── main.jsx           # React entry point
```

## Content updates

Most portfolio content lives in [`src/data/portfolioData.js`](src/data/portfolioData.js). Update personal details, coursework, skills, or project information there without changing the section components.

## Deployment

The project is Vercel-ready and includes a `vercel.json` configuration file. Any Vercel deployment connected to the repository can build the site using the default Vite settings.

## Contact

The contact section uses a `mailto:` flow so visitors can review the message in their own email application before sending it.

---

Built with curiosity by Anushka Singh.
