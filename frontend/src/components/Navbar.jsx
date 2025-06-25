import React from 'react'
import { Link } from 'react-router'
import { SearchIcon, ShoppingBasketIcon, ShoppingCartIcon, User2Icon } from 'lucide-react'
import { Button } from './ui/button'
import { useUserStore } from '../stores/useUserStore'
const Navbar = () => {
    const { user } = useUserStore()
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
                <ShoppingCartIcon />
                <User2Icon />
            </div>
        </header>
    )
}

export default Navbar