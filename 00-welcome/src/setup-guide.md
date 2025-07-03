# 📋 Detailed Setup Guide

## Node.js Installation

1. **Windows/macOS**:
   - Download the LTS version from [nodejs.org](https://nodejs.org/)
   - Run the installer and follow the prompts
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

2. **Linux (Ubuntu/Debian)**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

## Git Installation

1. **Windows/macOS**:
   - Download from [git-scm.com](https://git-scm.com/)
   - Run the installer with default options

2. **Linux (Ubuntu/Debian)**:
   ```bash
   sudo apt-get update
   sudo apt-get install git
   ```

## VS Code Setup

1. Install VS Code from [code.visualstudio.com](https://code.visualstudio.com/)
2. Install these recommended extensions:
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X or Cmd+Shift+X)
   - Search and install:
     - ES7+ React/Redux/React-Native snippets
     - Prettier - Code formatter
     - ESLint
     - vscode-styled-components
     - Path Intellisense

## Terminal Setup (Optional but Recommended)

### Windows
- Use Windows Terminal or Git Bash

### macOS/Linux
- Use the built-in terminal or iTerm2

## Package Manager

This course uses `npm` by default, but you can use `yarn` or `pnpm` if you prefer.

To install `yarn`:
```bash
npm install -g yarn
```

To install `pnpm`:
```bash
npm install -g pnpm
```

## Verifying Your Setup

1. Open a new terminal
2. Run these commands to verify installations:
   ```bash
   node --version  # Should show v16.x or higher
   npm --version   # Should show 7.x or higher
   git --version   # Should show 2.x or higher
   code --version  # Should show VS Code version if installed correctly
   ```

## Troubleshooting

- If you get permission errors, try using `sudo` (macOS/Linux) or run as administrator (Windows)
- For Node.js issues, try uninstalling and reinstalling
- Make sure to restart your terminal after installations
