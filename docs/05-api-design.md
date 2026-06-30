# API Design

## Base URL

/api/v1

---

# Authentication APIs

## Register User

POST /api/v1/auth/register

Authentication Required

No

Request Body

```json
{
  "name": "Priyanshi Jain",
  "email": "priyanshi@example.com",
  "password": "password123"
}
```

Success Response

Status: 201 Created

```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "id": "...",
    "name": "Priyanshi Jain",
    "email": "priyanshi@example.com"
  }
}
```

---

## Login

POST /api/v1/auth/login

Authentication Required

No

Request Body

```json
{
  "email": "priyanshi@example.com",
  "password": "password123"
}
```

Success Response

Status: 200 OK

```json
{
  "success": true,
  "token": "JWT_TOKEN",
  "user": {}
}
```

---

## Logout

POST /api/v1/auth/logout

Authentication Required

Yes

Success Response

Status: 200 OK

---

## Get Current User

GET /api/v1/auth/me

Authentication Required

Yes

Success Response

Status: 200 OK

```json
{
  "success": true,
  "data": {}
}
```

---

# Workspace APIs

## Get All Workspaces

GET /api/v1/workspaces

Authentication Required

Yes

---

## Create Workspace

POST /api/v1/workspaces

Request Body

```json
{
  "name": "Placement Prep",
  "description": "Interview preparation"
}
```

---

## Update Workspace

PUT /api/v1/workspaces/:workspaceId

Request Body

```json
{
  "name": "Updated Name"
}
```

---

## Delete Workspace

DELETE /api/v1/workspaces/:workspaceId

---

# Chat APIs

## Get Chats

GET /api/v1/workspaces/:workspaceId/chats

---

## Create Chat

POST /api/v1/workspaces/:workspaceId/chats

Request Body

```json
{
  "title": "Amazon Interview"
}
```

---

## Rename Chat

PUT /api/v1/chats/:chatId

---

## Delete Chat

DELETE /api/v1/chats/:chatId

---

# Message APIs

## Get Messages

GET /api/v1/chats/:chatId/messages

---

## Send Message

POST /api/v1/chats/:chatId/messages

Request Body

```json
{
  "message": "Explain React Hooks"
}
```

Response

```json
{
  "success": true,
  "reply": "..."
}
```

---

# File APIs

## Upload File

POST /api/v1/files/upload

Content-Type

multipart/form-data

Fields

file

workspaceId

---

## Get Workspace Files

GET /api/v1/workspaces/:workspaceId/files

---

## Delete File

DELETE /api/v1/files/:fileId

---

# Search APIs

## Search

GET /api/v1/search?q=react

Response

```json
{
  "workspaces": [],
  "chats": [],
  "messages": [],
  "files": []
}
```

---

# Bookmark APIs

## Add Bookmark

POST /api/v1/bookmarks

---

## Remove Bookmark

DELETE /api/v1/bookmarks/:bookmarkId

---

## Get Bookmarks

GET /api/v1/bookmarks

---

# AI APIs

## Chat with Gemini

POST /api/v1/ai/chat

Request Body

```json
{
  "chatId": "...",
  "message": "Explain Node.js"
}
```

---

## Document Chat

POST /api/v1/ai/document-chat

Request Body

```json
{
  "workspaceId": "...",
  "message": "Summarize my resume"
}
```

---

# Future RAG APIs

## Generate Embeddings

POST /api/v1/rag/embed

---

## Ask RAG

POST /api/v1/rag/chat

---

# Common Error Response

Status

400

401

403

404

500

Example

```json
{
  "success": false,
  "message": "Something went wrong"
}
```

---

# Authentication Header

Authorization

Bearer JWT_TOKEN

---

# API Versioning

Current Version

v1

Future Versions

v2

v3

---

# Naming Convention

Use plural resource names

Examples

/users

/workspaces

/chats

/messages

/files

/bookmarks