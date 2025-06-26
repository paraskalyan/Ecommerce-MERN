import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../components/ui/card'
import { CheckCircleIcon, CheckIcon } from 'lucide-react'
import { Button } from '../components/ui/button'
import Confetti from "react-confetti";
import useCartStore from '../stores/useCartStore';
import axiosInstance from '../lib/axios';
import { Link } from 'react-router';

const PurchaseSuccess = () => {
    const [isProcessing, setIsProcessing] = useState(true);
    const { clearCart } = useCartStore();
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleCheckoutSuccess = async (sessionId) => {
            try {
                await axiosInstance.post("/payments/checkout-success", {
                    sessionId,
                });
                clearCart();
            } catch (error) {
                console.log(error);
            } finally {
                setIsProcessing(false);
            }
        };

        const sessionId = new URLSearchParams(window.location.search).get("session_id");
        if (sessionId) {
            handleCheckoutSuccess(sessionId);
        } else {
            setIsProcessing(false);
            setError("No session ID found in the URL");
        }
    }, [clearCart]);

    if (isProcessing) return "Processing...";

    if (error) return `Error: ${error}`;


    return (
        <div className='min-h-screen  flex items-center justify-center'>
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                gravity={0.1}
                style={{ zIndex: 99 }}
                numberOfPieces={700}
                recycle={false}
            />
            <Card className='w-md'>
                <CardHeader>
                    <CheckCircleIcon className='text-green-500' size={60} />
                    <h1 className='text-2xl font-bold'>Payment Successful</h1>
                </CardHeader>
                <CardContent>
                    <h4 className='font-semibold'>Thank you for your order</h4>
                    <h4 className='font-semibold'>Check your email for other details and updates</h4>
                    <div className='bg-[#f3f3f3] space-y-3 mt-4 font-semibold rounded-lg p-3'>
                        <div className='flex justify-between'>
                            <h1>Order No.</h1>
                            <h1>#87878</h1>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Estimated Delivery</h1>
                            <h1>3-5 business days</h1>
                        </div>
                    </div>

                </CardContent>
                <CardFooter>
                    <Link to='/'>
                        <Button className='bg-black py-5 w-full text-md hover:bg-white hover:text-black border border-black'>Go to home page</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}

export default PurchaseSuccess