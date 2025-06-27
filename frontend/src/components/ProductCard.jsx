import React from 'react'
import { Button } from './ui/button'
import { ShoppingCartIcon } from 'lucide-react'
import useCartStore from '../stores/useCartStore'


const ProductCard = ({ product }) => {
    console.log(product)

    const { addToCart } = useCartStore()
    return (
        <div className='border'>
            <div className='bg-[#f3f3f3]'>
                <img className=' mix-blend-multiply object-cover w-full' width={170} src={product?.image} />
            </div>
            <div className='p-3 flex justify-between'>
                <div className='font-bold space-y-3'>

                    <h3 className=' truncate w-[200px]' >{product?.name}</h3>
                    <h6>${product?.price}</h6>
                </div>
                <Button onClick={() => addToCart(product)} ><ShoppingCartIcon /></Button>
            </div>
        </div>
    )
}

export default ProductCard