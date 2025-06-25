import React from 'react'
import { Button } from '../components/ui/button'
import { ArrowRight, ArrowLeft, ShoppingCartIcon } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router'
const Home = () => {
    return (
        <div>
            <section className='flex items-center  min-h-screen justify-center  gap-3 px-10'>
                <div className='   flex flex-col  items-start justify-center '>
                    <h1 className='text-[5rem] font-bold leading-0.5'>
                        Sh<span className='w-[130px] h-[43px] align-middle inline-block border-7 border-orange-500 rounded-full'></span>es
                    </h1>
                    <h1 className='text-[5rem] font-bold '>Collect !</h1>
                    <div className='flex flex-col  items-start justify-center max-w-md gap-3 my-3'>
                        <h6>Discover your stylish and comfortable shoes, perfect for every occasion and need</h6>
                        <Button>Shop now</Button>
                    </div>

                    <div className='grid grid-cols-3 gap-3'>
                        <img className=' size-20 border rounded-full object-contain' src='https://logowik.com/content/uploads/images/t_697_nike.jpg' />
                        <img className=' size-20 border rounded-full object-contain' src='https://static.vecteezy.com/system/resources/previews/020/336/032/non_2x/puma-logo-puma-icon-free-free-vector.jpg' />
                        <img className=' size-20 border rounded-full object-contain' src='https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' />
                    </div>
                </div>

                <div className='flex   items-center justify-center'>
                    <div className='w-[400px] h-[400px] rounded-full bg-primary/10 absolute -z-10'></div>
                    <img src='/shoe-bg.png' className='' alt='header-image' />
                </div>

            </section>

            <section className='container mx-auto py-10'>
                <div className='flex justify-between'>

                    <h3 className='text-4xl font-bold mb-10'>Trending Products</h3>
                </div>

                <div>
                    <Carousel className='w-full'>
                        <CarouselContent>
                            {
                                Array.from({ length: 10 }).map((_, index) => {
                                    return (
                                        <CarouselItem className='basis-1/5'>

                                            <ProductCard />
                                        </CarouselItem>
                                    )
                                })
                            }
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </section>

            <section className='container mx-auto py-10'>
                <h1 className='text-4xl font-bold mb-10'>Shop by category</h1>
                <div className='grid grid-cols-4 gap-4'>
                    <Link to='/category/sneakers' className='size-96 overflow-hidden relative flex items-center justify-center'>
                        <h1 className='absolute text-white text-4xl z-10'>Sneakers</h1>
                        <img className='object-cover brightness-50' src='/sneakers.webp' />
                    </Link>
                    <Link to='/category/running' className='size-96 overflow-hidden relative flex items-center justify-center'>
                        <h1 className='absolute text-white text-4xl z-10'>Running</h1>
                        <img className='object-cover brightness-50' src='/running.avif' />
                    </Link>
                    <Link to='/category/formal' className='size-96 overflow-hidden relative flex items-center justify-center'>
                        <h1 className='absolute text-white text-4xl z-10'>Formal</h1>
                        <img className='object-cover brightness-50' src='/formal.webp' />
                    </Link>
                    <Link to='/category/casual' className='size-96 overflow-hidden relative flex items-center justify-center'>
                        <h1 className='absolute text-white text-4xl z-10'>Casual</h1>
                        <img className='object-cover brightness-50' src='/casual.jpg' />
                    </Link>
                </div>


            </section>

            <section className='flex my-10 items-center justify-center gap-8 container mx-auto max-w-7xl'>
                <div className='flex-1 flex flex-col items-center justify-center'>
                    <div className=''>

                        <h1 className='text-[2.6rem] font-semibold'>See our new Collection</h1>
                    </div>
                    <div>
                        <img className='rounded-2xl' width={500} src='https://redtape.com/cdn/shop/files/RSO3793M_1.jpg?v=1750746575' />
                    </div>
                </div>

                <div className='flex-1 space-y-4'>
                    <div>
                        <img className='rounded-2xl' width={500} src='https://redtape.com/cdn/shop/files/RSO3636M_1.jpg?v=1750746677' />
                    </div>
                    <div className='space-y-2'>
                        <h6>Discover our new collection now! Experience fresh styles and designs, perfect for updating your wardrobe with the latest trends</h6>
                        <Button variant='outline'>Buy now</Button>
                    </div>
                </div>
            </section>


            <section className='container mx-auto mt-20 '>
                <h1 className='font-semibold text-xl text-center tracking-widest text-[#a1a1a1]'>TECHNOLOGY</h1>
                <h3 className=' font-bold text-4xl text-center mt-3'>Details Down to Sneaker Level</h3>
                <div className='mt-10 grid grid-cols-3'>
                    <img className='rounded-2xl' src='/f-1.png' />
                    <img className='rounded-2xl' src='/f-2.png' />
                    <img className='rounded-2xl' src='/f-3.png' />
                </div>
            </section>



        </div>
    )
}

export default Home