import { ArrowLeft, CrossIcon, XCircle } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../components/ui/card'
import { CheckCircleIcon, CheckIcon } from 'lucide-react'
import { Button } from '../components/ui/button'
import Confetti from "react-confetti";
import useCartStore from '../stores/useCartStore';
import axiosInstance from '../lib/axios';
import { Link } from 'react-router';

const PurchaseCancelled = () => {
    return (
        <div className='min-h-screen  flex items-center justify-center'>
            <Card className='w-md'>
                <CardHeader>
                    <XCircle className='text-red-500' size={60} />
                    <h1 className='text-2xl font-bold'>Purchased Cancelled</h1>
                </CardHeader>
                <CardContent>
                    <h4 className='font-semibold'>Your order has been cancelled. No charges have been made.</h4>
                    <div className='bg-[#f3f3f3] space-y-3 mt-4 font-semibold rounded-lg p-3'>
                        If you encountered any issues during the checkout process, please don't hesitate to contact our support team
                    </div>

                </CardContent>
                <CardFooter>
                    <Link to='/cart'>
                        <Button className='bg-black py-5 w-full text-md hover:bg-white hover:text-black border border-black'><ArrowLeft />Return to Shop</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}

export default PurchaseCancelled