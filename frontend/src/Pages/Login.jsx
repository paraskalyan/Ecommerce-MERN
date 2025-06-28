import React from 'react'
import { LoginForm } from '../components/login-form'
const Login = () => {
    return (
        <div className='flex  min-h-screen bg-[#F6F6F6]' >
            <div className='flex-1 flex flex-col items-center justify-center gap-10'>
                <img className=' ' width={200} src='/logo-2.png' />

                <div className=' flex items-center'>
                    <LoginForm className='  border p-8 px-10 rounded-2xl bg-white shadow-sm ' />
                </div>
            </div>
            <div className='lg:block hidden flex-1'>
                <img className='scale-x-[-1]' src='/shoe-login2.webp' />
            </div>
        </div>
    )
}

export default Login