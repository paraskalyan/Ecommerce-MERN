import React from 'react'
import { SignupForm } from '../components/signup-form'

const Signup = () => {
    return (
        <div className='flex  min-h-screen'>
            <div className='flex-1 items-center'>
                <SignupForm className=' max-w-md border p-4 mt-20 rounded-2xl shadow-sm mx-auto' />
            </div>
            <div className='bg-black flex-1'>
                <img src='/shoe-bg.png' width='100%' />
            </div>
        </div>

    )
}

export default Signup