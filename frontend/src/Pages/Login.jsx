import React from 'react'
import { LoginForm } from '../components/login-form'
const Login = () => {
    return (
        <div className='flex  min-h-screen'>
            <div className='flex-1 flex flex-col items-center justify-center gap-10'>
                <img className='' width={200} src='/logo-2.png' />

                <div className=' flex items-center'>
                    <LoginForm className='  border p-4 rounded-2xl shadow-sm mx-auto' />
                </div>
            </div>
            <div className='bg-black flex-1 hidden  lg:block'>
                <img src='/shoe-bg.png' width='100%' />
            </div>
        </div>
    )
}

export default Login