import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { MinusIcon, PlusIcon, Trash2Icon } from 'lucide-react'
import { Button } from './ui/button'
import useCartStore from '../stores/useCartStore'

const CartCard = ({ product }) => {
    const { removeFromCart, updateQuantity } = useCartStore()
    return (
        <div className='border flex gap-3 relative'>
            <img src={product?.image} alt={product?.name} className='w-32 h-32 object-cover' />
            <div className='p-3 flex justify-between flex-col'>
                <h3 className='text-lg font-semibold'>{product?.name}</h3>
                <p className='text-sm text-gray-500'>${product?.price}</p>
                <div className='flex items-center gap-4 mt-2'>
                    <button onClick={() => updateQuantity(product._id, product?.quantity - 1)} className='cursor-pointer  rounded-full '><MinusIcon size={20} /></button>
                    <p className=' '>{product?.quantity}</p>
                    <button onClick={() => updateQuantity(product._id, product?.quantity + 1)} className='cursor-pointer  rounded-full  '><PlusIcon size={20} /></button>
                </div>
                <button onClick={() => removeFromCart(product._id)} className='cursor-pointer absolute top-2 right-3 text-red-600'><Trash2Icon /></button>
            </div>
        </div>
    )
}

export default CartCard