export const htmlSlide = {
  title: "HTML - BUILDING STRUCTURE",
  subtitle: "Learn the foundation of web pages",
  language: "HTML",
  intro: {
    description:
      "HTML (HyperText Markup Language) provides the structure for web pages. Think of it as the skeleton. Elements like <div>, <p>, <button>, and <input> are the building blocks.",
    code: `<!-- Basic HTML structure -->
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph</p>
  </body>
</html>`,
  },
  chatbot: {
    description:
      "For our chatbot, we need HTML to create a container, input field, button, and message display area. This is the basic structure.",
    code: `<!-- Chatbot HTML Structure -->
<div class="chatbot-container">
  <div class="messages" id="messages">
    <!-- Messages will appear here -->
  </div>
  <div class="input-group">
    <input 
      type="text" 
      id="userInput" 
      placeholder="Ask me anything..."
    >
    <button id="sendBtn">Send</button>
  </div>
</div>`,
  },
  advanced: [
    {
      title: "Semantic HTML",
      description: "Use semantic elements to make your HTML more meaningful and accessible.",
      code: `<!-- Semantic HTML -->
<main>
  <section class="chatbot">
    <header>
      <h1>AI Assistant</h1>
    </header>
    <article id="messages"></article>
    <footer>
      <input type="text" placeholder="Message...">
    </footer>
  </section>
</main>`,
    },
    {
      title: "HTML Attributes",
      description: "Attributes add information to HTML elements. id, class, data-* are commonly used.",
      code: `<!-- HTML Attributes -->
<input 
  type="text" 
  id="userInput" 
  class="message-input"
  placeholder="Type here"
  data-role="input-field"
  autocomplete="off"
>

<button 
  id="sendBtn" 
  class="btn btn-primary"
  aria-label="Send message"
>
  Send
</button>`,
    },
    {
      title: "Form Elements",
      description: "Forms handle user input. textarea, select, and input types are versatile.",
      code: `<!-- Form Elements -->
<form>
  <textarea 
    id="message" 
    rows="3" 
    placeholder="Your message"
  ></textarea>
  
  <select id="model">
    <option>GPT-4</option>
    <option>Claude</option>
    <option>Gemini</option>
  </select>
  
  <input type="submit" value="Send">
</form>`,
    },
  ],
}
