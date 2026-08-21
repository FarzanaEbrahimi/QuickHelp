# QuickHelp AI

AI-Powered Automated Support & Response System

QuickHelp AI is an AI-powered customer support and knowledge management system that allows businesses to upload their documents and build a searchable knowledge base.

Users can then ask questions through the AI Assistant and receive answers based on the information contained in their uploaded documents.

---

## 🚀 Live Demo

**Live Application:**

https://quick-help-seven.vercel.app/

---

## 📌 GitHub Repository

https://github.com/FarzanaEbrahimi/QuickHelp

---

## 💡 Problem

Businesses often store important customer-support information across
PDFs, FAQs, product documents, and internal knowledge bases.

When a customer asks a question, support teams may need to manually
search through multiple documents to find the correct information.
This makes the support process slower and less efficient.

Traditional AI assistants also have a limitation: they may generate
answers based on general knowledge instead of the business's actual
documents, which can lead to inaccurate or irrelevant responses.

QuickHelp AI addresses this problem by connecting an AI assistant
directly to the business's own knowledge base, allowing it to retrieve
relevant information from uploaded documents before generating an answer.

---

## 🎯 Solution

QuickHelp AI provides a centralized, AI-powered knowledge base where
businesses can upload their support documents and use them as the
source of information for an AI assistant.

The system:

- Uploads and stores business documents
- Extracts and processes document content
- Splits documents into searchable chunks
- Generates vector embeddings for the document content
- Uses semantic search to find relevant information
- Retrieves relevant knowledge based on the user's question
- Uses the retrieved information to generate an AI response
- Tells the user when the requested information cannot be found
  in the uploaded knowledge base
- Allows businesses to manage and delete their documents
- Provides a responsive dashboard for managing the knowledge base

---

## ✨ Key Features

### 📄 Document Management

Users can upload and manage PDF knowledge files through the dashboard.

Features include:

- Upload documents
- View uploaded documents
- Search documents
- Open document content
- Delete documents
- Remove related AI chunks
- Remove files from storage

---

### 🧠 AI-Powered Knowledge Base

Uploaded documents are processed and converted into searchable chunks.

The system uses vector embeddings to find information that is semantically related to the user's question.

This allows the AI assistant to retrieve relevant information from the business knowledge base instead of relying only on general AI knowledge.

---

### 🤖 AI Assistant

The AI Assistant allows users to ask questions about their uploaded documents.

The system:

1. Receives the user's question
2. Generates an embedding for the question
3. Searches the document embeddings
4. Retrieves relevant document chunks
5. Sends the relevant context to the AI model
6. Generates an answer based on the retrieved information

If the requested information cannot be found in the uploaded documents, the system informs the user instead of inventing information.

---

### 📊 Dashboard

The dashboard provides a central workspace for managing the QuickHelp AI system.

It includes:

- Dashboard overview
- Knowledge base statistics
- Recent documents
- Upload Center
- Documents management
- AI Assistant access
- Messages
- Settings

---

### 📱 Responsive Design

QuickHelp AI is designed to work across different screen sizes.

The interface supports:

- Desktop
- Tablet
- Mobile

The Landing Page and Dashboard have dedicated responsive layouts for smaller screens.

---

### 🌙 Dark Mode

The application supports both light and dark visual themes throughout the main dashboard interface.

---

### 💬 Messages

The dashboard includes a Messages section for viewing contact/support messages submitted through the application.

---

## 🛠️ Tech Stack

### Frontend

- React
- React Router
- JavaScript
- Tailwind CSS
- Lucide React
- Vite

### Backend & Database

- Supabase
- PostgreSQL
- pgvector
- Supabase Storage
- Supabase Edge Functions

### AI

- OpenRouter API
- Vector Embeddings
- Semantic Search

### Document Processing

- PDF.js
- PDF text extraction
- Document chunking
- Vector embeddings

### Deployment

- Vercel

---

## 🏗️ System Architecture

The main application workflow is:

```text
User
  │
  ▼
React Frontend
  │
  ├──────────────► Dashboard
  │
  ├──────────────► Document Upload
  │                       │
  │                       ▼
  │                 Supabase Storage
  │                       │
  │                       ▼
  │                 PDF Processing
  │                       │
  │                       ▼
  │                Document Chunking
  │                       │
  │                       ▼
  │                Generate Embeddings
  │                       │
  │                       ▼
  │                 Supabase pgvector
  │
  ▼
AI Assistant
  │
  ▼
Question Embedding
  │
  ▼
Semantic Search
  │
  ▼
Relevant Document Chunks
  │
  ▼
AI Model
  │
  ▼
Generated Answer
```
