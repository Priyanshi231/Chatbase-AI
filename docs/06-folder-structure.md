# Folder Structure

## Project Structure

chatbase-ai/

├── frontend/
├── backend/
├── docs/
├── .gitignore
├── README.md
└── package.json

---

# Frontend Structure

frontend/

├── public/
│
├── src/
│
│   ├── assets/
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── chat/
│   │   ├── workspace/
│   │   ├── file/
│   │   ├── dashboard/
│   │   └── ui/
│   │
│   ├── pages/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── workspace/
│   │   ├── settings/
│   │   └── errors/
│   │
│   ├── layouts/
│   │
│   ├── context/
│   │
│   ├── hooks/
│   │
│   ├── services/
│   │
│   ├── utils/
│   │
│   ├── constants/
│   │
│   ├── routes/
│   │
│   ├── lib/
│   │
│   ├── styles/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js

---

# Backend Structure

backend/

├── src/
│
│   ├── config/
│   │
│   ├── controllers/
│   │
│   ├── middleware/
│   │
│   ├── models/
│   │
│   ├── routes/
│   │
│   ├── services/
│   │
│   │   ├── ai/
│   │   ├── parser/
│   │   ├── storage/
│   │   └── rag/
│   │
│   ├── validators/
│   │
│   ├── utils/
│   │
│   ├── uploads/
│   │
│   ├── logs/
│   │
│   ├── app.js
│   └── server.js
│
├── package.json
└── .env

---

# Frontend Folder Responsibilities

assets/

Images, icons, logos and static files.

components/

Reusable UI components.

pages/

Application pages.

layouts/

Application layouts.

context/

Global state management.

hooks/

Custom React hooks.

services/

API calls.

utils/

Helper functions.

constants/

Application constants.

routes/

React Router configuration.

styles/

Global styles.

---

# Backend Folder Responsibilities

config/

Database connection and environment configuration.

controllers/

Receive request and return response.

middleware/

Authentication, error handling and request processing.

models/

MongoDB schemas.

routes/

Express API routes.

services/

Business logic.

validators/

Request validation.

utils/

Common helper functions.

uploads/

Temporary uploaded files.

logs/

Application logs.

---

# Request Flow

Frontend

↓

Axios

↓

Express Route

↓

Middleware

↓

Controller

↓

Service

↓

Model

↓

MongoDB

↓

Return Response

↓

Frontend

---

# AI Request Flow

React

↓

Axios

↓

AI Route

↓

AI Controller

↓

AI Service

↓

Gemini API

↓

Response

↓

Save Chat

↓

Frontend

---

# File Upload Flow

Frontend

↓

Upload API

↓

Multer

↓

Cloudinary

↓

MongoDB

↓

Response

---

# RAG Flow

Upload PDF

↓

Extract Text

↓

Split Text

↓

Generate Embeddings

↓

Vector Database

↓

Similarity Search

↓

Gemini

↓

Response

---

# Coding Standards

- Use ES Modules
- Use async/await
- Use camelCase for variables
- Use PascalCase for React components
- Use kebab-case for folders
- Use meaningful filenames
- Keep functions small
- Separate business logic from controllers

---

# Naming Convention

Components

UserCard.jsx

Navbar.jsx

Sidebar.jsx

Pages

LoginPage.jsx

DashboardPage.jsx

WorkspacePage.jsx

Controllers

auth.controller.js

workspace.controller.js

chat.controller.js

Services

auth.service.js

chat.service.js

Routes

auth.routes.js

chat.routes.js

Models

User.js

Workspace.js

Chat.js

Message.js

File.js

Bookmark.js

---

# Environment Variables

Backend

PORT

MONGODB_URI

JWT_SECRET

JWT_EXPIRES_IN

GEMINI_API_KEY

CLOUDINARY_CLOUD_NAME

CLOUDINARY_API_KEY

CLOUDINARY_API_SECRET

Frontend

VITE_API_URL