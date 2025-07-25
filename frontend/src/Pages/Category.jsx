import React, { useEffect } from 'react'
import useProductStore from '../stores/useProductStore'
import { useParams } from 'react-router'
import ProductCard from '../components/ProductCard'

const Category = () => {
    const { products, getProductsByCategory } = useProductStore()
    const { category } = useParams()
    useEffect(() => {
        getProductsByCategory(category)
    }, [getProductsByCategory, category]);

    return (
        <div className='container mx-auto my-10 min-h-screen px-4'>
            <h1 className='text-2xl font-bold uppercase'>{category}</h1>
            <div className='mt-6'>
                {
                    products.length === 0 ?
                        <div>No products found in this category.</div>
                        :
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                            {products.map(product => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>
                }
            </div>
        </div>
    )
}

export default Category