import React from 'react'
import { Link } from 'react-router'
import { SearchIcon, ShoppingBasketIcon, ShoppingCartIcon, User2Icon } from 'lucide-react'
const Navbar = () => {
    return (
        <header className=' flex justify-between p-4  border-b'>
            <h1>Sneaksy</h1>
            <nav className='flex gap-6'>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/about'>About</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
            <div className='flex gap-4'>
                <SearchIcon />
                <ShoppingCartIcon />
                <User2Icon />
            </div>
        </header>
    )
}

export default Navbar