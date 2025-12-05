# React Averdi Project Structure Documentation

## Overview
This document provides a comprehensive guide to the React Averdi project structure, including file organization, routing architecture, and dependency management.

## Project Structure

```
react-averdi/
├── .github/                          # GitHub configuration
├── .kilocode/                        # KiloCode AI configuration
├── public/                          # Static assets
│   ├── images/                      # Optimized images
│   ├── robots.txt                   # SEO configuration
│   └── sitemap.xml                  # SEO sitemap
├── src/
│   ├── assets/                      # Media assets
│   ├── components/                  # Reusable UI components
│   │   ├── ui/                      # UI primitives
│   │   └── *.tsx                    # Business components
│   ├── data/                        # Application data
│   ├── pages/                       # Route components
│   │   └── duodji/                  # Duodji sub-routes
│   ├── App.tsx                      # Main application
│   └── main.tsx                     # Entry point
├── routing.md                       # Routing documentation
├── package.json                     # Project configuration
└── README.md                        # Main project readme
```

## File Organization

### Components
- **UI Components**: Atomic design primitives in `src/components/ui/`
- **Business Components**: Domain-specific components in `src/components/`
- **Pages**: Route-specific components in `src/pages/`

### Data Management
- **Static Data**: JSON/TS files in `src/data/`
- **Dynamic Data**: Fetched via API calls in components

### Assets
- **Images**: Optimized AVIF format in `src/assets/`
- **Public Assets**: Static files in `public/`

## Routing Architecture

### Key Features
- **Lazy Loading**: All pages except Home use dynamic imports
- **Suspense**: Loading states for lazy components
- **Nested Routes**: Hierarchical structure for knowledge bank
- **Dynamic Routes**: Parameter-based routing for articles and profiles

### Route Groups
1. **Core Routes**: Home, Contact, Articles
2. **Knowledge Bank**: Business information hub
3. **Sami Parliament**: Cultural/business resources
4. **Duodji**: Traditional crafts sub-section
5. **Team**: Employee profiles and information

## Dependencies

### Production Dependencies
- **React 19.2.0**: Core framework
- **React Router 7.9.6**: Client-side routing
- **React Helmet Async 2.0.5**: SEO management
- **Tailwind CSS 4.1.17**: Utility-first CSS
- **Radix UI**: Accessible UI primitives
- **Lucide React**: Icon library

### Development Dependencies
- **Vite 7.2.4**: Build tool
- **TypeScript 5.9.3**: Type system
- **ESLint**: Code quality
- **Tailwind CSS**: Styling framework
- **PostCSS**: CSS processing

### Key Scripts
- `dev`: Start development server
- `build`: TypeScript compile + Vite build
- `lint`: Run ESLint
- `preview`: Preview production build
- `deploy`: Deploy to GitHub Pages

## Technical Architecture

### Performance Optimization
- **Code Splitting**: Lazy loading for route components
- **Image Optimization**: AVIF format for assets
- **Tree Shaking**: Vite's ES module support

### SEO Strategy
- **Helmet**: Dynamic meta tags
- **Semantic HTML**: Proper document structure
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Crawler directives

### Accessibility
- **Radix UI**: Accessible component primitives
- **Semantic Markup**: Proper HTML5 elements
- **Keyboard Navigation**: Full keyboard support

## Development Workflow

### Environment Setup
```bash
npm install
npm run dev
```

### Build Process
```bash
npm run build
npm run preview
```

### Deployment
```bash
npm run deploy
```

## Best Practices

### File Naming
- PascalCase for components (`ComponentName.tsx`)
- kebab-case for routes (`/route-name`)
- camelCase for variables/functions

### Component Structure
- Props interface at top
- State management with hooks
- Clear separation of concerns

### Routing Conventions
- Group related routes under common paths
- Use lazy loading for non-critical routes
- Maintain consistent URL structure

## Maintenance Notes

### Updating Dependencies
```bash
npm update
npm audit fix
```

### Adding New Routes
1. Create component in `src/pages/`
2. Add lazy import in `App.tsx`
3. Define route in `<Routes>` section
4. Add navigation link in `<Navbar />`

### Performance Monitoring
- Use Vite's build analyzer
- Monitor bundle size
- Optimize lazy loading boundaries