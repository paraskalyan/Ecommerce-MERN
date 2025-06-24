import React from 'react'
import { Button } from './ui/button'
import { ShoppingCartIcon } from 'lucide-react'

const ProductCard = () => {
    return (
        <div className='border w-fit'>
            <div className='bg-[#f3f3f3]'>
                <img className=' mix-blend-multiply' width={250} src='https://redtape.com/cdn/shop/files/RSO4551_1.jpg?v=1750746539' />
            </div>
            <div className='p-3 flex justify-between'>
                <div className='font-bold'>

                    <h3 >Nike running shoe</h3>
                    <h6>$455</h6>
                </div>
                <Button><ShoppingCartIcon /></Button>
            </div>
        </div>
    )
}

export default ProductCard