# GEM Platform - Cybersecurity & Finance Application

## Overview

This is a full-stack web application for GEM Platform, a cybersecurity and financial services company. The application serves as a corporate website showcasing the company's services in cybersecurity automation, asset recovery, and financial growth solutions. Built with React on the frontend and Express.js on the backend, it features a modern, cyberpunk-themed design with comprehensive business information and contact capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with a clear separation between client-side and server-side code:

- **Frontend**: React-based SPA with TypeScript and modern UI components
- **Backend**: Express.js REST API server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but minimal usage)
- **Styling**: Tailwind CSS with shadcn/ui components and custom cyberpunk theme
- **Routing**: File-based routing using Wouter for client-side navigation
- **Build System**: Vite for development and production builds

## Key Components

### Frontend Architecture
- **React 18** with TypeScript for type safety
- **Wouter** for lightweight client-side routing
- **TanStack Query** for server state management and API calls
- **shadcn/ui** component library for consistent UI elements
- **Tailwind CSS** with custom cyberpunk color scheme and animations
- **React Hook Form** for form handling and validation

### Backend Architecture
- **Express.js** server with TypeScript
- **RESTful API** design for client-server communication
- **In-memory storage** for user data (MemStorage class)
- **Error handling middleware** for consistent error responses
- **Request logging** with custom middleware for API monitoring

### UI/UX Design System
- **Cyberpunk theme** with dark backgrounds and cyan/teal accents
- **Glass morphism effects** for modern visual appeal
- **Responsive design** supporting mobile and desktop
- **Custom animations** including floating elements and pulse effects
- **Consistent component styling** using CSS variables and Tailwind utilities

## Data Flow

### Client-Server Communication
1. **React components** make HTTP requests through TanStack Query
2. **Custom API client** (`apiRequest`) handles request formatting and error handling
3. **Express routes** process requests and return JSON responses
4. **Form submissions** use FormSubmit service for contact forms and newsletters

### State Management
- **Server state**: Managed by TanStack Query with caching and invalidation
- **Client state**: Local component state using React hooks
- **Form state**: React Hook Form for complex form interactions
- **UI state**: Toast notifications and loading states

### Database Layer
- **Drizzle ORM** configured for PostgreSQL with schema definitions
- **User schema** defined with basic authentication fields
- **MemStorage** implementation for development/testing without database

## External Dependencies

### Core Framework Dependencies
- **React ecosystem**: React, React DOM, React Hook Form
- **Routing**: Wouter for client-side navigation
- **HTTP client**: Built-in fetch API with custom wrapper
- **State management**: TanStack Query for server state

### UI/Styling Dependencies
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless component primitives
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Component variant management

### Backend Dependencies
- **Express.js**: Web application framework
- **Drizzle ORM**: Type-safe database toolkit
- **Neon Database**: Serverless PostgreSQL provider
- **Connect PG Simple**: Session storage for PostgreSQL

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **PostCSS**: CSS processing with Tailwind
- **ESBuild**: Fast JavaScript bundler for server code

## Deployment Strategy

### Development Environment
- **Vite dev server** for frontend with hot module replacement
- **tsx** for running TypeScript server code directly
- **Concurrent development** with both client and server running

### Production Build
- **Client build**: Vite builds React app to static files
- **Server build**: ESBuild bundles server code with external dependencies
- **Static file serving**: Express serves built client files
- **Environment variables**: Database URL and other config via env vars

### Hosting Considerations
- **Static assets**: Built client files served by Express
- **API endpoints**: RESTful routes under `/api` prefix
- **Database**: PostgreSQL via Neon Database connection
- **Session management**: PostgreSQL-backed sessions for user state

The application is designed to be easily deployable to platforms like Replit, Vercel, or traditional VPS hosting with minimal configuration changes.