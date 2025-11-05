# 🚀 DevSync App

DevSync is a full-stack application designed to help developers **synchronize, manage, and track development projects** efficiently. It provides a collaborative environment for planning, task management, and workflow synchronization between frontend and backend teams.

---

## 🧠 Features

- 🗂️ **Project Management** — organize and track multiple development projects  
- 🔄 **Dev Sync** — synchronize updates across backend and frontend modules  
- 🧩 **Task Board (Kanban)** — visualize development progress with drag-and-drop steps  
- 🧰 **Workflow Builder** — define stages and automate workflow transitions  
- 🔐 **Role-Based Access Control** — fine-grained user permissions  
- ⚙️ **API Integration** — easy connection to external services  
- 🧑‍💻 **Developer-Friendly** — modular architecture and clear code separation

---

## 🏗️ Tech Stack

### Frontend
- **React + Vite**
- **TypeScript**
- **Tailwind CSS**
- **React Query / Axios** for server state & API requests
- **React Router v6**

### Backend
- **Node.js + Express**
- **TypeScript**
- **MongoDB with Prisma ORM
- **JWT Authentication**
- **dotenv** for environment management

---

## 📁 Folder Structure

devsync/
├── client/ # Frontend (React + Vite)
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── vite.config.ts
│
├── server/ # Backend (Node + Express)
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── middlewares/
│ │ └── utils/
│ ├── package.json
│ └── tsconfig.json
│
├── .env.example
├── LICENSE


---


// To Follow needed to be fixed - still in development mode at the moment

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/devsync.git 
cd devsync



Set up Backend 


cd server
cp .env.example .env
npm install
npm run dev

