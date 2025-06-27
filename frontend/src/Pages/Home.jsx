import React, { useEffect } from 'react'
import { Button } from '../components/ui/button'
import { ArrowRight, ArrowLeft, ShoppingCartIcon } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router'
import { useUserStore } from '../stores/useUserStore'
import useProductStore from '../stores/useProductStore'
const Home = () => {
    const { fetchFeaturedProducts, products, isLoading } = useProductStore();
    useEffect(() => {
        fetchFeaturedProducts();
    }, [fetchFeaturedProducts]);

    console.log(products)
    return (
        <div>
            <section className='container flex items-center justify-center min-h-[90vh] mx-auto'>
                <div className='flex flex-col w-fit px-4 lg:px-0 md:px-0'>
                    <h1 className='text-[5rem]  font-semibold leading-0.5 tracking-wider'>
                        Sh<span className='w-[150px] h-[43px] align-middle inline-block border-8 border-orange-500 rounded-full'></span>es
                    </h1>
                    <h1 className='text-[5rem] font-semibold tracking-wider '>Collect !</h1>
                    <div className='flex flex-col  items-start justify-center max-w-md gap-3 my-3'>
                        <h6>Discover your stylish and comfortable shoes, perfect for every occasion and need</h6>
                        <Button>Shop now</Button>
                    </div>

                    <div className='grid grid-cols-3 gap-3 w-fit bg-white'>
                        <img className=' size-15 border rounded-full object-contain' src='https://logowik.com/content/uploads/images/t_697_nike.jpg' />
                        <img className=' size-15 border rounded-full object-contain' src='https://static.vecteezy.com/system/resources/previews/020/336/032/non_2x/puma-logo-puma-icon-free-free-vector.jpg' />
                        <img className=' size-15 border rounded-full object-contain' src='https://static.vecteezy.com/system/resources/previews/010/994/239/non_2x/adidas-logo-black-symbol-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg' />
                    </div>
                    <div className='mt-4'>
                        <h5>+ 7 more brands</h5>
                    </div>
                </div>

                <div className='hidden lg:block'>
                    <div className='w-[400px] h-[400px] rounded-full bg-primary/10 absolute -z-10'></div>
                    <img src='/bg-4.jpg' className='w-full' alt='header-image' />
                </div>

            </section>

            <section className='container mx-auto px-4 py-10 '>


                <h3 className='text-2xl md:text-3xl lg:text-3xl font-bold mb-10'>Trending Products</h3>


                {
                    !isLoading && products?.length > 0 &&
                    <div className=''>
                        <Carousel className='w-full'>
                            <CarouselContent className=' flex items-center'>
                                {
                                    products?.map((product, index) => {
                                        return (
                                            <CarouselItem key={product._id} className='basis-1/1 md:basis-1/3 lg:basis-1/5'>

                                                <ProductCard product={product} />
                                            </CarouselItem>
                                        )
                                    })
                                }
                            </CarouselContent>
                            <CarouselPrevious className="top-[calc(100%+0.5rem)] translate-y-0 left-0" />
                            <CarouselNext className="top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full" />
                        </Carousel>
                    </div>
                }
            </section>

            <section className=' hidden my-10 items-center justify-center gap-8 container mx-auto max-w-7xl'>
                <div className='flex-1 flex flex-col items-center justify-center'>
                    <div className=''>

                        <h1 className='text-4xl font-semibold'>See our new Collection</h1>
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
            <section className='container mx-auto py-10'>
                <h1 className='text-2xl lg:text-4xl md:text-3xl font-bold mb-10 text-center lg:text-left'>Shop by category</h1>
                <div className='grid grid-cols-1 lg:gap-3 md:gap-3 md:grid-cols-2 lg:grid-cols-4 place-items-center'>
                    <Link to='/category/sneakers' className='lg:size-72 size-full overflow-hidden relative flex items-center justify-center'>
                        <h1 className='absolute text-white text-4xl z-10'>Sneakers</h1>
                        <img className='object-cover brightness-50' src='/sneakers.webp' />
                    </Link>
                    <Link to='/category/running' className='lg:size-72 size-full overflow-hidden relative flex items-center justify-center'>
                        <h1 className='absolute text-white text-4xl z-10'>Running</h1>
                        <img className='object-cover brightness-50' src='/running.avif' />
                    </Link>
                    <Link to='/category/formal' className='lg:size-72 size-full overflow-hidden relative flex items-center justify-center'>
                        <h1 className='absolute text-white text-4xl z-10'>Formal</h1>
                        <img className='object-cover brightness-50' src='/formal.webp' />
                    </Link>
                    <Link to='/category/casual' className='lg:size-72 size-full overflow-hidden relative flex items-center justify-center'>
                        <h1 className='absolute text-white text-4xl z-10'>Casual</h1>
                        <img className='object-cover brightness-50' src='/casual.jpg' />
                    </Link>
                </div>


            </section>



            <section className='container mx-auto mt-20 px-4'>
                <h1 className='font-semibold text-xl text-center tracking-widest text-[#a1a1a1]'>TECHNOLOGY</h1>
                <h3 className=' font-bold text-2xl md:text-3xl lg:text-4xl text-center mt-3'>Details Down to Sneaker Level</h3>
                <div className='mt-10 grid gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                    <img className='rounded-2xl' src='/f-2.png' />
                    <img className='rounded-2xl' src='/f-1.png' />
                    <img className='rounded-2xl' src='/f-3.png' />
                </div>
            </section>



        </div>
    )
}

export default Home