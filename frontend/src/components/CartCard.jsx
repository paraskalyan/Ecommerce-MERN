import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { MinusIcon, PlusIcon, Trash2Icon } from 'lucide-react'
import { Button } from './ui/button'
import useCartStore from '../stores/useCartStore'

const CartCard = ({ product }) => {
    const { removeFromCart } = useCartStore()
    return (
        <div className='border flex gap-3 relative'>
            <img src={product?.image} alt={product?.name} className='w-32 h-32 object-cover' />
            <div className='p-3'>
                <h3 className='text-lg font-semibold'>{product?.name}</h3>
                <p className='text-sm text-gray-500'>${product?.price}</p>
                <div className='flex items-center gap-2 mt-2'>
                    <button className='cursor-pointer '><MinusIcon /></button>
                    <p className=' '>{product?.quantity}</p>
                    <button className='cursor-pointer '><PlusIcon /></button>
                </div>
                <button onClick={() => removeFromCart(product._id)} className='cursor-pointer absolute top-2 right-3 text-red-600'><Trash2Icon /></button>
            </div>
        </div>
    )
}

export default CartCard