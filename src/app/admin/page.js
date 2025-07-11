// app/admin/page.js

'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, Legend } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Users, Package, Filter } from "lucide-react";
import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Image from 'next/image';

const percentage = 75.55;

const monthlyData = [
  { name: 'Jan', sales: 150 },
  { name: 'Feb', sales: 385 },
  { name: 'Mar', sales: 180 },
  { name: 'Apr', sales: 290 },
  { name: 'May', sales: 160 },
  { name: 'Jun', sales: 170 },
  { name: 'Jul', sales: 280 },
  { name: 'Aug', sales: 90 },
  { name: 'Sep', sales: 200 },
  { name: 'Oct', sales: 385 },
  { name: 'Nov', sales: 260 },
  { name: 'Dec', sales: 100 },
];

const lineData = [
  { name: 'Week 1', revenue: 2400 },
  { name: 'Week 2', revenue: 3200 },
  { name: 'Week 3', revenue: 2900 },
  { name: 'Week 4', revenue: 3500 },
];

const orders = [
  {
    image: '/products/product-01.jpg',
    name: 'MacBook Pro 13”',
    variants: '2 Variants',
    price: 2399.00,
    category: 'Laptop',
    status: 'Delivered',
  },
  {
    image: '/products/product-02.jpg',
    name: 'Apple Watch Ultra',
    variants: '1 Variant',
    price: 879.00,
    category: 'Watch',
    status: 'Pending',
  },
  {
    image: '/products/product-03.jpg',
    name: 'iPhone 15 Pro Max',
    variants: '2 Variants',
    price: 1869.00,
    category: 'SmartPhone',
    status: 'Delivered',
  },
  {
    image: '/products/product-04.jpg',
    name: 'iPad Pro 3rd Gen',
    variants: '2 Variants',
    price: 1699.00,
    category: 'Electronics',
    status: 'Canceled',
  },
  {
    image: '/products/product-05.jpg',
    name: 'AirPods Pro 2nd Gen',
    variants: '1 Variant',
    price: 240.00,
    category: 'Accessories',
    status: 'Delivered',
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6 mt-5">
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        {/* Left: Customers, Orders, Monthly Sales */}
        <div className="xl:col-span-3 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatCard
              icon={<Users className="w-6 h-6 text-[#0F172A]" />}
              label="Customers"
              value={3782}
              change="11.01"
              positive={true}
            />
            <StatCard
              icon={<Package className="w-6 h-6 text-[#0F172A]" />}
              label="Orders"
              value={5359}
              change="9.05"
              positive={false}
            />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-slate-800">Monthly Sales</h3>
              <div className="text-gray-400 cursor-pointer">⋮</div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={monthlyData} barSize={32}>
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} axisLine={false} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} axisLine={false} tickLine={false} />
                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ fontSize: '12px' }} />
                <Bar dataKey="sales" fill="#4f46e5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right: Monthly Target */}
        <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between">
          <div>
            <h4 className="text-lg font-semibold mb-1 text-slate-800">Monthly Target</h4>
            <p className="text-sm text-gray-500 mb-4">Target you’ve set for each month</p>
            <div className="w-28 h-28 mx-auto mb-4">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={10}
                styles={buildStyles({
                  textColor: '#0F172A',
                  pathColor: '#6366F1',
                  trailColor: '#E5E7EB',
                  textSize: '20px',
                })}
              />
            </div>
            <p className="text-green-600 text-sm text-center">+10%</p>
            <p className="text-sm text-gray-500 text-center mt-1">
              You earn $3287 today, it's higher than last month. Keep up your good work!
            </p>
          </div>
          <div className="flex justify-between text-sm mt-6">
            <div>
              <p className="text-gray-500">Target</p>
              <p className="text-red-600 font-medium">$20K</p>
            </div>
            <div>
              <p className="text-gray-500">Revenue</p>
              <p className="text-green-600 font-medium">$20K</p>
            </div>
            <div>
              <p className="text-gray-500">Today</p>
              <p className="text-green-600 font-medium">$20K</p>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Stats Line Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Statistics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Recent Orders</h3>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 text-sm px-3 py-1 border rounded-md text-gray-700 border-gray-300">
              <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="text-sm px-3 py-1 bg-gray-100 rounded-md">See all</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500 border-b">
              <tr>
                <th className="py-2">Products</th>
                <th className="py-2">Price</th>
                <th className="py-2">Category</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {orders.map((order, idx) => (
                <tr key={idx} className="align-middle">
                  <td className="flex items-center gap-3 py-3">
                    <Image src={order.image} alt={order.name} width={40} height={40} className="rounded" />
                    <div>
                      <p className="font-medium text-slate-800">{order.name}</p>
                      <p className="text-xs text-gray-500">{order.variants}</p>
                    </div>
                  </td>
                  <td>${order.price.toFixed(2)}</td>
                  <td>{order.category}</td>
                  <td>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      order.status === 'Delivered'
                        ? 'bg-green-100 text-green-600'
                        : order.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-600'
                          : 'bg-red-100 text-red-600'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, change, positive }) {
  return (
    <div className="bg-white rounded-xl border p-5 w-full shadow-sm flex items-start justify-between">
      <div className="flex flex-col items-start space-x-4">
        <div className="p-2 bg-gray-100 rounded-lg mb-2">{icon}</div>
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-2xl font-bold text-[#0F172A]">{value.toLocaleString()}</p>
        </div>
      </div>
      <div
        className={`text-sm flex items-center gap-1 font-medium px-2 py-1 rounded-full ${
          positive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
        }`}
      >
        {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {change}%
      </div>
    </div>
  );
}
