import React, { useEffect, useState } from 'react'
import CreateProduct from '../components/CreateProduct'
import Products from '../components/Products'
import Analytics from '../components/Analytics'
import { BarChart2, Bot, GitGraph, Home, PlusCircle, Settings, User, ViewIcon } from "lucide-react";
import { Button } from '../components/ui/button'
import useProductStore from '../stores/useProductStore';

const Admin = () => {

    const { getAllProducts } = useProductStore()
    useEffect(() => {
        getAllProducts()
    }, [])

    const [active, setActive] = useState('create')

    return (
        <div className='w-full flex  min-h-screen'>
            <div className=' w-44 flex flex-col gap-2 py-4 px-4 border-r'>
                <Button onClick={() => setActive('create')} className={`${active === 'create' ? 'bg-[#eeeeee]' : 'bg-white'} text-black hover:bg-[#eeeeee] shadow-none rounded-md p-2 justify-start`}><PlusCircle />Create Product</Button>
                <Button onClick={() => setActive('products')} className={`${active === 'products' ? 'bg-[#eeeeee]' : 'bg-white'} text-black hover:bg-[#eeeeee] shadow-none rounded-md p-2 justify-start`}><ViewIcon />Products</Button>
                <Button onClick={() => setActive('analytics')} className={`${active === 'analytics' ? 'bg-[#eeeeee]' : 'bg-white'} text-black hover:bg-[#eeeeee] shadow-none rounded-md p-2 justify-start`}><BarChart2 />Analytics</Button>
            </div>

            <div className=' flex-1 container    mx-auto my-10'>
                {active === 'create' && <CreateProduct />}
                {active === 'products' && <Products />}
                {active === 'analytics' && <Analytics />}
            </div>


        </div >
    )
}

export default Admin