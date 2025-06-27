import { ArrowRight } from 'lucide-react'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'
import { Button } from './ui/button'

const Footer = () => {
    return (
        <footer className='py-10 bg-black mt-15 flex items-center justify-center text-white'>
            <div className='flex-[2] flex items-center flex-col  '>
                <h1 className='text-6xl font-semibold text-white'>ARE YOU INTERESTED?</h1>
                <Button className='mt-10'>Shop now <ArrowRight /></Button>
            </div>

            <div className='flex-1 space-y-7'>
                <img src='/logo-2.png' width={170} />
                <div className='space-y-4'>
                    <h6 className='font-medium'>Shop</h6>
                    <h6 className='font-medium'>About</h6>
                    <h6 className='font-medium'>Blog</h6>
                    <h6 className='font-medium'>Contact</h6>
                </div>
                <div className='flex gap-5'>
                    <FaFacebook size={25} />
                    <FaInstagram size={25} />
                    <FaTwitter size={25} />
                    <FaPinterest size={25} />
                </div>
            </div>
        </footer>
    )
}

export default Footer