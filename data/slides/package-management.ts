export const packageMgmtSlide = {
  title: "PACKAGE MANAGEMENT - THE OLD WAY",
  subtitle: "Using CDN and script tags",
  language: "HTML",
  intro: {
    description:
      "CDN (Content Delivery Network) lets you use libraries by adding script tags to your HTML. Simple but limited.",
    code: `<!-- Using a library from CDN -->
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"><\/script>

<script>
  // Now 'marked' is available globally
  const html = marked.parse('# Hello **World**');
  console.log(html);
<\/script>`,
  },
  chatbot: {
    description: "Use CDN to add markdown rendering to display AI responses with formatting.",
    code: `<!-- Add marked.js via CDN -->
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"><\/script>

<script>
  function addMessage(text, sender) {
    const messageEl = document.createElement('div');
    messageEl.className = 'message ' + sender;
    
    // Render markdown for AI messages
    if (sender === 'ai') {
      messageEl.innerHTML = marked.parse(text);
    } else {
      messageEl.textContent = text;
    }
    
    messagesDiv.appendChild(messageEl);
  }
<\/script>`,
  },
  advanced: [
    {
      title: "Popular CDNs",
      description: "Different CDN providers you can use to add libraries.",
      code: `<!-- jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"><\/script>

<!-- Unpkg -->
<script src="https://unpkg.com/lodash"><\/script>

<!-- CDNJS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"><\/script>`,
    },
    {
      title: "Pros & Cons of CDN",
      description: "Understanding when to use CDN vs modern package managers.",
      code: `// PROS of CDN:
// ✓ No build process needed
// ✓ Simple script tags
// ✓ Works immediately
// ✓ Good for prototypes

// CONS of CDN:
// ✗ Limited to production files
// ✗ All code global (pollutes scope)
// ✗ Hard to manage versions
// ✗ Difficult for complex projects
// ✗ Can't import specific functions`,
    },
  ],
}
