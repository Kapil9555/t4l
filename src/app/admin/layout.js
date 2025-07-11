
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "@/app/globals.css";

export const metadata = {
  title: "TailAdmin Dashboard",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f9fafb] text-gray-800">
        {/*<div className="flex h-screen overflow-hidden">
          <Topbar />

         <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
            <Sidebar />
            <main className="p-6 min-h-screen">{children}</main>
          </div>
        </div> */}

        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
            <Topbar />
            <main className="flex-1 overflow-y-auto p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}