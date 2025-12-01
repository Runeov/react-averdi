# Averdi - Autorisert Regnskapsførerselskap

[![Deploy to GitHub Pages](https://github.com/AverdiAS/react-averdi/actions/workflows/deploy.yml/badge.svg)](https://github.com/AverdiAS/react-averdi/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A modern React website for Averdi, an authorized accounting firm based in Karasjok, Norway. Built with React 19, TypeScript, and Tailwind CSS.

## 🌐 Live Demo

**[View Live Site](https://averdias.github.io/react-averdi/)**

## ✨ Features

- **Modern Design** - Clean, professional UI with responsive layout
- **Multi-page Navigation** - React Router for seamless page transitions
- **Service Showcase** - Detailed service pages for accounting, payroll, and advisory
- **Team Section** - Employee profiles and company information
- **Knowledge Base** - Articles and resources for clients
- **News Section** - Latest updates and announcements
- **Contact Integration** - Easy-to-use contact forms

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev/) | 19.2 | UI Framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.9 | Type Safety |
| [Vite](https://vitejs.dev/) | 7.2 | Build Tool |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1 | Styling |
| [React Router](https://reactrouter.com/) | 7.9 | Navigation |
| [Radix UI](https://www.radix-ui.com/) | Latest | UI Components |
| [Lucide React](https://lucide.dev/) | Latest | Icons |

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm 10 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/AverdiAS/react-averdi.git

# Navigate to project directory
cd react-averdi

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
react-averdi/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment
├── public/                 # Static assets
│   ├── logo_averdi.png
│   └── robots.txt
├── src/
│   ├── assets/            # Images and media
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   └── ...           # Feature components
│   ├── data/             # Static data files
│   ├── pages/            # Page components
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚢 Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Automatic Deployment

1. Push changes to the `main` branch
2. GitHub Actions automatically builds and deploys
3. View deployment status in the **Actions** tab

### Manual Deployment

1. Go to **Actions** tab on GitHub
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## 🔧 Configuration

### Environment Variables

No environment variables are required for basic setup. For custom configurations:

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | API endpoint (if applicable) |

### Base Path

The application is configured with base path `/react-averdi/` for GitHub Pages deployment. Modify in [`vite.config.ts`](vite.config.ts:6) if deploying elsewhere.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Averdi AS**
- Website: [averdi.no](https://averdi.no)
- Location: Karasjok, Norway

---

Built with ❤️ by Averdi AS
