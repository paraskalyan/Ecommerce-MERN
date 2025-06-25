import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table'
import useProductStore from '../stores/useProductStore'
import { DeleteIcon, StarIcon, Trash, Trash2 } from 'lucide-react'
import { Button } from './ui/button'
const Products = () => {
    const { products, toggleFeaturedProduct, deleteProduct } = useProductStore()
    console.log("Products:   ", products)

    return (
        <div>
            <Table>
                <TableHeader className='bg-[#eeeeee]'>
                    <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Brand</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Stock</TableHead>
                        <TableHead>Featured</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        products.map((product) => {
                            return (

                                <TableRow key={product._id}>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>${product.price}</TableCell>
                                    <TableCell>{product.brand}</TableCell>
                                    <TableCell>{product.category}</TableCell>
                                    <TableCell>{product.stock}</TableCell>
                                    <TableCell><Button onClick={() => toggleFeaturedProduct(product._id)} className={`${product.isFeatured ? 'bg-yellow-400' : 'bg-gray-300'}`}><StarIcon /></Button></TableCell>
                                    <TableCell>
                                        <Button onClick={() => deleteProduct(product._id)} variant='destructive' size='sm' className=''><Trash2 /></Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default Products