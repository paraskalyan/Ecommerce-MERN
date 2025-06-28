import React, { useState } from 'react'
import { Link } from 'react-router'
import { LogOutIcon, MenuIcon, SearchIcon, ShoppingBasketIcon, ShoppingCartIcon, User2Icon, XIcon } from 'lucide-react'
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
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
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
                <nav className='md:hidden lg:hidden absolute gap-4 items-center top-15 left-0 p-4 z-10 shadow bg-[#f8f8f8] w-full flex flex-col'>
                    <Link to='/'>Home</Link>
                    <Link to='/shop'>Shop</Link>
                    {isAdmin && <Link to='/dashboard'>Dashboard</Link>}

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