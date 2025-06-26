import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { ArrowRight } from 'lucide-react'
import useCartStore from '../stores/useCartStore'
import { loadStripe } from '@stripe/stripe-js'
import axiosInstance from '../lib/axios'


const stripePromise = loadStripe('pk_test_51Rc6JqFqe1jx9svQCe6y6QuL3MOaKYGrHeGtYNrFHI5BVLoeFhWKOpw2SFlbGC4OjJyo34kISbTCLkLpkeMWgD1Y00BxElgmD7')

const OrderSummary = () => {

    const { total, subtotal, coupon, isCouponApplied, cart } = useCartStore();

    const savings = subtotal - total;
    const formattedSubtotal = subtotal.toFixed(2);
    const formattedTotal = total.toFixed(2);
    const formattedSavings = savings.toFixed(2);

    const handleStripePayment = async () => {
        const stripe = await stripePromise;
        const res = await axiosInstance.post('/payments/create-checkout-session', {
            products: cart,
            coupon: coupon ? coupon.code : null
        })
        const session = res.data

        const result = await stripe.redirectToCheckout({
            sessionId: session.id
        })
        console.log(session)
    }
    return (
        <Card>
            <CardHeader className='font-bold text-lg'>Order Summary</CardHeader>
            <CardContent>
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-between'>
                        <h6>Subtotal</h6>
                        <h6 className='font-bold'>${formattedTotal}</h6>
                    </div>
                    <div className='flex justify-between'>
                        <h6>Discount</h6>
                        <h6 className='font-bold text-red-500'>-${formattedSavings}</h6>
                    </div>
                    <div className='flex justify-between'>
                        <h6>Delivery Fee</h6>
                        <h6 className='font-bold'>$10</h6>
                    </div>
                </div>
                <div className='border-t mt-4 pt-4'>
                    <div className='flex justify-between items-center'>
                        <h5 className='text-lg font-semibold mt-4'>Total</h5>
                        <h5 className='text-xl font-bold'>${formattedSubtotal}</h5>
                    </div>
                    <div className='flex items-center gap-2 mt-4'>
                        <Input className='py-6 rounded-full' placeholder='Add promo code' />
                        <Button className='py-6 px-6'>Apply</Button>
                    </div>
                    <Button onClick={handleStripePayment} className='w-full mt-4 py-6 text-md'>Go Checkout <ArrowRight /></Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default OrderSummary