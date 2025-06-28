import React from 'react'
import { SignupForm } from '../components/signup-form'

const Signup = () => {
    return (
        <div className='flex  min-h-screen bg-[#F6F6F6] flex-row-reverse'>
            <div className='flex-1 flex  flex-col items-center'>
                {/* <img className='mt-10' width={200} src='/logo-2.png' /> */}
                <SignupForm className='bg-white border p-8 w-md mx-auto mt-6 lg:mt-20 rounded-2xl shadow-sm' />
            </div>
            <div className=' flex-1 hidden md:block lg:block'>
                <img src='/shoe-sign.webp' />
            </div>
        </div>

    )
}

export default Signup