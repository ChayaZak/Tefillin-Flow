# Chabad Tefen Tefillin Project
A comprehensive system to manage the distribution of tefillin to IDF soldiers, from registration through distribution and follow-up.
## Project Overview
This project provides a digital platform for Chabad Tefen to manage their tefillin distribution program. The system tracks the entire process from soldier registration, approval, payment processing, and distribution to ongoing engagement and public content sharing.

## Key Components
- **Backend API:** Node TypeScript service deployed on Render
- **Admin Frontend:** React TypeScript application deployed on Vercel
- **Public Portal:** React TypeScript application deployed on Vercel
- **Database:** Supabase PostgreSQL
- **Integrations:** Google Auth, Google Calendar, Meshulam payments

## Team Structure
The project is divided into four specialized teams across two development companies:

### The Tefillin Project: Core System Management
1. **Backend Team:** API development, database, and business logic
2. **Internal Frontend Team:** Admin, manager, and location rabbi interfaces

### Chabad Tefen: External Integration & Public Interface
3. **Integrations Team:** Auth, calendar, payments, and media storage integrations
4. **Public Portal Team:** Public website, registration form, and donation flow

Both companies collaborate on the same unified system and codebase, with joint responsibility for integration testing and final delivery.

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
│   ├── backend/           # Backend (Teams 1 & 2)
│   ├── frontend/          # Frontend (Teams 3 & 4)
├── types/                 # Shared types
└── README.md
```

## Development Setup
### Prerequisites

- Node.js
- yarn
- Supabase CLI
- Git

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/diversi-tech/tefilin
cd tefillin-project
```

2. Install dependencies:
```
yarn install
```

3. Set up environment variables:
```
cp packages/backend/.env.example packages/backend/.env
cp packages/frontend/.env.example packages/frontend/.env
```
Update the variables with your local configuration.

4. Start the development server:
```
# In one terminal:
yarn start:backend

# In another terminal:
yarn start:frontend
```

### Backend (Render)
The API is hosted on Render. To deploy:

1. Connect your Render account to the GitHub repository
2. Configure the build command: `yarn workspace tefillin-backend build`
3. Configure the start command: `yarn workspace tefillin-backend start`
4. Set the required environment variables in the Render dashboard

### Frontend (Vercel)
The frontend applications are hosted on Vercel. To deploy:

1. Connect your Vercel account to the GitHub repository
2. Configure the build command: `yarn workspace tefillin-frontend build`
3. Set the required environment variables in the Vercel dashboard
4. Deploy to production

### Database (Supabase)
The database is hosted on Supabase. To set up:

1. Create a new project in Supabase
2. Run the migration scripts: npm run migrate
3. Update your environment variables with the Supabase connection details

## Contributing

1. Create a new branch for your feature: `git checkout -b feature/your-feature-name`
2. Commit your changes: `git commit -m "Add feature description"`
3. Push to the branch: `git push origin feature/your-feature-name`
4. Submit a pull request

## License
This project is private and proprietary. Unauthorized copying, distribution, or use is strictly prohibited.
