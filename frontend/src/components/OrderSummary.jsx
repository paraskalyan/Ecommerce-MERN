import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { ArrowRight } from 'lucide-react'
import useCartStore from '../stores/useCartStore'
import { loadStripe } from '@stripe/stripe-js'
import axiosInstance from '../lib/axios'


const stripePromise = loadStripe('pk_test_51Rc6JqFqe1jx9svQCe6y6QuL3MOaKYGrHeGtYNrFHI5BVLoeFhWKOpw2SFlbGC4OjJyo34kISbTCLkLpkeMWgD1Y00BxElgmD7')

const OrderSummary = () => {
    const [inputCode, setInputCode] = useState('')

    const { total, subtotal, coupon, isCouponApplied, cart, applyCoupon, getMyCoupon, removeCoupon } = useCartStore();

    useEffect(() => {
        getMyCoupon()
    }, [getMyCoupon])

    useEffect(() => {
        if (coupon) setInputCode(coupon.code)
    }, [coupon])

    const handleApplyCoupon = () => {
        if (!inputCode) return;
        applyCoupon(inputCode)
    }

    const handleRemoveCoupon = async () => {
        await removeCoupon()
        setInputCode('')
    }


    const savings = subtotal - total;
    const formattedSubtotal = subtotal.toFixed(2);
    const formattedTotal = total.toFixed(2);
    const formattedSavings = savings.toFixed(2);

    const handleStripePayment = async () => {
        const stripe = await stripePromise;
        const res = await axiosInstance.post('/payments/create-checkout-session', {
            products: cart,
            couponCode: coupon ? coupon.code : null
        })
        const session = res.data

        const result = await stripe.redirectToCheckout({
            sessionId: session.id
        })
    }
    return (
        <Card>
            <CardHeader className='font-bold text-lg'>Order Summary</CardHeader>
            <CardContent>
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-between'>
                        <h6>Subtotal</h6>
                        <h6 className='font-bold'>${formattedSubtotal}</h6>
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
                        <h5 className='text-xl font-bold'>${formattedTotal}</h5>
                    </div>
                    <div className='flex items-center gap-2 mt-4'>
                        <Input value={inputCode} className='py-6 rounded-full' placeholder='Add promo code' />
                        <Button onClick={handleApplyCoupon} className='py-6 px-6'>Apply</Button>
                    </div>
                    {
                        isCouponApplied && coupon &&
                        <>
                            <div className='flex justify-between w-full'>
                                <h4>Applied Coupon</h4>
                                <h5 className='font-bold'>{coupon.code} - {coupon.discountPercentage}% off</h5>

                            </div>
                            <Button className='w-full mt-4 py-6 text-md' onClick={handleRemoveCoupon}>Remove Coupon</Button>
                        </>
                    }
                    <Button onClick={handleStripePayment} className='w-full mt-4 py-6 text-md'>Go Checkout <ArrowRight /></Button>
                </div>
            </CardContent>
            {
                coupon &&
                <CardFooter className='border-t'>
                    <div className='flex justify-between w-full'>

                        <h4>Available Coupons</h4>
                        <h5 className='font-bold'>{coupon.code} - {coupon.discountPercentage}% off</h5>
                    </div>
                </CardFooter>
            }
        </Card>
    )
}

export default OrderSummary