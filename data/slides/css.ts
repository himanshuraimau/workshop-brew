export const cssSlide = {
  title: "CSS - STYLING & LAYOUT",
  subtitle: "Make your chatbot beautiful",
  language: "CSS",
  intro: {
    description:
      "CSS (Cascading Style Sheets) controls the appearance of HTML elements. Use it for colors, fonts, spacing, and layout with flexbox or grid.",
    code: `/* Basic CSS Styling */
body {
  background: #0f0f0f;
  color: #fafafa;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 2rem;
  color: #2a45c2;
}

button {
  background: #2a45c2;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}`,
  },
  chatbot: {
    description: "Style the chatbot container with flexbox layout, message bubbles, and interactive button effects.",
    code: `/* Chatbot CSS */
.chatbot-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  height: 600px;
  border: 2px solid #2a45c2;
  border-radius: 8px;
  background: #1a1a1a;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input-group {
  display: flex;
  gap: 8px;
  padding: 16px;
  border-top: 2px solid #2a2a2a;
}

#userInput {
  flex: 1;
  padding: 10px;
  background: #0f0f0f;
  color: #fafafa;
  border: 1px solid #2a2a2a;
}

#sendBtn:hover {
  background: #ff0000;
  transform: scale(1.05);
}`,
  },
  advanced: [
    {
      title: "Flexbox Layout",
      description: "Flexbox is the most powerful layout tool for aligning items in rows or columns.",
      code: `/* Flexbox Examples */
.container {
  display: flex;
  justify-content: center;    /* Horizontal alignment */
  align-items: center;        /* Vertical alignment */
  gap: 16px;                  /* Space between items */
  flex-wrap: wrap;            /* Wrap items to next line */
}

.flex-item {
  flex: 1;                    /* Grow equally */
  flex-basis: 200px;          /* Base width */
  flex-shrink: 1;             /* Can shrink */
}`,
    },
    {
      title: "CSS Grid",
      description: "Grid is perfect for 2D layouts with rows and columns.",
      code: `/* CSS Grid */
.grid-layout {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;  /* 3 columns */
  grid-template-rows: auto 1fr auto;   /* 3 rows */
  gap: 16px;
  height: 100vh;
}

.header { grid-column: 1 / -1; }  /* Span all columns */
.sidebar { grid-row: 2; }
.main { grid-column: 2; grid-row: 2; }`,
    },
    {
      title: "Responsive Design",
      description: "Use media queries to adapt your design for different screen sizes.",
      code: `/* Responsive CSS */
.chatbot-container {
  width: 100%;
  max-width: 500px;
}

/* Mobile */
@media (max-width: 768px) {
  .chatbot-container {
    max-width: 100%;
    height: 80vh;
  }
  
  .messages {
    padding: 12px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .chatbot-container {
    max-width: 600px;
  }
}`,
    },
  ],
}
