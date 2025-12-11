export const jsSlide = {
  title: "JAVASCRIPT - INTERACTIVITY",
  subtitle: "Make your chatbot interactive",
  language: "JavaScript",
  intro: {
    description:
      "JavaScript is a programming language that runs in your browser. Use it to handle clicks, respond to user input, and update the page dynamically.",
    code: `// Basic JavaScript
const button = document.getElementById('sendBtn');
const input = document.getElementById('userInput');

// Listen for button click
button.addEventListener('click', () => {
  console.log('Button clicked!');
  console.log('User typed:', input.value);
});

// Or listen for Enter key
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    console.log('Enter pressed!');
  }
});`,
  },
  chatbot: {
    description: "Add interactivity to capture user messages, display them, and send them for processing.",
    code: `// Chatbot Interactivity
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const messagesDiv = document.getElementById('messages');

function addMessage(text, sender) {
  const messageEl = document.createElement('div');
  messageEl.className = 'message ' + sender;
  messageEl.textContent = text;
  messagesDiv.appendChild(messageEl);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

sendBtn.addEventListener('click', () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    addMessage(userMessage, 'user');
    userInput.value = '';
    // Later: send to AI API here
  }
});`,
  },
  advanced: [
    {
      title: "DOM Manipulation",
      description: "Select and modify HTML elements using JavaScript.",
      code: `// DOM Manipulation Methods
// Select elements
const el = document.getElementById('id');
const els = document.querySelectorAll('.class');

// Create new elements
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello!';
newDiv.className = 'message';

// Add to page
messagesDiv.appendChild(newDiv);

// Modify styles
newDiv.style.color = '#ff0000';
newDiv.style.fontSize = '16px';

// Add/remove classes
newDiv.classList.add('active');
newDiv.classList.remove('hidden');
newDiv.classList.toggle('highlighted');`,
    },
    {
      title: "Functions & Arrow Functions",
      description: "Reusable blocks of code. Arrow functions are modern syntax.",
      code: `// Regular function
function greet(name) {
  return 'Hello, ' + name;
}

// Arrow function (modern)
const greet2 = (name) => {
  return 'Hello, ' + name;
};

// Arrow function (short)
const greet3 = (name) => 'Hello, ' + name;

// Using in event listeners
button.addEventListener('click', () => {
  console.log(greet('Alice'));
});`,
    },
    {
      title: "Async/Await",
      description: "Handle asynchronous operations (API calls, timeouts) with clean syntax.",
      code: `// Async/Await for API calls
async function sendMessage(message) {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message })
    });
    
    const data = await response.json();
    console.log('AI response:', data.reply);
    addMessage(data.reply, 'ai');
  } catch (error) {
    console.error('Error:', error);
    addMessage('Sorry, error occurred', 'ai');
  }
}`,
    },
  ],
}
