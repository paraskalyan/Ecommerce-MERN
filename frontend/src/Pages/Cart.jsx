import React from 'react'
import useCartStore from '../stores/useCartStore'
import CartCard from '../components/CartCard'
import OrderSummary from '../components/OrderSummary'
const Cart = () => {
    const { cart } = useCartStore()
    return (
        <div className='container mx-auto my-10 px-4 min-h-screen'>
            <h1 className='text-2xl lg:text-3xl font-bold'>Your Cart</h1>
            <div className='flex flex-col lg:flex-row gap-6 lg:px-10 md:px-7 mt-8'>

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