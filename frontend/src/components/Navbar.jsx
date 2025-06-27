import React, { useState } from 'react'
import { Link } from 'react-router'
import { MenuIcon, SearchIcon, ShoppingBasketIcon, ShoppingCartIcon, User2Icon, XIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useUserStore } from '../stores/useUserStore'
import useCartStore from '../stores/useCartStore'
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const { user } = useUserStore()
    const { cart } = useCartStore()
    console.log("Cart: ", cart)
    const isAdmin = user.role === 'admin'
    return (
        <header className=' flex items-center justify-between p-4  border-b'>
            <h1>Sneaksy</h1>
            <nav className=' gap-6 hidden lg:flex md:flex font-semibold'>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/about'>About</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
            <div className='md:flex lg:flex items-center gap-4 hidden'>
                {isAdmin && <Link to='/dashboard'><Button>Dashboard</Button></Link>}
                <SearchIcon />
                <Link to='/cart' className='relative'>
                    <span className='absolute -top-3 -right-2 z-10 bg-black rounded-full text-white w-5 h-5 text-sm text-center font-bold'>{cart?.length}</span>
                    <ShoppingCartIcon />
                </Link>
                <User2Icon />
            </div>

            {
                menuOpen &&
                <nav className='md:hidden lg:hidden absolute top-15 left-0 p-4 bg-[#f8f8f8] w-full flex flex-col'>
                    <Link to='/'>Home</Link>
                    <Link to='/shop'>Shop</Link>
                    {isAdmin && <Link to='/dashboard'><Button>Dashboard</Button></Link>}

                </nav>
            }
            <Link to='/cart' className='relative lg:hidden md:hidden'>
                <span className='absolute -top-3 -right-2 z-10 bg-black rounded-full text-white w-5 h-5 text-sm text-center font-bold'>{cart?.length}</span>
                <ShoppingCartIcon />
            </Link>

            <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <XIcon /> : <MenuIcon />}</button>
        </header>
    )
}

export default Navbar