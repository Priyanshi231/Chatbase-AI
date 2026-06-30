# User Flow

## Overview

The following user flow describes how users interact with ChatBase AI from the moment they visit the website until they complete their tasks.

---

# High Level User Flow

```text
Visitor
    │
    ▼
Landing Page
    │
    ▼
Register / Login
    │
    ▼
Dashboard
    │
    ▼
Create Workspace
    │
    ▼
Open Workspace
    │
    ▼
Create Chat
    │
    ▼
Send Message
    │
    ▼
Receive AI Response
    │
    ▼
Upload Files
    │
    ▼
Ask Questions About Files
    │
    ▼
Save Conversation
    │
    ▼
Search Previous Chats
```

---

# Detailed User Journey

## 1. Landing Page

Visitor opens the website.

Available actions:

- View Hero Section
- View Features
- View Project Benefits
- Click Login
- Click Register

Navigation

Landing Page

↓

Login

or

Register

---

## 2. Authentication

User creates an account.

Register

↓

Email Verification (Future)

↓

Login

↓

JWT Generated

↓

Dashboard

If already registered

Login

↓

Dashboard

---

## 3. Dashboard

Dashboard displays:

- Recent Workspaces
- Recent Chats
- Uploaded Files
- User Profile
- Create Workspace Button

Available actions

- Create Workspace
- Open Workspace
- Delete Workspace
- Rename Workspace
- Logout

---

## 4. Workspace

Each workspace is an independent AI environment.

Example

Placement Prep

↓

Resume.pdf

↓

Google Interview Chat

↓

Amazon Interview Chat

Another workspace

College Notes

↓

DBMS.pdf

↓

Operating System Notes

↓

Networking Notes

Available actions

- Create Chat
- Upload Files
- Delete Files
- Rename Workspace

---

## 5. Chat

Inside a workspace

User creates a chat.

Flow

New Chat

↓

Type Message

↓

Backend

↓

Gemini API

↓

AI Response

↓

Save Message

↓

Display Response

Features

- Markdown
- Code Blocks
- Copy Response
- Streaming
- Auto Scroll

---

## 6. File Upload

Supported files

- PDF
- DOCX
- TXT
- PNG
- JPG

Flow

Choose File

↓

Upload

↓

Store

↓

Parse

↓

Save Metadata

↓

Display in Workspace

---

## 7. Document Chat

User uploads

Resume.pdf

+

JobDescription.pdf

↓

Ask

"Am I suitable for this role?"

↓

Backend extracts text

↓

Gemini receives context

↓

AI responds

---

## 8. Conversation Memory

Every new prompt includes

Previous Messages

+

Current Prompt

↓

Gemini

↓

Better Answers

---

## 9. Search

Search

↓

Chats

↓

Messages

↓

Files

↓

Results

---

## 10. Settings

User can

- Update Profile
- Change Password
- Change Theme
- Logout

---

# Navigation Structure

Landing Page

├── Login

├── Register

└── Dashboard

        ├── Workspace

        │      ├── Chat

        │      ├── Files

        │      └── Search

        └── Settings

---

# Authentication Flow

Visitor

↓

Register

↓

Password Hash

↓

Store User

↓

Login

↓

Verify Password

↓

Generate JWT

↓

Dashboard

---

# AI Request Flow

React Frontend

↓

Axios Request

↓

Express Backend

↓

Authentication Middleware

↓

Chat Controller

↓

Gemini Service

↓

Gemini API

↓

AI Response

↓

Save Message

↓

Return Response

↓

React UI

---

# File Upload Flow

User

↓

Upload PDF

↓

Multer

↓

Cloudinary

↓

MongoDB Metadata

↓

PDF Parser

↓

Extract Text

↓

Save Parsed Text

↓

Workspace

---

# Future RAG Flow

Upload PDF

↓

Extract Text

↓

Split into Chunks

↓

Generate Embeddings

↓

Store in Vector Database

↓

Similarity Search

↓

Relevant Chunks

↓

Gemini API

↓

Final Response

---

# Error Flow

Unauthorized User

↓

Redirect to Login

File Too Large

↓

Show Error Message

Gemini API Failure

↓

Retry

↓

Display Friendly Error

Database Failure

↓

Log Error

↓

Show Notification