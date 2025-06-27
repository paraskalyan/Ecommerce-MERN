import React from 'react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Button } from './ui/button';
import useProductStore from '../stores/useProductStore';
import { Loader2Icon } from 'lucide-react';

const CreateProduct = () => {
    const sizes = [
        { label: '6', id: 'size-6' },
        { label: '7', id: 'size-7' },
        { label: '8', id: 'size-8' },
        { label: '9', id: 'size-9' },
        { label: '10', id: 'size-10' },
        { label: '11', id: 'size-11' },
        { label: '12', id: 'size-12' },
    ];

    const { createProduct, loading } = useProductStore()
    const [formData, setFormData] = React.useState({
        name: '',
        description: '',
        price: '',
        brand: '',
        category: '',
        stock: '',
        image: null,
        sizes: [],
    });

    const handleSizeChange = (sizeLabel) => {
        setFormData((prev) => {
            const updatedSizes = prev.sizes.includes(sizeLabel)
                ? prev.sizes.filter((s) => s !== sizeLabel)
                : [...prev.sizes, sizeLabel];
            return { ...prev, sizes: updatedSizes };
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prev) => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(formData);
    };

    return (
        <Card className='max-w-md mx-auto'>
            <CardHeader>Create a Product</CardHeader>
            <CardContent className='flex flex-col gap-4'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

                    <div>
                        <Label htmlFor='name'>Product Name</Label>
                        <Input
                            id='name'
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            type='text'

                        />
                    </div>

                    <div>
                        <Label htmlFor='description'>Product Description</Label>
                        <Textarea
                            id='description'
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className='resize-none'

                        />
                    </div>

                    <div>
                        <Label htmlFor='price'>Product Price</Label>
                        <Input
                            id='price'
                            value={formData.price}
                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                            type='number'

                        />
                    </div>

                    <div>
                        <Label>Product Sizes</Label>
                        <div className='flex gap-3 flex-wrap'>
                            {sizes.map((size) => (
                                <div key={size.id} className='flex items-center gap-2 my-2'>
                                    <Checkbox
                                        id={size.id}
                                        checked={formData.sizes.includes(size.label)}
                                        onCheckedChange={() => handleSizeChange(size.label)}
                                    />
                                    <Label htmlFor={size.id}>{size.label}</Label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <Label htmlFor='brand'>Product Brand</Label>
                        <Input
                            id='brand'
                            value={formData.brand}
                            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                            type='text'

                        />
                    </div>

                    <div>
                        <Label htmlFor='category'>Product Category</Label>
                        <select
                            id='category'
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            className='w-full p-2 border rounded-md mt-2 text-sm text-gray-500'
                        >
                            <option value='' disabled>Select Category</option>
                            <option value='sneakers'>Sneakers</option>
                            <option value='running'>Running</option>
                            <option value='formal'>Formal</option>
                            <option value='casual'>Casual</option>
                        </select>
                    </div>

                    <div>
                        <Label htmlFor='stock'>Product Stock</Label>
                        <Input
                            id='stock'
                            value={formData.stock}
                            onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                            type='number'
                            min='0'
                        />
                    </div>

                    <div>
                        <Label htmlFor='image'>Product Image</Label>
                        <Input
                            id='image'
                            onChange={handleImageChange}
                            type='file'
                            accept='image/*'
                            className='mt-2'

                        />
                    </div>

                    <Button type='submit'>{loading ? <Loader2Icon className='animate-spin' /> : 'Create Product'}</Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default CreateProduct;
