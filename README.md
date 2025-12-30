# Coconut UI React

A modern, tree-shakeable React UI component library styled with Tailwind CSS.

[![npm version](https://img.shields.io/npm/v/@coconut-ui/react.svg)](https://www.npmjs.com/package/@coconut-ui/react)
[![CI](https://github.com/coconut-ui/react/actions/workflows/ci.yml/badge.svg)](https://github.com/coconut-ui/react/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install @coconut-ui/react
```

### Peer Dependencies

Make sure you have React 18+ installed:

```bash
npm install react react-dom
```

## Usage

### Import Components

```tsx
import { Button } from '@coconut-ui/react';

function App() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  );
}
```

### Path-based Imports (Tree-shaking)

For optimal bundle size, import components directly:

```tsx
import { Button } from '@coconut-ui/react/button';
```

### Import Styles

Include the CSS in your application entry point:

```tsx
import '@coconut-ui/react/styles.css';
```

Or in your CSS:

```css
@import '@coconut-ui/react/styles.css';
```

## Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@coconut-ui/react';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button isLoading>Loading...</Button>
<Button disabled>Disabled</Button>
<Button fullWidth>Full Width</Button>

// With Icons
<Button leftIcon={<Icon />}>With Icon</Button>
<Button rightIcon={<Icon />}>With Icon</Button>
```

#### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'destructive'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `isLoading` | `boolean` | `false` | Shows loading spinner |
| `leftIcon` | `ReactNode` | - | Icon before text |
| `rightIcon` | `ReactNode` | - | Icon after text |
| `fullWidth` | `boolean` | `false` | Full container width |

## Theming

Coconut UI uses CSS custom properties for theming. Override them in your CSS:

```css
:root {
  --color-primary-500: oklch(0.55 0.18 200);
  --color-primary-600: oklch(0.48 0.18 200);
  --color-primary-700: oklch(0.40 0.16 200);
}
```

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Run tests
npm run test

# Build package
npm run build

# Lint code
npm run lint
```

## Publishing

### Development (Beta)

```bash
# Update package.json name to @coconut-beta/react
npm publish --access public
```

### Production

```bash
# Update package.json name to @coconut-ui/react
npm publish --access public
```

## License

MIT © Coconut UI
