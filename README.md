# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# JSON Server CRUD App

A simple React application that performs **CRUD operations** using **JSON Server** as a mock backend. This project demonstrates basic form handling, data table display, and interaction with REST APIs.

## 🚀 Features

- ✅ Add new users (Create)
- 📋 View users in a table (Read)
- ✏️ Edit existing users (Update)
- ❌ Delete users (Delete)
- 🔍 Search users by email
- 🎉 Toast notifications for actions

## 🛠️ Technologies Used

- **React.js**
- **Bootstrap 5**
- **React Data Table Component**
- **JSON Server**
- **Axios**
- **React Router**
- **React Toastify**

## 📦 Installation

### 1. Clone the Repository


git clone https://github.com/bhavini1105/Json-Server.git
cd Json-Server

### 2.Install Dependencies

npm install

### 3. Start JSON Server

npx json-server db.json 

📁 Folder Structure

├── Components
|
│   ├── Form.jsx
|   |
│   ├── Header.jsx
|   |
│   └── Table.jsx
|
|
├── db.json
|
├── App.jsx
|
├── index.js
|
└── README.md