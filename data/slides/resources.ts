export const resourcesSlide = {
  title: "RESOURCES & NEXT STEPS",
  subtitle: "Continue your learning journey",
  language: "Resources",
  intro: {
    description:
      "You've learned the fundamentals! Here are resources to deepen your knowledge and build more advanced projects.",
    code: `// Useful Documentation Links
MDN Web Docs: https://developer.mozilla.org
Google AI Studio: https://aistudio.google.com
Vite Docs: https://vitejs.dev
JavaScript Guide: https://javascript.info
CSS Tricks: https://css-tricks.com

// Communities
Stack Overflow: https://stackoverflow.com
Dev.to: https://dev.to
Reddit: https://reddit.com/r/webdev

// Practice & Challenges
LeetCode: https://leetcode.com
Frontend Mentor: https://frontendmentor.io
Codewars: https://codewars.com`,
  },
  chatbot: {
    description: "Deploy your chatbot and continue building. Here are the next steps.",
    code: `// Deployment Options

// 1. Vercel (Recommended for Next.js)
npm run build
vercel deploy

// 2. Netlify
npm run build
netlify deploy --prod --dir dist

// 3. GitHub Pages
npm run build
// Push 'dist' to gh-pages branch

// 4. Traditional Hosting
npm run build
// Upload 'dist' folder via FTP/SCP

// Your chatbot is now live!
// Share it and gather feedback.`,
  },
  advanced: [
    {
      title: "Next Learning Steps",
      description: "What to learn after this workshop.",
      code: `// Backend (Choose one)
• Node.js + Express
• Python + Flask/Django
• Go
• Rust

// Frameworks (Choose one)
• React - Most popular
• Vue.js - Easy to learn
• Svelte - Modern
• Angular - Enterprise

// Databases
• MongoDB - NoSQL
• PostgreSQL - Relational
• Firebase - Backend-as-a-Service

// Tools
• TypeScript - Type safety
• TailwindCSS - Utility CSS
• Next.js - Full-stack React`,
    },
    {
      title: "Project Ideas",
      description: "Build these to practice your skills.",
      code: `// Level 1 (Easy)
- Todo app
- Weather app
- Calculator
- Expense tracker

// Level 2 (Medium)
- Blog with comments
- E-commerce product page
- Real-time chat
- Note-taking app

// Level 3 (Hard)
- Full social media app
- Project management tool
- Collaborative editor
- Video streaming platform

// Pro tip: Build, deploy, and share!`,
    },
    {
      title: "Pro Tips & Best Practices",
      description: "Code like a professional from day one.",
      code: `// Best Practices
• Write clean, readable code
• Comment your code
• Use version control (Git)
• Test your code frequently
• Mobile-first responsive design
• Optimize performance
• Write secure code
• Handle errors gracefully

// Code Quality Tools
• ESLint - Find problems
• Prettier - Format code
• Jest - Unit testing
• Cypress - E2E testing

// Never stop learning!`,
    },
  ],
}
