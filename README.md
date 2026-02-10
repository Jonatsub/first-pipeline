# First Pipeline - Stellar Security Solutions

A modern web application combining a React frontend with an Express backend.

## Tech Stack

**Frontend:**
- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn-ui components

**Backend:**
- Node.js
- Express

## Development

### Prerequisites
- Node.js 18+ and npm

### Setup

```bash
# Install dependencies
npm install

# Start development server (Vite)
npm run dev
```

The development server will run at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build the React app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm start` - Start the Express server (serves built app)

## Production Deployment

### Build and Run

```bash
# Build the React app
npm run build

# Start the Express server
npm start
```

The Express server will:
- Serve the built React app from the `dist/` directory
- Expose API endpoints at `/api/*`
- Handle client-side routing
- Run on port 3000 (or `PORT` environment variable)

### Deploy to Render

1. **Build Command:** `npm install && npm run build`
2. **Start Command:** `npm start`
3. The app will be available at your Render URL

## API Endpoints

- `GET /api/status` - Health check endpoint

## Project Structure

```
.
├── src/              # React source code
├── public/           # Static assets
├── dist/             # Built React app (generated)
├── index.js          # Express server
├── test.js           # Server tests
├── vite.config.ts    # Vite configuration
├── tailwind.config.ts # Tailwind configuration
└── package.json      # Dependencies and scripts
```
