# TrailBlaize IT Services

**Premium IT Security Services for High-Net-Worth Individuals and Enterprises**

TrailBlaize is an ultra-modern, full-stack web application designed to showcase premium IT security services. Built with cutting-edge technologies and inspired by Apple's minimalism and Stripe's sophisticated design, it provides a trust-building experience that appeals to discerning clients while maintaining technical credibility.

## 🚀 Features

- **Premium Design System**: Dark-first UI with electric blue and gold accents
- **Modern Architecture**: Full-stack monorepo with React frontend and Express backend
- **Responsive Design**: Mobile-first approach with seamless cross-device experience
- **Performance Optimized**: Built with Vite for lightning-fast development and production builds
- **Type-Safe**: Complete TypeScript implementation across frontend and backend
- **Component Library**: Built on shadcn/ui with custom design system integration

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Wouter** - Lightweight routing (alternative to React Router)
- **TanStack Query** - Powerful data synchronization
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible component library
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon system

### Backend
- **Express.js** - Fast, unopinionated web framework
- **TypeScript** - Type-safe server development
- **Custom Storage Layer** - Database-agnostic abstraction
- **Session Management** - Express sessions with memory store
- **RESTful API** - Clean API design patterns

### Development Tools
- **esbuild** - Fast JavaScript bundler for server
- **Drizzle ORM** - Type-safe database toolkit
- **PostCSS** - CSS processing with Tailwind
- **ESLint & Prettier** - Code quality and formatting

## 📋 Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v8.0.0 or higher)
- **Git** (for version control)

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Trailblaize
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 📚 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run check` | Type check TypeScript files |
| `npm run db:push` | Push database schema changes |

## 🏗 Project Structure

```
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── ui/        # shadcn/ui components
│   │   │   └── ...        # Feature components
│   │   ├── pages/         # Route components
│   │   ├── lib/           # Utilities and configurations
│   │   └── hooks/         # Custom React hooks
│   └── index.html         # HTML entry point
├── server/                # Express backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Storage abstraction layer
│   └── vite.ts           # Vite integration for development
├── shared/               # Shared types and schemas
├── attached_assets/      # Static assets and images
└── dist/                # Built application (after build)
```

## 🎨 Design System

TrailBlaize implements a sophisticated design system with:

- **Dark-first approach** with deep charcoal backgrounds
- **Electric blue primary** (`hsl(210 100% 55%)`) for brand elements
- **Gold/copper accents** (`hsl(35 90% 55%)`) for premium highlights
- **HSL color system** with alpha value support
- **Responsive typography** using Inter font family
- **Consistent spacing** using Tailwind's 4px grid system

Refer to `design_guidelines.md` for complete design specifications.

## 🔧 Configuration

### Path Aliases
The project uses the following path aliases:
- `@/` → `client/src/`
- `@shared/` → `shared/`
- `@assets/` → `attached_assets/`

### Environment Variables
The application uses the following environment variables:

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `5000` | Server port (required for production) |
| `NODE_ENV` | `development` | Environment mode |

## 🚀 Deployment

### Production Build
```bash
npm run build
```

This creates:
- Client build in `dist/public/`
- Server bundle in `dist/`

### Start Production Server
```bash
npm start
```

**Important**: The application serves on a single port (default 5000) for both API and static files.

## 🔄 Development Workflow

1. **Development Mode**: Uses Vite middleware integrated into Express
2. **Hot Reload**: Automatic refresh on file changes
3. **Type Checking**: Real-time TypeScript validation
4. **API Development**: RESTful endpoints with structured error handling
5. **Component Development**: Live component preview with shadcn/ui

## 🗃 Database Setup

The application uses Drizzle ORM with a storage abstraction layer:

1. Configure your database connection in `drizzle.config.ts`
2. Push schema changes: `npm run db:push`
3. The storage layer (`server/storage.ts`) provides database-agnostic operations

## 🤝 Contributing

1. Follow the established component patterns
2. Maintain the premium aesthetic guidelines
3. Use TypeScript throughout
4. Test components with `data-testid` attributes
5. Respect the storage abstraction layer

## 🔧 Troubleshooting

### Common Issues

**Vite Integration Error**: Ensure you're using Node.js v18+ for `import.meta` support.

**Port Conflicts**: The app uses a single port (5000) for both API and frontend in production.

**File Corruption**: If you encounter binary file errors, restore from git: `git restore <file>`

**Build Errors**: Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`

## 📄 License

MIT License - see LICENSE file for details.

---

**TrailBlaize IT Services** - Blazing-fast security, global access, zero downtime.
