import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import { StudentComponent } from './components/student/StudentComponent.tsx'
import { Navbar } from './components/nav/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/students' element={<StudentComponent />} />
    </Routes>
  </BrowserRouter>,
)
