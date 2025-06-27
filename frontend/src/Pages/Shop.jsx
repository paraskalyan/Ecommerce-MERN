import React, { useEffect, useState } from 'react'
import useProductStore from '../stores/useProductStore'
import ProductCard from '../components/ProductCard';
import PageLoader from '../components/PageLoader';
import { ArrowRight } from 'lucide-react';

const Shop = () => {
    const { getAllProducts, products, loading, getProductsByCategory } = useProductStore();
    const [categoryName, setCategoryName] = useState('All Products')

    console.log(loading)

    useEffect(() => {
        console.log("INNNNNNNNN")
        getAllProducts();
    }, [])

    console.log(products)

    const sizes = ['6', '7', '8', '9', '10', '11', '12', '13']

    if (loading) return <PageLoader />

    return (
        <div className='container mx-auto flex flex-col lg:flex-row my-10 min-h-screen'>
            <div className='lg:w-62 w-full justify-between lg:justify-normal border px-4 flex lg:flex-col'>
                <div className='border-b py-5'>
                    <h2 className='text-lg font-bold'>Product Categories</h2>
                    <div className=' flex flex-col items-start gap-2 mt-4'>
                        <button onClick={() => { getProductsByCategory('formal'); setCategoryName('Formal Shoes') }} className='inline-flex cursor-pointer items-center'>Formal Shoes <span><ArrowRight className='ml-3' size={20} /></span></button>
                        <button onClick={() => { getProductsByCategory('casual'); setCategoryName('Casual Shoes') }} className='inline-flex cursor-pointer items-center'>Casual Shoes <ArrowRight className='ml-3' size={20} /></button>
                        <button onClick={() => { getProductsByCategory('running'); setCategoryName('Running Shoes') }} className='inline-flex cursor-pointer items-center'>Running Shoes <ArrowRight className='ml-3' size={20} /></button>
                    </div>
                </div>

                <div className='border-b py-5'>
                    <h2 className='text-lg font-bold'>Brands</h2>
                    <div className=' flex flex-col items-start gap-2 mt-4'>
                        <button className='inline-flex cursor-pointer items-center'>Nike</button>
                        <button className='inline-flex cursor-pointer items-center'>Adidas</button>
                        <button className='inline-flex cursor-pointer items-center'>RedTape</button>
                    </div>
                </div>
                <div className='border-b py-5'>
                    <h2 className='text-lg font-bold'>Sizes</h2>
                    <div className=' grid grid-cols-3 gap-2 mt-4'>
                        {
                            sizes.map((val) => {
                                return (

                                    <div className='space-x-2 flex items-center'>
                                        <label className='text-sm'>{val}</label>
                                        <input value={val} type='checkbox' />
                                    </div>
                                )
                            })
                        }
                        {/* <div>

                            <label>S</label>
                            <input type='checkbox' />
                        </div>
                        <input type='checkbox' />
                        <input type='checkbox' />
                        <input type='checkbox' /> */}
                    </div>
                </div>
            </div>

            <div className='flex-1 px-5 mt-10 lg:mt-0'>
                <h1 className='text-2xl font-bold'>{categoryName}</h1>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5'>

                    {
                        products?.map((product) => {
                            return (
                                <ProductCard key={product._id} product={product} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Shop