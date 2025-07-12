'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    ImageInput,
    ImageUploadInput,
    SelectInput,
    TextareaInput,
    TextInput,
} from '@/components/custom/ui/input';
import { H1, H2, H3, H4 } from '@/components/custom/ui/text';

const initialState = {
    name: '',
    price: '',
    category: '',
    brand: '',
    description: '',
    countInStock: '',
    status: 'Active',
    image: '',
};

const categories = ['Laptops', 'Monitors', 'Keyboards', 'CPUs'];
const statusOptions = ['Active', 'Pending', 'Cancel'];

export default function AddProductPage() {
    const [formData, setFormData] = useState(initialState);
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:', formData);
        // TODO: integrate API call here
        // axios.post('/api/products', formData).then(...)
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
                <H4 className="text-3xl font-bold text-blue-900 mb-4">Add New Product</H4>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Product Name */}
                    <TextInput
                        label="Product Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    {/* Price & Stock */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TextInput
                            label="Price (INR)"
                            name="price"
                            type="number"
                            value={formData.price}
                            onChange={handleChange}
                            required
                        />
                        <TextInput
                            label="Stock Count"
                            name="countInStock"
                            type="number"
                            value={formData.countInStock}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Brand & Category */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TextInput
                            label="Brand"
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                        />
                        <SelectInput
                            label="Category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            options={categories}
                            placeholder="Choose a category"
                        />
                    </div>

                    {/* Status */}
                    <SelectInput
                        label="Status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        options={statusOptions}
                    />

                    <ImageUploadInput
                        label="Upload Product Images"
                        name="images"
                        onChange={(e) => {
                            const files = Array.from(e.target.files);
                            setFormData((prev) => ({ ...prev, images: files }));
                        }}
                    />


                    {/* Description */}
                    <TextareaInput
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all shadow-sm"
                        >
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
