export const prerequisitesSlide = {
  title: "PREREQUISITES - SETUP REQUIRED",
  subtitle: "Install the tools you need to get started",
  language: "Setup",
  intro: {
    description:
      "Before we start building our chatbot, we need to install some essential tools. These will help us develop, test, and run our application.",
    code: `# Tools we'll be using:
# 1. Antigravity - Google's development environment
# 2. Node.js - JavaScript runtime for development
# 3. Package manager (npm/pnpm/yarn)`,
  },
  chatbot: {
    description: "Set up your development environment with these essential tools for building our chatbot application.",
    code: `# Step 1: Install Antigravity
# Visit: https://antigravity.google/download
# Follow the installation instructions for your OS

# Step 2: Install Node.js
# Visit: https://nodejs.org
# Download LTS version (recommended)
# Verify installation:
node --version
npm --version`,
  },
  advanced: [
    {
      title: "Antigravity Setup",
      description: "Google's Antigravity provides a powerful development environment for modern web applications.",
      code: `# After downloading from https://antigravity.google/download
# 1. Run the installer
# 2. Follow setup wizard
# 3. Verify installation:
antigravity --version

# Features you'll get:
# - Integrated development tools
# - Built-in testing environment
# - Deployment capabilities`,
    },
    {
      title: "Node.js Installation",
      description: "Node.js allows us to run JavaScript outside the browser and use modern development tools.",
      code: `# Download from https://nodejs.org
# Choose LTS (Long Term Support) version

# Windows: Download .msi installer
# macOS: Download .pkg installer  
# Linux: Use package manager or download binary

# Verify installation:
node --version    # Should show v18.x.x or higher
npm --version     # Should show 9.x.x or higher

# Optional: Install pnpm (faster package manager)
npm install -g pnpm`,
    },
    {
      title: "Quick Environment Check",
      description: "Verify everything is installed correctly before we begin coding.",
      code: `# Check all tools are working:
node --version
npm --version
antigravity --version

# Create a test project:
mkdir chatbot-test
cd chatbot-test
npm init -y

# If all commands work, you're ready to go!
echo "✅ Development environment ready!"`,
    },
  ],
}