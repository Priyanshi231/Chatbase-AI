# Database Design

## Database

MongoDB

---

# Collections

1. Users
2. Workspaces
3. Chats
4. Messages
5. Files
6. Bookmarks

---

# Collection: Users

## Description

Stores user account information.

### Fields

| Field | Type | Required | Description |
|-------|--------|----------|-------------|
| _id | ObjectId | Yes | Primary Key |
| name | String | Yes | User Full Name |
| email | String | Yes | Unique Email |
| password | String | Yes | Hashed Password |
| avatar | String | No | Profile Image |
| createdAt | Date | Yes | Account Creation |
| updatedAt | Date | Yes | Last Update |

### Relationships

One User

↓

Many Workspaces

---

# Collection: Workspaces

## Description

Stores independent AI workspaces.

### Fields

| Field | Type | Required | Description |
|-------|--------|----------|-------------|
| _id | ObjectId | Yes | Primary Key |
| userId | ObjectId | Yes | Owner |
| name | String | Yes | Workspace Name |
| description | String | No | Workspace Description |
| color | String | No | UI Color |
| icon | String | No | Workspace Icon |
| createdAt | Date | Yes | Created |
| updatedAt | Date | Yes | Updated |

### Relationships

One Workspace

↓

Many Chats

↓

Many Files

---

# Collection: Chats

## Description

Stores chat sessions.

### Fields

| Field | Type | Required | Description |
|-------|--------|----------|-------------|
| _id | ObjectId | Yes | Primary Key |
| workspaceId | ObjectId | Yes | Parent Workspace |
| title | String | Yes | Chat Title |
| createdAt | Date | Yes | Created |
| updatedAt | Date | Yes | Updated |

### Relationships

One Chat

↓

Many Messages

---

# Collection: Messages

## Description

Stores chat messages.

### Fields

| Field | Type | Required | Description |
|-------|--------|----------|-------------|
| _id | ObjectId | Yes | Primary Key |
| chatId | ObjectId | Yes | Parent Chat |
| role | String | Yes | user / assistant |
| content | String | Yes | Message Text |
| attachments | Array | No | Attached Files |
| timestamp | Date | Yes | Sent Time |

---

# Collection: Files

## Description

Stores uploaded documents.

### Fields

| Field | Type | Required | Description |
|-------|--------|----------|-------------|
| _id | ObjectId | Yes | Primary Key |
| workspaceId | ObjectId | Yes | Parent Workspace |
| filename | String | Yes | File Name |
| originalName | String | Yes | Original File Name |
| type | String | Yes | File Type |
| size | Number | Yes | File Size |
| cloudinaryUrl | String | Yes | Cloudinary URL |
| parsedText | String | No | Extracted Text |
| embeddingStatus | Boolean | Yes | RAG Status |
| createdAt | Date | Yes | Uploaded Time |

---

# Collection: Bookmarks

## Description

Stores bookmarked AI responses.

### Fields

| Field | Type | Required | Description |
|-------|--------|----------|-------------|
| _id | ObjectId | Yes | Primary Key |
| userId | ObjectId | Yes | User |
| messageId | ObjectId | Yes | Saved Message |
| createdAt | Date | Yes | Saved Time |

---

# Collection Relationships

User

↓

Workspaces

↓

Chats

↓

Messages

↓

Bookmarks

↓

Files

---

# Indexes

Users

- email

Workspaces

- userId

Chats

- workspaceId

Messages

- chatId

Files

- workspaceId

Bookmarks

- userId

---

# Database Rules

- Email must be unique.
- Password must be hashed.
- Every workspace belongs to one user.
- Every chat belongs to one workspace.
- Every message belongs to one chat.
- Every file belongs to one workspace.
- Every bookmark belongs to one user.

---

# Estimated Growth

One User

↓

10 Workspaces

↓

100 Chats

↓

10,000 Messages

↓

500 Files

---

# Future Collections

Notifications

API Usage

Embeddings

Shared Workspaces

Activity Logs

AI Agents