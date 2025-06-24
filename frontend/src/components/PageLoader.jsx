import { Loader2Icon } from 'lucide-react'
import React from 'react'

const PageLoader = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <Loader2Icon size={60} className='animate-spin' />
        </div>
    )
}

export default PageLoader