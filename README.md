# Flashlight Learning - Student Management System

A React-based student management application built as a takehome project for Flashlight Learning.

## 🌐 Live Demo

**Frontend:** Hosted on [Railway Cloud Services](https://railway.app)  
**Backend API:** <https://heartfelt-happiness-production.up.railway.app>

## 🛠️ Technology Stack

### Frontend

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **React Router 7** - Client-side routing

### Development Tools

- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📋 What This App Does

This is a simple student management system that allows users to:

### ✨ Features

- **View Students** - Display all students in a responsive card-based grid layout
- **Create Students** - Add new students with their name and grade (1-12)

### 🎯 User Interface

- Clean, modern design with Tailwind CSS
- Intuitive navigation between viewing and creating students
- Loading states and error handling
- Form validation for student creation

## 🚀 How to Run Locally

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/1ShoukR/flashlight-frontend.git
   cd flashlight_frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The app will automatically reload when you make changes

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready application |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🏗️ Project Structure

```
src/
├── components/
│   ├── home/
│   │   └── HomepageComponent.tsx     # Landing page
│   ├── nav/
│   │   └── Navbar.tsx                # Navigation component
│   └── student/
│       ├── CreateStudentComponent.tsx # Form to create students
│       ├── StudentCard.tsx           # Individual student display
│       └── StudentComponent.tsx      # Students list view
├── assets/                           # Static assets
├── App.tsx                          # Main application component
├── main.tsx                         # Application entry point
└── index.css                        # Global styles
```

## 🔗 API Integration

The frontend connects to a Railway-hosted backend API:

- **Base URL:** `https://heartfelt-happiness-production.up.railway.app`
- **Get All Students:** `GET /api/students/all`
- **Create Student:** `POST /api/students/create`

### API Data Format

```typescript
interface Student {
  StudentID: number;
  Name: string;
  Grade: number;
  }
  ```

## 🚀 Future Features

Irecognize you guys wanted strictly boiler plate code here, but I could not hold myself back with this much time in between our interviews. I love building, and I cannot leave something unfinished, so I followed the rubric all the way to the end. I added this section about some ideas I had while iterating, so that we could definitely talk about this more together. I appreciate you guys giving me the opportunity to showcase my abilities!

- **JWT-based Authentication** - Secure login system with role-based access control
- **Multi-tenant Architecture** - Support for multiple schools/districts with data isolation
- **Auth Levels Integration** - Differnet auth levels for different staff

- **Student Assignment History** - Support seeing older assignemnts for each student
- **Differnet Classes** - Support the addition of adding students to "classes"
- **Export Capabilities** - PDF reports, CSV exports, and other various data points for students and their future classes and such

- **Push Notification System** - Notification system for various important updates, such as new assignments, grades, classes, etc.
- **Dark/Light Theme Toggle** - User preference system with system theme detection
- **Search & Filtering** - Search ability in students view to filter students out

- **Bulk Operations** - Multi-select actions for efficient data management
- **Redis Caching** - Performance optimization for frequently accessed data
- **Docker Containerization** - Consistent deployment across environments (Not needed really, but it is standard to Go environments.)

---

Built with ❤️ for Flashlight Learning
