# React Averdi Routing Documentation

## Overview
This document describes the routing structure of the React Averdi application, which uses React Router v6 for client-side navigation.

## Base Configuration
- **Router Type**: BrowserRouter with basename `/react-averdi`
- **Lazy Loading**: Implemented for all pages except Home
- **Suspense**: Used for loading states during lazy component loading

## Route Structure

### Core Routes
- `/` - Home page (eager loaded)
- `/kontakt` - Contact page
- `/aktuelt/:slug` - Article page (dynamic route)
- `/farger` - Stylesheet/color reference page

### Knowledge Bank Routes
- `/kunnskapsbank` - Main knowledge bank page
- `/kunnskapsbank/handel` - Trade/Commerce information
- `/kunnskapsbank/organisasjoner` - Organizations information
- `/kunnskapsbank/tiltakssonen` - Tiltakssonen guide

### Sami Parliament (Sametinget) Routes
- `/kunnskapsbank/sametinget` - Main Sami Parliament page
- `/kunnskapsbank/sametinget/variert-naeringsliv` - Varied business life
- `/kunnskapsbank/sametinget/samisk-reiseliv` - Sami tourism
- `/kunnskapsbank/sametinget/primaernaering` - Primary industries
- `/kunnskapsbank/sametinget/duodji` - Duodji (traditional Sami crafts)

### Duodji Sub-Routes
- `/kunnskapsbank/sametinget/duodji/produktutvikling` - Product development
- `/kunnskapsbank/sametinget/duodji/markedspromotering` - Market promotion
- `/kunnskapsbank/sametinget/duodji/utstyr-investering` - Equipment investment
- `/kunnskapsbank/sametinget/duodji/etablererstotte` - Establishment support
- `/kunnskapsbank/sametinget/duodji/dokumentasjon` - Documentation
- `/kunnskapsbank/sametinget/duodji/kompetanseheving` - Competence enhancement

### Team Routes
- `/om-oss/team` - Team overview
- `/om-oss/ansatte/:id` - Individual employee profile (dynamic route)

## Technical Implementation

### Lazy Loading Pattern
```typescript
const KunnskapsbankPage = lazy(() => import('./pages/KunnskapsbankPage').then(m => ({ default: m.KunnskapsbankPage })));
```

### Route Definition Pattern
```typescript
<Route path="/kunnskapsbank" element={<KunnskapsbankPage />} />
```

### Loading State
- Custom `PageLoader` component with spinning animation
- Wrapped in `<Suspense>` for graceful loading

## Navigation Structure
The application uses a hierarchical navigation pattern:
1. Main navigation in `<Navbar />`
2. Breadcrumbs for deep navigation
3. Contextual links within content

## SEO Considerations
- All routes include proper meta tags via `react-helmet-async`
- Dynamic routes handle parameter-based content loading
- Lazy loading improves initial page load performance