import React from 'react'
import { Button } from './ui/button'
import { ShoppingCartIcon } from 'lucide-react'
import useCartStore from '../stores/useCartStore'


const ProductCard = ({ product }) => {
    console.log(product)

    const { addToCart } = useCartStore()
    return (
        <div className='border w-fit'>
            <div className='bg-[#f3f3f3]'>
                <img className=' mix-blend-multiply' width={250} src={product?.image} />
            </div>
            <div className='p-3 flex justify-between'>
                <div className='font-bold'>

                    <h3 >{product?.name}</h3>
                    <h6>${product?.price}</h6>
                </div>
                <Button onClick={() => addToCart(product)} ><ShoppingCartIcon /></Button>
            </div>
        </div>
    )
}

export default ProductCard