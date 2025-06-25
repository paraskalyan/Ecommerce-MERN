import React from 'react'
import useCartStore from '../stores/useCartStore'
import CartCard from '../components/CartCard'
const Cart = () => {
    const { cart } = useCartStore()
    console.log("Cart Items: ", cart)
    return (
        <div className='container mx-auto my-10 min-h-screen'>
            <h1 className='text-3xl font-bold'>Your Cart</h1>
            <div>
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
        </div>
    )
}

export default Cart