export const apisSlide = {
  title: "APIs - CONNECTING TO THE WORLD",
  subtitle: "Fetch data from external services",
  language: "JavaScript",
  intro: {
    description:
      "An API (Application Programming Interface) lets your app communicate with other services. Use the Fetch API to make requests and handle responses.",
    code: `// Basic API request with fetch
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Modern async/await syntax
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}`,
  },
  chatbot: {
    description: "Send user messages to an AI API and receive intelligent responses.",
    code: `// Send message to AI API
async function sendToAI(userMessage) {
  try {
    const response = await fetch('https://api.ai-service.com/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
      },
      body: JSON.stringify({ message: userMessage })
    });
    
    const data = await response.json();
    return data.reply;  // AI's response
  } catch (error) {
    console.error('API Error:', error);
    return 'Sorry, something went wrong.';
  }
}`,
  },
  advanced: [
    {
      title: "HTTP Methods",
      description: "Different methods for different types of requests.",
      code: `// GET - Retrieve data (default)
fetch('https://api.example.com/users');

// POST - Send data to server
fetch('https://api.example.com/users', {
  method: 'POST',
  body: JSON.stringify({ name: 'Alice' })
});

// PUT - Update existing data
fetch('https://api.example.com/users/123', {
  method: 'PUT',
  body: JSON.stringify({ name: 'Bob' })
});

// DELETE - Remove data
fetch('https://api.example.com/users/123', {
  method: 'DELETE'
});`,
    },
    {
      title: "Error Handling",
      description: "Always handle potential errors gracefully.",
      code: `async function fetchWithError(url) {
  try {
    const response = await fetch(url);
    
    // Check if response was successful
    if (!response.ok) {
      throw new Error('API Error: ' + response.status);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failed:', error.message);
    return null;
  }
}`,
    },
    {
      title: "Request Headers & Auth",
      description: "Send additional information with your requests.",
      code: `const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + apiKey,
    'User-Agent': 'MyApp/1.0'
  },
  body: JSON.stringify({
    query: 'Hello, AI!'
  })
};

fetch('https://api.example.com/chat', options)
  .then(res => res.json())
  .then(data => console.log(data));`,
    },
  ],
}
