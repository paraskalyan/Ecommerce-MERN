import { useEffect, useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Routes, Route, Navigate } from 'react-router'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Layout from './components/Layout'
import { Toaster } from 'react-hot-toast'
import { useUserStore } from './stores/useUserStore'
import PageLoader from './components/PageLoader'
import Admin from './Pages/Admin'
import Category from './Pages/Category'
import useCartStore from './stores/useCartStore'
import Cart from './Pages/Cart'
import PurchaseSuccess from './Pages/PurchaseSuccess'
import PurchaseCancelled from './Pages/PurchaseCancelled'
function App() {

  const { user, checkAuth, checkingAuth } = useUserStore()
  const { cart, getCartItems } = useCartStore()
  console.log(checkingAuth)
  useEffect(() => {
    checkAuth()
  }, [checkAuth]);

  useEffect(() => {
    if (!user) return
    getCartItems()
  }, [getCartItems, user])

  console.log("User: ", user)
  console.log("Cart: ", cart)


  if (checkingAuth) return <PageLoader />



  return (
    <>

      <Routes>
        <Route path='/' element={!user ? <Navigate to='/login' /> : <Layout><Home /></Layout>} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
        <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />} />
        <Route path='/dashboard' element={user?.role === 'admin' ? <Layout><Admin /></Layout> : <Navigate to='/login' />} />
        <Route path='/category/:category' element={user ? <Layout><Category /></Layout> : <Navigate to='/login' />} />
        <Route path='/cart' element={user ? <Layout><Cart /></Layout> : <Navigate to='/login' />} />
        <Route path='/purchase-success' element={user ? <PurchaseSuccess /> : <Navigate to='/login' />} />
        <Route path='/purchase-cancel' element={user ? <PurchaseCancelled /> : <Navigate to='/login' />} />

      </Routes>
      <Toaster />

    </>
  )
}

export default App
