import React, { useState } from 'react'
import { Link } from 'react-router'
import { ContactIcon, HomeIcon, LayoutDashboard, LogOutIcon, MenuIcon, SearchIcon, ShoppingBag, ShoppingBasketIcon, ShoppingCartIcon, User2Icon, XIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useUserStore } from '../stores/useUserStore'
import useCartStore from '../stores/useCartStore'
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const { user, logout } = useUserStore()
    const { cart } = useCartStore()
    const isAdmin = user.role === 'admin'

    return (
        <header className=' flex items-center justify-between p-4  border-b'>
            <img src='/logo-2.png' width={140} />
            <nav className=' gap-6 hidden lg:flex md:flex font-medium'>
                <Link to='/' className='flex gap-2 items-center hover:bg-[#f4f4f4] p-3 rounded-lg'><HomeIcon />Home</Link>
                <Link to='/shop' className='flex gap-2 items-center hover:bg-[#f4f4f4] p-3 rounded-lg'><ShoppingBag />Shop</Link>
                <Link className='flex gap-2 items-center hover:bg-[#f4f4f4] p-3 rounded-lg'><ContactIcon />Contact</Link>
            </nav>
            <div className='md:flex lg:flex items-center gap-6 hidden'>
                {isAdmin && <Link to='/dashboard'><Button>Dashboard</Button></Link>}
                <SearchIcon />
                <Link to='/cart' className='relative'>
                    <span className='absolute -top-3 -right-2 z-10 bg-black rounded-full text-white w-5 h-5 text-sm text-center font-bold'>{cart?.length}</span>
                    <ShoppingCartIcon />
                </Link>
                <button className='cursor-pointer' onClick={logout}><LogOutIcon /></button>
            </div>

            {
                menuOpen &&
                <nav className='md:hidden lg:hidden absolute gap-6 items-center top-15 left-0 p-4 z-10 shadow bg-[#f8f8f8] w-full flex flex-col'>
                    <Link to='/' className='flex gap-2 items-center'><HomeIcon />Home</Link>
                    <Link to='/shop' className='flex gap-2 items-center'><ShoppingBag />Shop</Link>
                    {isAdmin && <Link to='/dashboard' className='flex gap-2 items-center'><LayoutDashboard />Dashboard</Link>}
                    <button className='cursor-pointer inline-flex items-center gap-2' onClick={logout}><LogOutIcon />Logout</button>


                </nav>
            }
            <div className='flex gap-6 lg:hidden'>

                <Link to='/cart' className='relative lg:hidden md:hidden'>
                    <span className='absolute -top-3 -right-2 z-10 bg-black rounded-full text-white w-5 h-5 text-sm text-center font-bold'>{cart?.length}</span>
                    <ShoppingCartIcon />
                </Link>

                <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <XIcon /> : <MenuIcon />}</button>
            </div>
        </header>
    )
}

export default Navbar