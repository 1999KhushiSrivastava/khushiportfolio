# Portfolio Website Project

## Overview

This is a modern portfolio website built with a full-stack architecture featuring a React frontend with TypeScript and Express.js backend. The application is designed as a personal portfolio site with a contact form functionality, utilizing modern web technologies including shadcn/ui components, TailwindCSS for styling, and Drizzle ORM for database operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: TailwindCSS with CSS variables for theming
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Theme Support**: Custom theme provider with dark/light mode toggle

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **Development**: Hot reload with Vite integration in development mode

### Data Storage Architecture
- **Primary Database**: PostgreSQL via Neon Database
- **ORM**: Drizzle ORM with schema-first approach
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **Migration Strategy**: Drizzle Kit for database migrations
- **Fallback**: In-memory storage implementation for development/testing

## Key Components

### Database Schema
- **Users Table**: Basic user management with username/password
- **Contacts Table**: Contact form submissions with name, email, subject, message, and timestamp
- **Schema Validation**: Zod integration with Drizzle for type-safe validation

### API Endpoints
- `POST /api/contacts` - Submit contact form
- `GET /api/contacts` - Retrieve all contacts (admin endpoint)

### UI Components
- **Navigation**: Responsive navigation with smooth scrolling
- **Hero Section**: Personal introduction and call-to-action
- **About Section**: Professional background and statistics
- **Skills Section**: Technical skills with animated progress bars
- **Experience Section**: Professional experience timeline
- **Projects Section**: Portfolio projects showcase
- **Education Section**: Academic background and certifications
- **Contact Section**: Contact form with real-time validation
- **Footer**: Links and additional information

### Theme System
- Custom CSS variables for consistent theming
- Dark/light mode support with system preference detection
- Smooth transitions between theme states

## Data Flow

1. **Contact Form Submission**:
   - User fills contact form → Form validation (Zod) → API request → Database storage → User notification

2. **Page Navigation**:
   - Smooth scrolling navigation → Section anchoring → Visual feedback

3. **Theme Management**:
   - System preference detection → Local storage persistence → CSS variable updates → Component re-rendering

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, Radix UI components
- **Styling**: TailwindCSS, class-variance-authority for component variants
- **Forms**: React Hook Form with Zod resolvers
- **State Management**: TanStack Query for server state
- **Icons**: Lucide React icons
- **Utilities**: clsx, tailwind-merge for className management

### Backend Dependencies
- **Server**: Express.js with TypeScript
- **Database**: Drizzle ORM, Neon Database client
- **Session**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution, Vite for asset serving

### Build Tools
- **Bundler**: Vite for frontend, esbuild for backend production builds
- **TypeScript**: Shared configuration with path mapping
- **PostCSS**: TailwindCSS processing with autoprefixer

## Deployment Strategy

### Development Mode
- Frontend served by Vite dev server with HMR
- Backend runs with tsx for TypeScript execution
- Database migrations applied via Drizzle Kit
- Replit-specific development tools integration

### Production Build
- Frontend: Vite builds optimized static assets to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Static file serving: Express serves built frontend assets
- Database: Production PostgreSQL via environment variables

### Environment Configuration
- `DATABASE_URL` required for PostgreSQL connection
- Node environment detection for development vs production behavior
- Replit-specific plugins and error overlays in development

### Scalability Considerations
- Stateless server design for horizontal scaling
- Database connection pooling via Neon serverless
- CDN-ready static asset structure
- Session storage in database for multi-instance support