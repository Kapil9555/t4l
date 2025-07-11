'use client';

import { useState } from 'react';
import CustomTable from '../components/custom/CustomTable';

const mockProducts = [
  {
    name: 'MacBook Air M2',
    price: '$999',
    category: 'Laptops',
    image: '/products/product-01.jpg',
    status: 'Active',
    stock: 12,
  },
  {
    name: 'Dell Monitor',
    price: '$199',
    category: 'Monitors',
    image: '/products/product-02.jpg',
    status: 'Pending',
    stock: 0,
  },
];

export default function ProductsPage() {
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
    { key: 'price', label: 'Price' },
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
      selectable={true}
      showSearch={true}
      showColumnToggle={true}
      showCategoryFilter={true}
      categoryOptions={categoryOptions}
      showSort={true}
      sortOptions={sortOptions}
    />
  );
}
