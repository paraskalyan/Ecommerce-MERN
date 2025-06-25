import React from 'react'
import { Link } from 'react-router'
import { SearchIcon, ShoppingBasketIcon, ShoppingCartIcon, User2Icon } from 'lucide-react'
import { Button } from './ui/button'
import { useUserStore } from '../stores/useUserStore'
import useCartStore from '../stores/useCartStore'
const Navbar = () => {
    const { user } = useUserStore()
    const { cart } = useCartStore()
    console.log("Cart: ", cart)
    const isAdmin = user.role === 'admin'
    return (
        <header className=' flex items-center justify-between p-4  border-b'>
            <h1>Sneaksy</h1>
            <nav className='flex gap-6'>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/about'>About</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
            <div className='flex items-center gap-4'>
                {isAdmin && <Link to='/dashboard'><Button>Dashboard</Button></Link>}
                <SearchIcon />
                <Link to='/cart' className='relative'>
                    <span className='absolute -top-3 -right-2 z-10 bg-black rounded-full text-white w-5 h-5 text-sm text-center font-bold'>{cart?.length}</span>
                    <ShoppingCartIcon />
                </Link>
                <User2Icon />
            </div>
        </header>
    )
}

export default Navbar