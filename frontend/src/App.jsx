import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Routes, Route } from 'react-router'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Layout from './components/Layout'
import { Toaster } from 'react-hot-toast'
import ProtectedRoute from './components/ProtectedRoute'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path='/' element={<ProtectedRoute><Layout><Home /></Layout></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Toaster />

    </>
  )
}

export default App
