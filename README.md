# Personal Presentation Web Application

A web-based presentation platform built with Next.js and Express.js, designed to showcase personal profile, experiences, and learning journey.

## Project Overview

This project is a PowerPoint-like web application that consists of multiple sections:
- Personal Profile
- Past Working Experience/School Projects
- Company Learning Experience
- Selected Engineering Topics

## Tech Stack

### Frontend
- Next.js 13+ (with App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (for slide transitions)

### Backend
- Express.js
- Node.js
- MongoDB (planned)

## Project Structure
```
2025_Feb-April_Connor_Intern_Programmer    # Root project directory
│   .gitignore                            # Specifies which files Git should ignore
│   Project_Plan.md                       # Project planning and requirements documentation
│   README.md                             # Main project documentation and setup instructions
│   tree.txt                              # Directory structure visualization
│   
├───backend                               # Backend server application directory
│   │   app.js                           # Main Express.js server application file
│   │   package-lock.json                # Exact dependency versions lock file for backend
│   │   package.json                     # Backend dependencies and scripts configuration
│   └───node_modules                     # Backend dependencies installation directory
│               
└───frontend                             # Frontend Next.js application directory
    │   .gitignore                       # Frontend-specific Git ignore rules
    │   eslint.config.mjs                # ESLint configuration for code style
    │   next-env.d.ts                    # Next.js TypeScript declarations
    │   next.config.ts                   # Next.js configuration file
    │   package-lock.json                # Exact dependency versions lock file for frontend
    │   package.json                     # Frontend dependencies and scripts configuration
    │   postcss.config.mjs               # PostCSS configuration for CSS processing
    │   README.md                        # Frontend-specific documentation
    │   tailwind.config.ts              # Tailwind CSS configuration
    │   tsconfig.json                    # TypeScript configuration
    │   
    ├───.next                           # Next.js build output directory
    │               
    ├───node_modules                    # Frontend dependencies installation directory
    │           
    ├───public                          # Static files directory
    │       file.svg                    # File icon SVG
    │       globe.svg                   # Globe icon SVG
    │       next.svg                    # Next.js logo SVG
    │       vercel.svg                  # Vercel logo SVG
    │       window.svg                  # Window icon SVG
    │       
    └───src                            # Source code directory
        └───app                        # Next.js 13+ App Router directory
                favicon.ico            # Website favicon
                globals.css            # Global CSS styles
                layout.tsx             # Root layout component
                page.tsx              # Homepage component
                

```

## Getting Started
### Installation
1. Clone the repository

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd frontend
npm install
```
### Run the development server
1. Start the backend server
```bash
cd backend
node app.js
``` 
2. Start the frontend server
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:8080

## Features

- PowerPoint-like page transitions
- Responsive design
- Dynamic content management
- Interactive UI components

## Development Roadmap

- [x] Project setup and configuration
- [ ] Backend API development
- [ ] Frontend page implementation
- [ ] Testing implementation
- [ ] Content management system
- [ ] Deployment setup

## Testing

The project includes both unit and integration tests:

```bash
# Run backend tests
cd backend
npm test

# Run frontend tests
cd frontend
npm test
```


## Contact

Connor Chen - [yuanhong.chen@ebram.org]






