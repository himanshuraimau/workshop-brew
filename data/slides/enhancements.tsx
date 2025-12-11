export const enhancementsSlide = {
  title: "ENHANCEMENTS & POLISH",
  subtitle: "Level up your chatbot",
  language: "JavaScript",
  intro: {
    description:
      "Add professional features to make your chatbot stand out: timestamps, copy buttons, markdown rendering, and more.",
    code: `// Add copy button to messages
function addMessage(text, sender) {
  const div = document.createElement('div');
  div.className = 'message ' + sender;
  div.innerHTML = marked.parse(text);
  
  if (sender === 'ai') {
    const copyBtn = document.createElement('button');
    copyBtn.textContent = 'Copy';
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(text);
      copyBtn.textContent = 'Copied!';
      setTimeout(() => copyBtn.textContent = 'Copy', 2000);
    });
    div.appendChild(copyBtn);
  }
  
  messagesDiv.appendChild(div);
}`,
  },
  chatbot: {
    description: "Add timestamps and better message formatting.",
    code: `// Message with timestamp
function addMessage(text, sender) {
  const div = document.createElement('div');
  div.className = 'message ' + sender;
  
  const time = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
  
  const timestamp = document.createElement('span');
  timestamp.className = 'timestamp';
  timestamp.textContent = time;
  
  const content = document.createElement('div');
  content.className = 'content';
  content.innerHTML = marked.parse(text);
  
  div.appendChild(content);
  div.appendChild(timestamp);
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}`,
  },
  advanced: [
    {
      title: "Loading Animation",
      description: "Show a typing indicator while waiting for AI response.",
      code: `function showTyping() {
  const div = document.createElement('div');
  div.className = 'message ai typing';
  div.innerHTML = '<span></span><span></span><span></span>';
  div.id = 'typingIndicator';
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function hideTyping() {
  const typing = document.getElementById('typingIndicator');
  if (typing) typing.remove();
}

// Use it:
sendBtn.addEventListener('click', async () => {
  addMessage(userInput.value, 'user');
  userInput.value = '';
  
  showTyping();
  const reply = await chatWithGemini(userMessage);
  hideTyping();
  addMessage(reply, 'ai');
});`,
    },
    {
      title: "Syntax Highlighting",
      description: "Highlight code blocks in AI responses.",
      code: `import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

function addMessage(text, sender) {
  const div = document.createElement('div');
  div.className = 'message ' + sender;
  
  let html = marked.parse(text);
  
  // Highlight code blocks
  html = html.replace(/<code class="language-([^"]*?)">([^<]*?)<\\/code>/g, (match, lang, code) => {
    const highlighted = hljs.highlight(code, { language: lang || 'javascript' }).value;
    return '<code>' + highlighted + '</code>';
  });
  
  div.innerHTML = html;
  messagesDiv.appendChild(div);
}`,
    },
    {
      title: "Local Storage",
      description: "Save chat history so it persists between sessions.",
      code: `function saveChatHistory() {
  localStorage.setItem('chatHistory', JSON.stringify(conversationHistory));
}

function loadChatHistory() {
  const saved = localStorage.getItem('chatHistory');
  if (saved) {
    conversationHistory = JSON.parse(saved);
    // Re-display messages
    conversationHistory.forEach(msg => {
      addMessage(
        msg.parts[0].text,
        msg.role === 'user' ? 'user' : 'ai'
      );
    });
  }
}

// On page load
loadChatHistory();

// After each message
sendMessage(); // saves automatically
saveChatHistory();`,
    },
  ],
}
