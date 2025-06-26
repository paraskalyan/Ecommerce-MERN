import React from 'react'
import useCartStore from '../stores/useCartStore'
import CartCard from '../components/CartCard'
import OrderSummary from '../components/OrderSummary'
const Cart = () => {
    const { cart } = useCartStore()
    console.log("Cart Items: ", cart)
    return (
        <div className='container mx-auto my-10 min-h-screen'>
            <h1 className='text-3xl font-bold'>Your Cart</h1>
            <div className='flex gap-6 px-10 mt-8'>

                <div className='flex-[2]'>
                    {
                        cart.length === 0 ?
                            <div className='text-center mt-10'>Your cart is empty.</div>
                            :
                            cart.map((item) => {
                                return (
                                    <CartCard key={item._id} product={item} />
                                )
                            })
                    }

                </div>
                {
                    cart.length > 0 &&
                    <div className='flex-1'>
                        <OrderSummary />
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart