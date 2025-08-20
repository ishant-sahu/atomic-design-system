#!/bin/bash

echo "🚀 Setting up Atomic Design System..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Build the library
echo "🔨 Building library..."
npm run build:lib

if [ $? -eq 0 ]; then
    echo "✅ Library built successfully!"
else
    echo "❌ Failed to build library"
    exit 1
fi

echo ""
echo "🎉 Setup complete! You can now:"
echo "  • Run 'npm run dev' to start the development server"
echo "  • Run 'npm run storybook' to start Storybook"
echo "  • Run 'npm run build:lib' to build the library for npm"
echo ""
echo "📚 Check the README.md for more information" 