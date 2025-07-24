# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio application using TypeScript, React 19, and Tailwind CSS v4. The project follows the App Router pattern with components structured in the `my-app/` directory.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Inter from Google Fonts
- **Animation**: Framer Motion v11.0.0
- **TypeScript**: Strict mode enabled with path mapping (`@/*` → `./`)

## Key Structure

- `app/layout.tsx`: Root layout with font configuration and global styles
- `app/page.tsx`: Main page importing Hero, Projects, and Contact components
- `app/globals.css`: Global styles with CSS variables for theming
- Components expected at `components/` (referenced but not yet created)

## Configuration Notes

- Uses Turbopack for development (`--turbopack` flag)
- ESLint configured with Next.js core web vitals and TypeScript rules
- Dark mode support via CSS media queries
- Custom CSS properties for theming