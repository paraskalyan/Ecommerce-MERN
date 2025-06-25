import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { MinusIcon, PlusIcon } from 'lucide-react'
import { Button } from './ui/button'

const CartCard = ({ product }) => {
    return (
        <div className='border flex gap-3'>
            <img src={product?.image} alt={product?.name} className='w-32 h-32 object-cover' />
            <div>
                <h3 className='text-lg font-semibold'>{product?.name}</h3>
                <p className='text-sm text-gray-500'>${product?.price}</p>
                <div className='flex items-center gap-2 mt-2'>
                    <button className='cursor-pointer '><MinusIcon /></button>
                    <p className=' '>{product?.quantity}</p>
                    <button className='cursor-pointer '><PlusIcon /></button>
                </div>
            </div>
        </div>
    )
}

export default CartCard