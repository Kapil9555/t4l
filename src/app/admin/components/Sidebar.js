'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Boxes,
  Tag,
  Package,
  Settings
} from "lucide-react";
import logo from "../../../../public/png/logo.png"

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
  { label: "Customers", icon: Users, href: "/admin/customers" },
  { label: "Products", icon: Boxes, href: "/admin/products" },
  { label: "Categories", icon: Tag, href: "/admin/categories" },
  { label: "Orders", icon: ShoppingCart, href: "/admin/orders" },
  { label: "Inventory", icon: Package, href: "/admin/inventory" },
  { label: "Settings", icon: Settings, href: "/admin/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white border-r hidden md:block">
      <div className="p-6">
        <div className="mb-10">
          <Image src={logo} alt="Logo" width={'auto'} height={40} />
        </div>
        <nav className="space-y-4 text-sm">
          <div className="text-gray-500 uppercase text-xs mb-1">Menu</div>
          <div className="space-y-1">
            {menuItems.map(({ label, icon: Icon, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`px-3 py-2 rounded-lg flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <Icon className="w-5 h-5" /> {label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}