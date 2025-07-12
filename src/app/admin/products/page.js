'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CustomTable from '../components/custom/CustomTable';

const mockProducts = [
  {
    id: '1',
    name: 'MacBook Air M2',
    price: 99900,
    category: 'Laptops',
    image: '/products/product-01.jpg',
    status: 'Active',
    stock: 12,
  },
  {
    id: '2',
    name: 'Dell Monitor',
    price: 19900,
    category: 'Monitors',
    image: '/products/product-02.jpg',
    status: 'Pending',
    stock: 0,
  },
];

export default function ProductsPage() {
  const router = useRouter();
  const [data, setData] = useState(mockProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalItems] = useState(mockProducts.length);
  const [totalPages] = useState(2);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');

  const columns = [
    { key: 'image', label: 'Image' },
    { key: 'name', label: 'Product Name' },
    { key: 'category', label: 'Category' },
    {
      key: 'price',
      label: 'Price',
      render: (row) => `₹${row.price.toLocaleString()}`,
    },
    { key: 'status', label: 'Status' },
    { key: 'stock', label: 'Stock' },
  ];

  const categoryOptions = ['Laptops', 'Monitors', 'Keyboards'];

  const sortOptions = [
    { label: 'Name A-Z', value: 'name_asc' },
    { label: 'Name Z-A', value: 'name_desc' },
    { label: 'Price Low-High', value: 'price_asc' },
    { label: 'Price High-Low', value: 'price_desc' },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-blue-900">Products</h1>
        <button
          onClick={() => router.push('/admin/products/new')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </div>

      <CustomTable
        title="Products"
        columns={columns}
        data={data}
        actions={['view', 'edit', 'delete']}
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        onLimitChange={setItemsPerPage}
        onSearchChange={(val) => {
          setSearch(val);
          setCurrentPage(1);
        }}
        onCategoryChange={(val) => {
          setCategory(val);
          setCurrentPage(1);
        }}
        onSortChange={(val) => {
          setSort(val);
          setCurrentPage(1);
        }}
        onDeleteClick={(row) => console.log('Delete row:', row)}
        onRowClick={(row) => console.log('View row:', row)}
        selectable={true}
        showSearch={true}
        showColumnToggle={true}
        showCategoryFilter={true}
        categoryOptions={categoryOptions}
        showSort={true}
        sortOptions={sortOptions}
      />
    </div>
  );
}
