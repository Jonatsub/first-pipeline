![CI Status](https://github.com/Jonatsub/first-pipeline/actions/workflows/ci.yml/badge.svg)

# First Pipeline - Stellar Security Solutions

A modern web application combining a React frontend (Vite) with an Express backend.

## CI/CD (GitHub Actions)

This repo uses a GitHub Actions workflow (`.github/workflows/ci.yml`) that runs on:
- push to `main` and `develop`
- pull requests to `main`

The workflow:
- installs dependencies (`npm ci`)
- runs tests (`npm test`)
- builds a Docker image
- runs a smoke test by starting the container and printing logs

## Tech Stack

Frontend:
- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn-ui components

Backend:
- Node.js
- Express

## Development

Prerequisites:
- Node.js 18+ and npm

Setup:
```bash
npm install
npm run dev
```

The development server runs on http://localhost:5173 by default.
Override port (example): PORT=3000 npm run dev

## Available scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build the React app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint
- `npm test` - Run tests (Vitest)
- `npm start` - Start the Express server

## Docker

Build and run the container:

```bash
docker build -t first-pipeline .
docker run --rm -p 3000:3000 first-pipeline
```

Open http://localhost:3000.

## Production Deployment

Build and run locally:

```bash
npm run build
npm start
```

The Express server will:

- serve the built React app from the `dist/` directory
- expose API endpoints at `/api/*`
- handle client-side routing
- run on port 3000 (or the `PORT` environment variable)

## Deploy to Render

- Build Command: `npm install && npm run build`
- Start Command: `npm start`

The app will be available at your Render URL.

## API Endpoints

- `GET /api/status` - Health check endpoint

## Project Structure
.
├── src/                 # React source code
├── public/              # Static assets
├── dist/                # Built React app (generated)
├── index.js             # Express server
├── test.js              # Server tests
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind configuration
└── package.json         # Dependencies and scripts