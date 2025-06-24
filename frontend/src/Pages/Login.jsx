import React from 'react'
import { LoginForm } from '../components/login-form'
const Login = () => {
    return (
        <div className='flex  min-h-screen'>
            <div className='flex-1 flex items-center'>
                <LoginForm className='  border p-4 rounded-2xl shadow-sm mx-auto' />
            </div>
            <div className='bg-black flex-1'>
                <img src='/shoe-bg.png' width='100%' />
            </div>
        </div>
    )
}

export default Login