"use client"

import { useState } from "react"
import { 
  Terminal, 
  Copy, 
  Check, 
  AlertTriangle, 
  FileCode, 
  Cpu, 
  ShieldAlert, 
  Play,
  Zap,
  Layers,
  Rocket,
  FolderTree
} from "lucide-react"
import { motion } from "framer-motion"

// --- Local Terminal Component ---
const TerminalBlock = ({ title, code, language = "bash", highlight = false }: any) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative border border-zinc-700 bg-[#0a0a0a] group/term mt-4">
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#141414] border-b border-zinc-700">
        <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
          <Terminal size={10} className="text-blue-500" />
          {title}
        </div>
        <button 
          onClick={handleCopy}
          className="text-zinc-400 hover:text-white transition-colors"
        >
          {copied ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className={`font-mono text-xs md:text-sm leading-relaxed ${highlight ? 'text-white' : 'text-zinc-300'}`}>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}

// --- Main Component ---
export default function FinalBuildSlide() {
  const [showCode, setShowCode] = useState(false)
  const [activeTab, setActiveTab] = useState("html")

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="w-full max-w-5xl mx-auto space-y-16 pb-20">
        
        {/* Hero Header */}
        <div className="text-center space-y-6 border-b border-zinc-800 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-blue-500/30 bg-blue-500/5 text-blue-400 text-xs font-mono tracking-[0.2em] mb-4">
            <Cpu size={12} />
            SYSTEM_DEPLOYMENT_PROTOCOL
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
            Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-blue-500 animate-pulse">Protocol</span>
          </h1>
          <p className="text-xl text-zinc-400 font-mono max-w-2xl mx-auto">
            // EXECUTE THE FOLLOWING 07 DIRECTIVES TO INITIALIZE YOUR AI AGENT.
          </p>
        </div>

        {/* Directives Grid */}
        <div className="grid gap-12 relative">
          {/* Timeline Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-zinc-800 md:left-1/2 md:-ml-[1px] -z-10" />

          {/* STEP 1: API KEY */}
          <StepCard 
            step="01" 
            title="CREDENTIAL ACQUISITION" 
            icon={<ShieldAlert size={20} />}
            side="left"
          >
            <p className="text-sm text-zinc-400 mb-4">
              Secure connection required. Obtain authentication token from Google AI Studio.
            </p>
            <ul className="space-y-2 text-sm font-mono text-zinc-300 list-none">
              <li className="flex gap-2">
                <span className="text-blue-500">01.</span> Navigate to <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline underline-offset-4 decoration-1">Google AI Studio</a>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500">02.</span> Authenticate Identity
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500">03.</span> Generate <span className="bg-zinc-800 px-1">API_KEY</span>
              </li>
            </ul>
            <div className="mt-4 p-3 border border-red-500/30 bg-red-500/5 flex gap-3 text-red-400 text-xs font-mono">
              <AlertTriangle size={16} className="shrink-0" />
              <div>WARNING: KEY MUST REMAIN PRIVATE. DO NOT COMMIT TO GIT.</div>
            </div>
          </StepCard>

          {/* STEP 2: VITE */}
          <StepCard 
            step="02" 
            title="ENVIRONMENT INIT" 
            icon={<FileCode size={20} />}
            side="right"
          >
            <p className="text-sm text-zinc-400">
              Initialize clean Vite environment (Vanilla JS).
            </p>
            <TerminalBlock 
              title="TERMINAL"
              code={`npm create vite@latest my-chatbot -- --template vanilla\ncd my-chatbot\nnpm install`}
            />
          </StepCard>

          {/* STEP 3: SDK */}
          <StepCard 
            step="03" 
            title="DEPENDENCY INJECTION" 
            icon={<Cpu size={20} />}
            side="left"
          >
            <p className="text-sm text-zinc-400">
              Install Google GenAI SDK bindings.
            </p>
            <TerminalBlock 
              title="TERMINAL"
              code={`npm install @google/generative-ai`}
            />
            <div className="mt-2 text-[10px] font-mono text-zinc-500 flex items-center gap-2">
              <Check size={10} className="text-green-500" />
              <span>CORRECT PACKAGE: @google/generative-ai</span>
            </div>
          </StepCard>

          {/* STEP 4: ENV VARS */}
          <StepCard 
            step="04" 
            title="ENV CONFIGURATION" 
            icon={<ShieldAlert size={20} />}
            side="right"
          >
            <p className="text-sm text-zinc-400 mb-3">
              Create <span className="text-blue-400">.env</span> file in root directory.
            </p>
            <TerminalBlock 
              title=".env"
              code={`VITE_GEMINI_API_KEY=your_api_key_here`}
            />
            <div className="mt-4 p-3 border border-zinc-700 bg-zinc-900/50">
              <p className="text-xs font-mono text-zinc-400 mb-2">Also update .gitignore:</p>
              <TerminalBlock 
                title=".gitignore"
                code={`# Existing entries\nnode_modules\ndist\n\n# Environment variables\n.env\n.env.local`}
              />
            </div>
          </StepCard>

          {/* STEP 5: PROJECT STRUCTURE */}
          <StepCard 
            step="05" 
            title="FILE STRUCTURE" 
            icon={<FolderTree size={20} />}
            side="left"
          >
            <p className="text-sm text-zinc-400 mb-3">
              Verify your project structure matches this layout:
            </p>
            <TerminalBlock 
              title="PROJECT TREE"
              code={`my-chatbot/
├── node_modules/
├── public/
├── src/
│   ├── main.js
│   └── style.css
├── .env
├── .gitignore
├── index.html
├── package.json
└── vite.config.js (optional)`}
            />
          </StepCard>

          {/* STEP 6: CLEAR DEFAULT FILES */}
          <StepCard 
            step="06" 
            title="CLEAR DEFAULT FILES" 
            icon={<FileCode size={20} />}
            side="right"
          >
            <p className="text-sm text-zinc-400 mb-3">
              Remove default Vite content and prepare for chatbot code.
            </p>
            <TerminalBlock 
              title="TERMINAL"
              code={`# Remove default files
rm src/counter.js
rm src/javascript.svg
rm public/vite.svg

# Or manually delete these files`}
            />
            <div className="mt-2 text-[10px] font-mono text-zinc-500 flex items-center gap-2">
              <Check size={10} className="text-green-500" />
              <span>CLEAN SLATE READY FOR CHATBOT CODE</span>
            </div>
          </StepCard>

          {/* STEP 7: RUN */}
          <StepCard 
            step="07" 
            title="SYSTEM STARTUP" 
            icon={<Rocket size={20} />}
            side="left"
          >
            <p className="text-sm text-zinc-400 mb-3">
              Execute the following command to start the development server.
            </p>
            <TerminalBlock 
              title="TERMINAL"
              code={`npm run dev`}
            />
            <p className="mt-4 text-sm text-zinc-400">
              Access Localhost at: <span className="text-blue-400 font-bold">http://localhost:5173</span>
            </p>
            <div className="mt-4 p-3 border border-green-500/30 bg-green-500/5 text-green-400 text-xs font-mono">
              ✓ SYSTEM ONLINE - Ready to receive commands
            </div>
          </StepCard>
        </div>

        {/* FULL CODE REVEAL SECTION */}
        <div className="pt-20 border-t border-zinc-800 relative">
          <div className="text-center">
             {!showCode ? (
              <button
                onClick={() => setShowCode(true)}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
              >
                <FileCode size={20} />
                <span>Access Full Source Code</span>
                <div className="absolute inset-0 border border-white/20 scale-105 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all" />
              </button>
             ) : (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between mb-6">
                   <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-2">
                      <Terminal size={24} className="text-blue-500" />
                      Source_Manifest
                   </h2>
                   <button 
                     onClick={() => setShowCode(false)}
                     className="text-xs font-mono text-zinc-400 hover:text-white uppercase"
                   >
                     [ Close ]
                   </button>
                </div>

                {/* Custom Tabs */}
                <div className="border border-zinc-700 bg-zinc-900">
                  <div className="flex border-b border-zinc-700 bg-zinc-800/50 overflow-x-auto">
                     {['html', 'css', 'js', 'env'].map((tab) => (
                       <button
                         key={tab}
                         onClick={() => setActiveTab(tab)}
                         className={`px-6 py-3 text-xs font-bold font-mono uppercase tracking-wider border-r border-zinc-700 transition-colors ${
                           activeTab === tab 
                             ? 'bg-blue-600 text-white' 
                             : 'text-zinc-400 hover:bg-zinc-700 hover:text-white'
                         }`}
                       >
                         {tab === 'env' ? '.env' : tab === 'js' ? 'main.js' : tab === 'css' ? 'style.css' : 'index.html'}
                       </button>
                     ))}
                  </div>

                  {/* Tab Content */}
                  <div className="p-0">
                     <div className="max-h-[600px] overflow-y-auto">
                        {activeTab === 'html' && <CodeContent code={fullCode.html} />}
                        {activeTab === 'css' && <CodeContent code={fullCode.css} />}
                        {activeTab === 'js' && <CodeContent code={fullCode.js} />}
                        {activeTab === 'env' && <CodeContent code={fullCode.env} />}
                     </div>
                  </div>
                </div>
              </motion.div>
             )}
          </div>
        </div>

        {/* "WHAT'S NEXT" SECTION */}
        <div className="pt-20 border-t border-zinc-800">
          <div className="flex items-center justify-center gap-2 mb-8">
             <Zap size={20} className="text-yellow-400" />
             <h2 className="text-2xl font-black uppercase tracking-tighter">Future Protocols</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Explore More */}
            <div className="border border-zinc-700 bg-zinc-900/50 p-6 relative group hover:border-blue-500/50 transition-colors">
              <div className="absolute top-0 left-0 w-2 h-2 bg-blue-500/20 group-hover:bg-blue-500 transition-colors" />
              <h3 className="font-bold font-mono text-blue-400 mb-4 flex items-center gap-2">
                <Layers size={16} /> EXPLORE_MORE
              </h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full" /> Chat History & Context Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full" /> Streaming Responses (Real-time)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full" /> System Instructions & Personalities
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full" /> Safety Settings Configuration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full" /> Image & Vision Understanding
                </li>
              </ul>
            </div>

            {/* Enhance Bot */}
            <div className="border border-zinc-700 bg-zinc-900/50 p-6 relative group hover:border-yellow-400/50 transition-colors">
              <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-400/20 group-hover:bg-yellow-400 transition-colors" />
              <h3 className="font-bold font-mono text-yellow-400 mb-4 flex items-center gap-2">
                <Rocket size={16} /> SYSTEM_UPGRADES
              </h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full" /> Deploy to Vercel/Netlify
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full" /> Add Markdown Rendering
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full" /> Local Storage for Chat History
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full" /> Loading States & Error Handling
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full" /> Dark/Light Theme Toggle
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common Issues Section */}
        <div className="pt-12 border-t border-zinc-800">
          <h2 className="text-xl font-black uppercase tracking-tight mb-6 flex items-center gap-2">
            <AlertTriangle size={20} className="text-red-500" />
            Common Issues & Solutions
          </h2>
          <div className="space-y-4">
            <div className="border border-zinc-700 bg-zinc-900/50 p-4">
              <p className="font-mono text-sm text-red-400 mb-2">ERROR: API Key not found</p>
              <p className="text-xs text-zinc-400">→ Ensure .env file is in root directory and starts with VITE_ prefix</p>
            </div>
            <div className="border border-zinc-700 bg-zinc-900/50 p-4">
              <p className="font-mono text-sm text-red-400 mb-2">ERROR: Package not found</p>
              <p className="text-xs text-zinc-400">→ Use @google/generative-ai (not @google/genai)</p>
            </div>
            <div className="border border-zinc-700 bg-zinc-900/50 p-4">
              <p className="font-mono text-sm text-red-400 mb-2">ERROR: Model not available</p>
              <p className="text-xs text-zinc-400">→ Use gemini-2.0-flash-exp, gemini-1.5-flash, or gemini-1.5-pro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- Helper Components ---

function StepCard({ step, title, icon, children, side }: any) {
  return (
    <div className={`relative flex items-start gap-6 md:w-1/2 ${side === 'right' ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12 md:flex-row-reverse md:text-right'}`}>
      
      {/* Center Node */}
      <div className={`absolute left-0 md:left-auto ${side === 'right' ? 'md:-left-[20px]' : 'md:-right-[20px]'} top-0 z-10 bg-black border-2 border-blue-500 w-10 h-10 flex items-center justify-center text-blue-400 font-bold font-mono text-xs shadow-[0_0_15px_rgba(59,130,246,0.5)]`}>
        {step}
      </div>

      <div className="flex-1 min-w-0 pt-1 pl-10 md:pl-0 md:pt-0">
        <div className={`flex items-center gap-3 mb-3 ${side === 'right' ? '' : 'md:flex-row-reverse'}`}>
          <div className="text-yellow-400">{icon}</div>
          <h3 className="text-xl font-bold uppercase tracking-tight">{title}</h3>
        </div>
        <div className={`text-left ${side === 'right' ? '' : 'md:text-right'} [&_pre]:text-left`}>
          {children}
        </div>
      </div>
    </div>
  )
}

function CodeContent({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <div className="relative group">
       <button 
          onClick={() => {
            navigator.clipboard.writeText(code)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
          }}
          className="absolute top-4 right-4 z-10 p-2 bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white transition-colors"
        >
          {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
        </button>
      <pre className="p-6 text-sm font-mono leading-relaxed text-zinc-300">
        <code>{code}</code>
      </pre>
    </div>
  )
}

// --- Full Code Data ---

const fullCode = {
  html: `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AI Chatbot // Gemini</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"></script>
</body>
</html>`,

  css: `:root {
  font-family: 'Courier New', monospace;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #0a0a0a;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

#app {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
}

.terminal-container {
  width: 100%;
  height: 85vh;
  background: #141414;
  border: 1px solid #333;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 30px rgba(0,0,0,0.7);
}

.terminal-header {
  background: #1a1a1a;
  padding: 12px 20px;
  border-bottom: 1px solid #333;
  display: flex;
  align-items: center;
  gap: 12px;
}

.terminal-header h1 {
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
}

.status-dot {
  width: 10px;
  height: 10px;
  background: #00ff00;
  border-radius: 50%;
  box-shadow: 0 0 8px #00ff00;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.messages-area {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  font-size: 14px;
  line-height: 1.8;
}

.messages-area::-webkit-scrollbar {
  width: 8px;
}

.messages-area::-webkit-scrollbar-track {
  background: #0a0a0a;
}

.messages-area::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 4px;
}

.message { 
  margin-bottom: 20px;
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.user-msg { 
  color: #fff; 
  font-weight: bold;
}

.ai-msg { 
  color: #888;
  white-space: pre-wrap;
}

.system-message {
  color: #00ff00;
  margin-bottom: 20px;
}

.error {
  color: #ff4444;
}

.input-area {
  padding: 20px;
  border-top: 1px solid #333;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #0a0a0a;
}

.prompt {
  color: #3b82f6;
  font-weight: bold;
}

input {
  flex: 1;
  background: transparent;
  border: none;
  color: #fff;
  font-family: inherit;
  font-size: 16px;
  outline: none;
}

input::placeholder {
  color: #555;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #3b82f6;
  color: #fff;
  cursor: pointer;
  transition: border-color 0.25s;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
}

button:hover { 
  background: #2563eb;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}

button:active {
  transform: scale(0.98);
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  .terminal-container {
    background: #f5f5f5;
    border-color: #ddd;
  }
  .terminal-header {
    background: #e5e5e5;
    border-bottom-color: #ddd;
  }
  .messages-area {
    background: #fff;
  }
  .input-area {
    background: #f5f5f5;
    border-top-color: #ddd;
  }
  input {
    color: #213547;
  }
  .user-msg {
    color: #213547;
  }
  .ai-msg {
    color: #666;
  }
}`,

  js: `import './style.css'
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

// Chat history for context
const chatHistory = [];

// Build the UI
document.querySelector('#app').innerHTML = \`
  <div class="terminal-container">
    <header class="terminal-header">
      <div class="status-dot"></div>
      <h1>GEMINI_AGENT_V1</h1>
    </header>
    
    <div class="messages-area" id="messages">
      <div class="system-message">
        > SYSTEM INITIALIZED<br>
        > WAITING FOR INPUT...
      </div>
    </div>
    
    <div class="input-area">
      <span class="prompt">></span>
      <input 
        type="text" 
        id="userInput" 
        placeholder="Enter command..."
        autocomplete="off"
      >
      <button id="sendBtn" type="button">EXECUTE</button>
    </div>
  </div>
\`

// Get DOM elements
const userInput = document.querySelector('#userInput');
const sendBtn = document.querySelector('#sendBtn');
const messages = document.querySelector('#messages');

async function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  // Disable input while processing
  userInput.disabled = true;
  sendBtn.disabled = true;

  // Add user message to UI
  addMessage(\`> USER: \${text}\`, 'user-msg');
  userInput.value = '';

  try {
    // Add to chat history
    chatHistory.push({
      role: "user",
      parts: [{ text }]
    });

    // Create chat session with history
    const chat = model.startChat({
      history: chatHistory,
    });

    // Send message and get response
    const result = await chat.sendMessage(text);
    const response = result.response.text();

    // Add AI response to history
    chatHistory.push({
      role: "model",
      parts: [{ text: response }]
    });

    addMessage(\`> AI: \${response}\`, 'ai-msg');

  } catch (err) {
    console.error('Error:', err);
    addMessage(\`> ERROR: \${err.message}\`, 'error');
  } finally {
    // Re-enable input
    userInput.disabled = false;
    sendBtn.disabled = false;
    userInput.focus();
  }
}

function addMessage(text, className) {
  const msgDiv = document.createElement('div');
  msgDiv.className = \`message \${className}\`;
  msgDiv.textContent = text;
  messages.appendChild(msgDiv);
  messages.scrollTop = messages.scrollHeight;
}

// Event listeners
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});`,

  env: `VITE_GEMINI_API_KEY=your_api_key_here`
}