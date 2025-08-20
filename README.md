# Atomic Design System

A comprehensive React-based atomic design system built with TypeScript, Tailwind CSS, and Storybook. This design system provides a collection of reusable components that follow atomic design principles and can be easily integrated into any React project.

## 🚀 Features

- **Atomic Design Architecture**: Components organized by atoms, molecules, and organisms
- **TypeScript Support**: Full type safety and IntelliSense support
- **Tailwind CSS**: Utility-first CSS framework with custom theming
- **Storybook Integration**: Interactive component documentation and testing
- **Dark Mode Support**: Built-in theme switching capabilities
- **Responsive Design**: Mobile-first responsive components
- **Accessibility**: WCAG compliant components with proper ARIA attributes
- **NPM Ready**: Can be published and consumed as an npm package

## 📦 Installation

```bash
npm install @ishant-sahu/atomic-design-system
# or
yarn add @ishant-sahu/atomic-design-system
```

**Important**: After installation, you must import the CSS to get the component styles. See the [CSS and Styling](#-css-and-styling) section below.

## 🎯 Quick Start

### Import Components and CSS

```tsx
import {
  Button,
  Input,
  Card,
  ThemeProvider,
} from '@ishant-sahu/atomic-design-system';

// Import the CSS to get all the styles
import '@ishant-sahu/atomic-design-system/dist/style.css';
```

function App() {
return (
<ThemeProvider>

<div className="p-6">
<Card>
<CardHeader>
<h1>Welcome to Atomic Design</h1>
</CardHeader>
<CardBody>
<Input label="Name" placeholder="Enter your name" />
<Button>Submit</Button>
</CardBody>
</Card>
</div>
</ThemeProvider>
);
}

````

## 🏗️ Architecture

### Atoms

Basic building blocks that can't be broken down further:

- **Button**: Multiple variants, sizes, and states
- **Input**: Form inputs with validation states
- **Card**: Content containers with header, body, and footer

### Molecules

Simple combinations of atoms:

- **ButtonGroup**: Grouped buttons with consistent styling

### Organisms

Complex UI components composed of molecules and atoms:

- **Form**: Complete form components (coming soon)
- **Navigation**: Header and navigation components (coming soon)

## 🎨 CSS and Styling

### Including CSS

The design system requires its CSS to be imported for proper styling. You have several options:

#### Option 1: Import CSS directly (Recommended)
```tsx
import '@ishant-sahu/atomic-design-system/dist/style.css';
```

#### Option 2: Import in your main entry point
```tsx
// In your main.tsx or App.tsx
import '@ishant-sahu/atomic-design-system/dist/style.css';
```

#### Option 3: Import in your CSS file
```css
/* In your global CSS */
@import '@ishant-sahu/atomic-design-system/dist/style.css';
```

### Tailwind CSS Requirements

This design system is built on Tailwind CSS. Make sure your project has Tailwind CSS installed and configured:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update your `tailwind.config.js`:
```js
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
}
```

## 🎨 Theming

The design system includes a comprehensive theming system with:

- **Color Palettes**: Primary, secondary, success, warning, and error colors
- **Typography**: Consistent font scales and line heights
- **Spacing**: Standardized spacing scale
- **Shadows**: Multiple shadow variants for depth
- **Animations**: Smooth transitions and micro-interactions

### Theme Switching

```tsx
import { useTheme } from '@your-org/atomic-design-system';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  );
}
````

## 📚 Storybook

Run Storybook locally to explore all components:

```bash
npm run storybook
# or
yarn storybook
```

Storybook provides:

- Interactive component playground
- Props documentation
- Usage examples
- Accessibility testing
- Responsive design testing

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. Build the library:
   ```bash
   npm run build:lib
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:lib` - Build library for npm
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build static Storybook
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📦 Publishing to NPM

1. Update version in `package.json`
2. Build the library:
   ```bash
   npm run build:lib
   ```
3. Publish to npm:
   ```bash
   npm publish
   ```

## 🎯 Component API

### Button

```tsx
<Button
  variant="primary"
  size="md"
  loading={false}
  disabled={false}
  leftIcon={<Icon />}
  rightIcon={<Icon />}
>
  Button Text
</Button>
```

**Props:**

- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `loading`: boolean
- `disabled`: boolean
- `leftIcon`: ReactNode
- `rightIcon`: ReactNode

### Input

```tsx
<Input
  label="Email"
  placeholder="Enter your email"
  type="email"
  error="Invalid email"
  helperText="We'll never share your email"
  leftIcon={<Icon />}
  rightIcon={<Icon />}
/>
```

**Props:**

- `label`: string
- `placeholder`: string
- `type`: HTML input types
- `error`: string
- `helperText`: string
- `variant`: 'default' | 'error' | 'success'
- `leftIcon`: ReactNode
- `rightIcon`: ReactNode

### Card

```tsx
<Card>
  <CardHeader>
    <h2>Card Title</h2>
    <p>Subtitle</p>
  </CardHeader>
  <CardBody>
    <p>Card content</p>
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## 🎨 Customization

### Tailwind Configuration

The design system uses a custom Tailwind configuration that can be extended:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@your-org/atomic-design-system/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Your custom colors
      },
    },
  },
};
```

### CSS Custom Properties

Override design system variables:

```css
:root {
  --primary-500: #your-color;
  --border-radius: 8px;
}
```

## 🧪 Testing

The design system includes comprehensive testing:

- **Unit Tests**: Component functionality testing
- **Visual Regression**: Storybook visual testing
- **Accessibility**: Automated accessibility testing
- **Cross-browser**: Browser compatibility testing

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE 11+ (with polyfills)

## 🐳 Docker

The design system can be run using Docker for consistent development and deployment environments.

### Quick Start with Docker

```bash
# Build the Docker image
docker build -t atomic-design-system .

# Run the container
docker run -p 6006:6006 atomic-design-system

# Access Storybook at http://localhost:6006
```

### Docker Features

- **Multi-stage build** for optimized image size
- **Non-root user** for security
- **Port 6006** exposed for Storybook
- **Production ready** with built assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Development Guidelines

- Follow atomic design principles
- Maintain consistent naming conventions
- Write comprehensive documentation
- Include Storybook stories for new components
- Ensure accessibility compliance
- Add TypeScript types for all props

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [Storybook](link-to-storybook)
- **Issues**: [GitHub Issues](link-to-issues)
- **Discussions**: [GitHub Discussions](link-to-discussions)

## 🔮 Roadmap

- [ ] Form components (Form, Select, Checkbox, Radio)
- [ ] Navigation components (Header, Sidebar, Breadcrumb)
- [ ] Data display components (Table, List, Badge)
- [ ] Feedback components (Alert, Toast, Modal)
- [ ] Layout components (Grid, Container, Divider)
- [ ] Advanced theming system
- [ ] Component playground
- [ ] Design tokens export
- [ ] Figma integration

---

Built with ❤️ using React, TypeScript, Tailwind CSS, and Storybook.
