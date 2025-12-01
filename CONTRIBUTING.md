# Contributing to Averdi React Website

Thank you for your interest in contributing to the Averdi website project! This document provides guidelines and instructions for contributing.

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm 10 or higher
- Git

### Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/react-averdi.git
   cd react-averdi
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Development Workflow

### Running the Development Server

```bash
npm run dev
```

The site will be available at [http://localhost:5173](http://localhost:5173).

### Code Style

- Use TypeScript for all new code
- Follow the existing code style and patterns
- Use meaningful variable and function names
- Add comments for complex logic

### Linting

Run ESLint before committing:

```bash
npm run lint
```

### Building

Test the production build locally:

```bash
npm run build
npm run preview
```

## 📋 Pull Request Process

1. **Update your branch** with the latest changes from main:
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Test your changes** thoroughly:
   - Run `npm run lint` to check for linting errors
   - Run `npm run build` to ensure the build succeeds
   - Test in multiple browsers if making UI changes

3. **Commit your changes** with a clear message:
   ```bash
   git commit -m "feat: add new feature description"
   ```

4. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request** on GitHub with:
   - A clear title describing the change
   - A description of what was changed and why
   - Screenshots for UI changes
   - Reference to any related issues

## 📁 Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # React components
│   ├── ui/         # Reusable UI components
│   └── ...         # Feature-specific components
├── data/           # Static data files
├── pages/          # Page components
├── App.tsx         # Main app component
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## 🎨 Component Guidelines

### Creating New Components

1. Create a new file in `src/components/`
2. Use TypeScript with proper type definitions
3. Export the component as default
4. Use Tailwind CSS for styling

Example:

```tsx
interface MyComponentProps {
  title: string;
  description?: string;
}

export default function MyComponent({ title, description }: MyComponentProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold">{title}</h2>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
}
```

### Using UI Components

Reusable UI components are in `src/components/ui/`. Use these for consistent styling:

- `Button` - For buttons and clickable elements
- `Card` - For card layouts
- `Input` - For form inputs
- `Badge` - For labels and tags

## 🐛 Reporting Issues

When reporting issues, please include:

1. A clear, descriptive title
2. Steps to reproduce the issue
3. Expected behavior
4. Actual behavior
5. Screenshots if applicable
6. Browser and OS information

## 💡 Feature Requests

For feature requests:

1. Check existing issues to avoid duplicates
2. Describe the feature and its use case
3. Explain why it would be valuable
4. Include mockups or examples if possible

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You!

Your contributions help make this project better. We appreciate your time and effort!