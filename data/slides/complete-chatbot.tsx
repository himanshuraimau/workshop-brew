export const completeSlide = {
  title: "COMPLETE CHATBOT - FULL BUILD",
  subtitle: "Putting it all together",
  language: "JavaScript",
  intro: {
    description:
      "Now you have all the pieces! This is your complete, production-ready chatbot with HTML, CSS, JavaScript, and Gemini AI integration.",
    code: `// Project Structure
my-chatbot/
├── index.html          // HTML structure
├── style.css           // CSS styling
├── main.js             // JavaScript logic
├── .env.local          // API keys (don't commit!)
├── vite.config.js      // Vite configuration
├── package.json        // Dependencies
└── dist/               // Production build

// To run:
npm install
npm run dev

// To deploy:
npm run build
// Push 'dist' folder to hosting`,
  },
  chatbot: {
    description: "The complete index.html with all sections working together.",
    code: `<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>AI Chatbot</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="chatbot">
    <header class="chatbot-header">
      <h1>AI Assistant</h1>
    </header>
    
    <div class="messages" id="messages"></div>
    
    <div class="input-area">
      <input type="text" id="userInput" placeholder="Ask me anything...">
      <button id="sendBtn">Send</button>
      <button id="clearBtn">Clear</button>
    </div>
  </div>
  
  <script type="module" src="main.js"><\/script>
</body>
</html>`,
  },
  advanced: [
    {
      title: "Complete main.js",
      description: "The full JavaScript with all functionality.",
      code: `import { marked } from 'marked';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const clearBtn = document.getElementById('clearBtn');
const messagesDiv = document.getElementById('messages');
let conversationHistory = [];

async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, 'user');
  userInput.value = '';

  try {
    const reply = await chatWithGemini(message);
    addMessage(reply, 'ai');
  } catch (error) {
    addMessage('Error: ' + error.message, 'error');
  }
}

async function chatWithGemini(userMessage) {
  conversationHistory.push({
    role: 'user',
    parts: [{ text: userMessage }]
  });

  const response = await fetch(
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + API_KEY,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: conversationHistory })
    }
  );

  const data = await response.json();
  const aiReply = data.candidates[0].content.parts[0].text;

  conversationHistory.push({
    role: 'model',
    parts: [{ text: aiReply }]
  });

  return aiReply;
}

function addMessage(text, sender) {
  const div = document.createElement('div');
  div.className = 'message ' + sender;
  div.innerHTML = sender === 'ai' ? marked.parse(text) : text;
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') sendMessage();
});

clearBtn.addEventListener('click', () => {
  messagesDiv.innerHTML = '';
  conversationHistory = [];
});`,
    },
    {
      title: "Complete style.css",
      description: "Full CSS for a professional chatbot UI.",
      code: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0f0f0f;
  color: #fafafa;
  font-family: 'Geist', Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
}

.chatbot {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  height: 80vh;
  border: 2px solid #2a45c2;
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
}

.chatbot-header {
  padding: 20px;
  border-bottom: 2px solid #2a2a2a;
  background: #0f0f0f;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message {
  padding: 12px 16px;
  border-radius: 8px;
  line-height: 1.5;
}

.message.user {
  background: #2a45c2;
  align-self: flex-end;
  max-width: 80%;
}

.message.ai {
  background: #2a2a2a;
  align-self: flex-start;
  max-width: 80%;
}

.input-area {
  display: flex;
  gap: 8px;
  padding: 16px;
  border-top: 2px solid #2a2a2a;
  background: #0f0f0f;
}

#userInput {
  flex: 1;
  padding: 12px;
  background: #1a1a1a;
  color: #fafafa;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
}

button {
  padding: 12px 20px;
  background: #2a45c2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
}

button:hover {
  background: #ff0000;
}

@media (max-width: 768px) {
  .chatbot { height: 90vh; }
  .message { max-width: 95%; }
}`,
    },
  ],
}
