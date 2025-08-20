# Chabad Tefen Tefillin Project
A comprehensive system to manage the distribution of tefillin to IDF soldiers, from registration through distribution and follow-up.

## Project Overview
This project provides a digital platform for Chabad Tefen to manage their tefillin distribution program. The system tracks the entire process from soldier registration, approval, payment processing, and distribution to ongoing engagement and public content sharing.

## Key Components
- **Backend API:** Node.js TypeScript service with Express
- **Admin Frontend:** React TypeScript application (Material-UI)
- **Public Portal:** Next.js TypeScript application (Tailwind CSS)
- **ETL Package:** Integration services for external APIs
- **Database:** Supabase PostgreSQL
- **Integrations:** Google Auth, Google Drive, Google Calendar, Meshulam payments

## Architecture
Monorepo structure with shared TypeScript types and multiple specialized packages.

## Documentation
### Project Documentation

- [Main Project Document](https://docs.google.com/document/d/1bV6V7-efPyCAex9npd1aAYTCMa3IzPlI0L45b3wE644/edit) - Contains user roles, system components, project timeline, and wireframes
- [Company Structure Document](https://docs.google.com/document/d/101jSgeGsZHxSyKt8KXS7uT1o9-s26cVfdBbh9_gVp9w/edit) - Detailed breakdown of company responsibilities

### Team-Specific PRDs

- [Backend Team PRD](https://docs.google.com/document/d/1LVZDFTMcxREd83OE85mjfbvQQqnFVpUAvgQMEMkShgU/edit) - Detailed requirements for the Backend team
- [Internal Frontend Team PRD](https://docs.google.com/document/d/1_2Sz45_okK52-Wvg34WFA5Q9OgLrZkOnoBSM3idbIhQ/edit) - Detailed requirements for the Internal Frontend team
- [Integrations Team PRD](https://docs.google.com/document/d/1NdLOGlTpJW7omQGMK_64Al5BJdNS7NsKnH3B73_9a0s/edit) - Detailed requirements for the Integrations team
- [Public Portal Team PRD](https://docs.google.com/document/d/1QxEevRbX-zbfuV_5R3dd1yfr74HjgFDmQSLet5Amof4/edit) - Detailed requirements for the Public Portal team

### API Documentation
The API documentation is generated from the TypeScript definitions. You can view it [here:](types)

### Project Structure
```
├── packages/
│   ├── backend/           # Express.js API server
│   ├── frontend/          # React admin interface
│   ├── public-portal/     # Next.js public website
│   └── ETL/              # Integration services
├── types/                 # Shared TypeScript types
├── locales/              # Internationalization files
└── README.md
```

## Development Setup
### Prerequisites

- Node.js (v18+)
- npm
- Supabase CLI (optional)
- Git

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/ChayaZak/Tefillin-Flow.git
cd Tefillin-Flow
```

2. Install dependencies:
```bash
# Install all packages
npm install

# Or install per package
cd packages/backend && npm install
cd ../frontend && npm install
cd ../public-portal && npm install
```

3. Set up environment variables:
```bash
cp packages/backend/.env.example packages/backend/.env
cp packages/frontend/.env.example packages/frontend/.env
```
Update the variables with your local configuration.

4. Start the development servers:
```bash
# Backend (port 3001)
cd packages/backend && npm run dev

# Frontend (port 3000)
cd packages/frontend && npm start

# Public Portal (port 3000)
cd packages/public-portal && npm run dev
```

## Available Scripts

### Backend
```bash
npm run dev          # Start development server with nodemon
npm run build        # Build TypeScript to JavaScript
npm start            # Start production server
npm test             # Run tests with Jest
npm run lint         # Run ESLint
npm run typecheck    # TypeScript type checking
```

### Frontend
```bash
npm start            # Start development server
npm run build        # Build for production
npm test             # Run tests
npm run lint         # Run ESLint
```

### Public Portal
```bash
npm run dev          # Start Next.js development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run Next.js linting
```

## Deployment

### Backend
- Platform: Render or similar Node.js hosting
- Build command: `npm run build`
- Start command: `npm start`

### Frontend
- Platform: Vercel, Netlify, or similar React hosting
- Build command: `npm run build`
- Output directory: `build`

### Public Portal
- Platform: Vercel (recommended for Next.js)
- Build command: `npm run build`
- Output directory: `.next`

### Database
- Supabase PostgreSQL
- Connection via environment variables

## Environment Variables

### Backend (.env)
```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret
PORT=3001
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:3001
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
```

## Contributing

1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Make your changes and test them
3. Commit: `git commit -m "Add feature description"`
4. Push: `git push origin feature/your-feature-name`
5. Create a Pull Request

## License
This project is private and proprietary. Unauthorized copying, distribution, or use is strictly prohibited.
