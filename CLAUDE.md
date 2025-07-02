# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start the development server (runs on http://localhost:3000)
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Architecture

### Overview
This is a Next.js 15 application for ModiQube, a digital media agency. It uses the App Router architecture and is built with React 19, Tailwind CSS 4, and Framer Motion for animations.

### Key Technologies
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4 with PostCSS
- **Animations**: Framer Motion (`motion` package) and React Three Fiber for 3D elements
- **Icons**: Lucide React
- **3D Graphics**: Three.js with React Three Fiber and Drei

### Directory Structure
- `src/app/` - Main application code using App Router
  - `components/` - Reusable UI components
    - `onboarding/` - Multi-step onboarding flow components
      - `plan-builder/` - Custom plan builder sub-components
  - `onboarding/` - Onboarding pages and routing
  - `services/` - Service-specific pages with individual data and animations
  - `pricing/` - Pricing page
- `src/config/` - Configuration files including service definitions
- `public/` - Static assets

### Architecture Patterns

#### Component Organization
- Main page components are in `src/app/components/`
- Service-specific components are co-located in `src/app/services/[service-name]/`
- Each service page has its own `data.js` and `animations.js` files
- Onboarding components are modular and reusable

#### Data Management
- Service configurations are centralized in `src/config/services.js`
- Onboarding data is in `src/app/components/onboarding/data.js`
- Both files contain comprehensive service definitions, pricing, and package information
- Services include base prices and extensive sub-service options

#### Service Architecture
The application offers 6 main services:
1. Mobile App Development
2. Web Development  
3. AI Integration
4. Digital Marketing
5. UI/UX Design
6. Performance Optimization

Each service has:
- Base pricing structure
- Sub-services with individual pricing
- Feature descriptions
- Package bundling options (Silver, Gold, Platinum)

#### Onboarding Flow
Multi-step process with components for:
- Service selection
- Sub-service selection
- Package selection
- Custom plan building
- Contact information collection
- Summary and confirmation

#### Animation System
- Framer Motion is used extensively for page transitions and component animations
- `AnimatedSection` wrapper component for consistent section animations
- Service pages have individual animation configurations
- 3D particle effects using React Three Fiber

### Styling Approach
- Tailwind CSS 4 for utility-first styling
- Custom color schemes for different services
- Responsive design patterns
- Dark theme support indicated in some components

### Navigation Structure
- Main navigation in the header
- Service-specific pages at `/services/[service-name]`
- Onboarding flow at `/onboarding`
- Pricing page at `/pricing`

## Claude Workflow Rules

When working on this codebase, follow these 7 rules:

1. **Think and Plan**: First think through the problem, read the codebase for relevant files, and write a plan to `tasks/todo.md`.

2. **Create Todo List**: The plan should have a list of todo items that you can check off as you complete them.

3. **Verify Plan**: Before you begin working, check in with the user and get verification of the plan.

4. **Execute and Track**: Begin working on the todo items, marking them as complete as you go.

5. **Communicate Progress**: At every step, give a high level explanation of what changes you made.

6. **Keep It Simple**: Make every task and code change as simple as possible. Avoid massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.

7. **Document Results**: Finally, add a review section to the `todo.md` file with a summary of the changes you made and any other relevant information.