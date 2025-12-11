export const geminiSlide = {
  title: "GEMINI AI - INTEGRATION",
  subtitle: "Power your chatbot with Google's AI",
  language: "JavaScript",
  intro: {
    description:
      "Gemini is Google's advanced AI model. Get a free API key from Google AI Studio and integrate it into your chatbot.",
    code: `// Get API Key:
// 1. Go to https://aistudio.google.com
// 2. Click 'Get API key'
// 3. Create new API key
// 4. Add to .env: VITE_GEMINI_API_KEY=your_key

// Basic Gemini API request
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

async function chat(userMessage) {
  const response = await fetch(
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + API_KEY,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: userMessage }] }]
      })
    }
  );
  return response.json();
}`,
  },
  chatbot: {
    description: "Full chatbot function that sends messages to Gemini and displays responses.",
    code: `async function sendMessage() {
  const userMessage = userInput.value.trim();
  if (!userMessage) return;

  // Display user message
  addMessage(userMessage, 'user');
  userInput.value = '';

  try {
    // Send to Gemini
    const result = await chat(userMessage);
    const aiReply = result.candidates[0].content.parts[0].text;
    
    // Display AI response
    addMessage(aiReply, 'ai');
  } catch (error) {
    console.error('Error:', error);
    addMessage('Sorry, an error occurred.', 'ai');
  }
}

// Hook up the button
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});`,
  },
  advanced: [
    {
      title: "Model Parameters",
      description: "Customize AI behavior with parameters.",
      code: `{
  contents: [{ parts: [{ text: userMessage }] }],
  generationConfig: {
    temperature: 0.7,        // 0=precise, 1=creative
    maxOutputTokens: 1000,   // Max response length
    topP: 0.9,              // Nucleus sampling
    topK: 40                // Top K sampling
  }
}

// Lower temperature = more focused
// Higher temperature = more creative`,
    },
    {
      title: "System Instructions",
      description: "Guide AI behavior with system prompts.",
      code: `// Add personality to your chatbot
const systemPrompt = "You are a helpful AI assistant for learning web development. Keep answers concise and friendly.";

async function chatWithPersonality(userMessage) {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system: [{ parts: [{ text: systemPrompt }] }],
      contents: [{ parts: [{ text: userMessage }] }]
    })
  });
  return response.json();
}`,
    },
    {
      title: "Streaming Responses",
      description: "Show AI responses as they're being generated for better UX.",
      code: `async function chatStreaming(userMessage) {
  const response = await fetch(
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:streamGenerateContent?key=' + API_KEY,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: userMessage }] }]
      })
    }
  );
  
  const reader = response.body.getReader();
  let fullText = '';
  
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    const chunk = new TextDecoder().decode(value);
    fullText += chunk;
    // Update UI with partial response
  }
}`,
    },
  ],
}
