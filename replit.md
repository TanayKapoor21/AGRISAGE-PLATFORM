# Agrisage Platform

## Overview

Agrisage is a comprehensive digital platform designed to assist farmers throughout their agricultural journey. The platform provides unified access to farming guidance, marketplace services, waste management, income opportunities, and financial services. Built with accessibility as a core principle, it supports multilingual interfaces (English, Hindi, Tamil, Punjabi, Marathi) and voice-enabled interactions to serve low-literacy rural users.

The application follows a Google-like simplicity philosophy with card-based layouts, color-coded icons, and minimal cognitive load. Key features include crop planning, seed/fertilizer marketplaces, market price tracking, stubble waste management with carbon credits, tree plantation partnerships, and agricultural insurance/loan services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (alternative to React Router)
- TanStack Query (React Query) for server state management and data fetching

**UI Component System**
- shadcn/ui components (Radix UI primitives) configured in "new-york" style
- Tailwind CSS for utility-first styling with custom design tokens
- Component library includes 30+ pre-built accessible components (dialogs, cards, forms, etc.)
- Custom color system with semantic tokens for farming-green, market-blue, stubble-orange, income-purple, and finance-teal

**State Management Strategy**
- React hooks (useState, useEffect) for local component state
- TanStack Query for server state with disabled refetch behaviors (staleTime: Infinity)
- No global state management library (Redux/Zustand) - intentionally kept simple

**Design System**
- Design guidelines documented in `design_guidelines.md` emphasizing accessibility
- Large touch targets (minimum 44px) for mobile/rural user accessibility
- Consistent spacing system using Tailwind units (4, 6, 8, 12, 16, 20)
- System fonts prioritized for readability and fast loading
- Dark mode support with theme toggle functionality

**Routing Structure**
- Homepage (/) - Central dashboard with feature cards
- /farming-help - Crop suggestions, seeds marketplace, planting guides, climate alerts
- /agri-market - Market prices, buyer discovery, price trends
- /stubble-management - Waste center locator, carbon credit calculator
- /earn-income - Tree plantation partnerships, carbon offset programs
- /financial-services - Insurance comparison, loan eligibility, EMI calculator

### Backend Architecture

**Server Framework**
- Express.js with TypeScript running on Node.js
- Custom middleware for JSON request logging and response capture
- In-memory storage implementation (MemStorage) for development/prototyping
- Database-ready architecture with Drizzle ORM integration

**API Design**
- RESTful API structure (routes prefixed with /api)
- Storage interface pattern (IStorage) for data access abstraction
- Minimal routes currently implemented - designed for incremental feature addition

**Development Features**
- Vite middleware integration for SSR/HMR in development mode
- Custom error overlay plugin (@replit/vite-plugin-runtime-error-modal)
- Request/response logging with performance metrics
- Hot reload support for both client and server code

### Data Storage Solutions

**Database Configuration**
- PostgreSQL via Neon serverless database (@neondatabase/serverless)
- Drizzle ORM for type-safe database operations
- WebSocket connection support for serverless environments
- Schema-first approach with Drizzle Zod validation

**Current Schema**
- Users table with UUID primary keys, username/password authentication
- Extensible schema structure in `shared/schema.ts`
- Migration support via drizzle-kit

**Storage Abstraction**
- IStorage interface defines CRUD operations (getUser, getUserByUsername, createUser)
- MemStorage class provides in-memory implementation for development
- Database implementation ready to replace MemStorage without code changes

### Authentication and Authorization

**Current Implementation**
- Basic user schema with username/password fields
- No active authentication middleware implemented yet
- Session management ready (connect-pg-simple for PostgreSQL sessions)
- Architecture supports future implementation of JWT or session-based auth

### External Dependencies

**UI Component Libraries**
- @radix-ui/* (15+ packages) - Headless accessible component primitives
- lucide-react - Icon system for consistent visual language
- embla-carousel-react - Touch-friendly carousel for tutorial displays
- recharts - Data visualization for market price trends and analytics

**Form Management**
- react-hook-form with @hookform/resolvers for form validation
- drizzle-zod for schema-based validation bridging database and forms
- Integrated with shadcn/ui form components

**Utility Libraries**
- date-fns - Date manipulation for planting schedules and market data
- class-variance-authority - Type-safe component variant management
- clsx & tailwind-merge - Conditional className composition
- nanoid - Unique ID generation for client-side operations

**Development Dependencies**
- tsx - TypeScript execution for development server
- esbuild - Fast bundling for production builds
- Replit integration plugins (cartographer, dev-banner) for cloud development environment

**Database & ORM**
- drizzle-orm - TypeScript ORM with PostgreSQL dialect
- @neondatabase/serverless - Serverless PostgreSQL client with WebSocket support
- ws - WebSocket library for database connections
- drizzle-kit - Schema management and migrations

**Build & Tooling**
- TypeScript with strict mode enabled
- Vite with React plugin and path aliases (@, @shared, @assets)
- PostCSS with Tailwind CSS and Autoprefixer
- ESM module system throughout the stack