'use client'
import { useState } from "react";
import CustomTable from "../components/custom/CustomTable";

// /admin/customers/page.js
export default function CustomersPage() {
  const [data, setData] = useState([
    {
      user: {
        name: 'John Doe',
        role: 'Returning Customer',
        image: '/png/user.jpg',
      },
      email: 'john@example.com',
      phone: '+1 555-123-4567',
      joined: '2023-08-10',
      status: 'Active',
    },
    {
      user: {
        name: 'Alice Smith',
        role: 'First-time Buyer',
        image: '/png/user.jpg',
      },
      email: 'alice@domain.com',
      phone: '+1 555-987-6543',
      joined: '2024-01-25',
      status: 'Pending',
    },
    {
      user: {
        name: 'Alice Smith',
        role: 'First-time Buyer',
        image: '/png/user.jpg',
      },
      email: 'alice@domain.com',
      phone: '+1 555-987-6543',
      joined: '2024-01-25',
      status: 'Pending',
    },

    {
      user: {
        name: 'Alice Smith',
        role: 'First-time Buyer',
        image: '/png/user.jpg',
      },
      email: 'alice@domain.com',
      phone: '+1 555-987-6543',
      joined: '2024-01-25',
      status: 'Pending',
    },

    {
      user: {
        name: 'Alice Smith',
        role: 'First-time Buyer',
        image: '/png/user.jpg',
      },
      email: 'alice@domain.com',
      phone: '+1 555-987-6543',
      joined: '2024-01-25',
      status: 'Pending',
    },

    {
      user: {
        name: 'Alice Smith',
        role: 'First-time Buyer',
        image: '/png/user.jpg',
      },
      email: 'alice@domain.com',
      phone: '+1 555-987-6543',
      joined: '2024-01-25',
      status: 'Pending',
    },

    {
      user: {
        name: 'Alice Smith',
        role: 'First-time Buyer',
        image: '/png/user.jpg',
      },
      email: 'alice@domain.com',
      phone: '+1 555-987-6543',
      joined: '2024-01-25',
      status: 'Pending',
    },
  ]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(2);

  const columns = [
    { key: 'user', label: 'Customer' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'joined', label: 'Joined' },
    { key: 'status', label: 'Status' },
  ];

  return (
    <CustomTable
      title="Customers"
      columns={columns}
      data={data}
      actions={['view', 'edit']}
      currentPage={currentPage}
      totalPages={totalPages}
      totalItems={totalItems}
      itemsPerPage={itemsPerPage}
      onPageChange={(page) => setCurrentPage(page)}
      onLimitChange={(limit) => {
        setItemsPerPage(limit);
        setCurrentPage(1);
      }}
      onSearchChange={(val) => {
        setSearch(val);
        setCurrentPage(1);
      }}
      onRowClick={(row) => console.log('Clicked row:', row)}
    />
  );
}


