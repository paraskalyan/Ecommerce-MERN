import React from 'react'
import { SignupForm } from '../components/signup-form'

const Signup = () => {
    return (
        <div className='flex  min-h-screen'>
            <div className='flex-1 flex  flex-col items-center'>
                <img className='mt-10' width={200} src='/logo-2.png' />
                <SignupForm className=' max-w-md border p-4 mt-6 lg:mt-20 rounded-2xl shadow-sm mx-auto' />
            </div>
            <div className='bg-black flex-1 hidden md:block lg:block'>
                <img src='/shoe-bg.png' width='100%' />
            </div>
        </div>

    )
}

export default Signup