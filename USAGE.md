# Usage Guide for @ishant-sahu/atomic-design-system

## Quick Start

### 1. Install the package

```bash
npm install @ishant-sahu/atomic-design-system
```

### 2. Import CSS (REQUIRED)

```tsx
// In your main.tsx, App.tsx, or any component file
import '@ishant-sahu/atomic-design-system/dist/style.css';
```

### 3. Import and use components

```tsx
import { Button, Card, ThemeProvider } from '@ishant-sahu/atomic-design-system';

function App() {
  return (
    <ThemeProvider>
      <div className="p-6">
        <Card>
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Hello World</h1>
            <Button variant="primary">Click me</Button>
          </div>
        </Card>
      </div>
    </ThemeProvider>
  );
}
```

## CSS Import Options

### Option 1: Import in main entry point (Recommended)

```tsx
// src/main.tsx or src/App.tsx
import '@ishant-sahu/atomic-design-system/dist/style.css';
```

### Option 2: Import in component file

```tsx
// In any component that uses the design system
import '@ishant-sahu/atomic-design-system/dist/style.css';
import { Button } from '@ishant-sahu/atomic-design-system';
```

### Option 3: Import in global CSS

```css
/* src/index.css or src/App.css */
@import '@ishant-sahu/atomic-design-system/dist/style.css';
```

## Tailwind CSS Setup

This package requires Tailwind CSS to be installed and configured in your project:

### 1. Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Configure Tailwind

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@ishant-sahu/atomic-design-system/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 3. Include Tailwind in your CSS

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Common Issues

### Components render without styles

- **Solution**: Make sure you've imported the CSS file
- **Check**: Verify `import '@ishant-sahu/atomic-design-system/dist/style.css';` is in your code

### Tailwind classes not working

- **Solution**: Ensure Tailwind CSS is properly configured
- **Check**: Verify your `tailwind.config.js` includes the package in content paths

### Build errors

- **Solution**: Make sure you're using a compatible bundler (Vite, Webpack, etc.)
- **Check**: Verify your bundler can handle CSS imports

## Example Project Structure

```
my-project/
├── src/
│   ├── main.tsx          # Import CSS here
│   ├── App.tsx           # Use components here
│   └── index.css         # Tailwind directives
├── tailwind.config.js    # Include package in content
└── package.json          # Package dependency
```

## Available Components

- **Atoms**: Button, Input, Card, Badge, Select, Checkbox, Radio
- **Molecules**: ButtonGroup, FormField, RadioGroup
- **Organisms**: Form, Navigation, DataTable
- **Theme**: ThemeProvider for dark/light mode switching

## Support

If you encounter issues:

1. Check that CSS is imported
2. Verify Tailwind CSS is configured
3. Check the package version compatibility
4. Review the main README for detailed documentation
