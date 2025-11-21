"use client";

import { useStore } from "@/store/Store";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  ChevronDown,
  Menu,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const { items } = useStore();

  const router = useRouter();
  return (
    <div className="w-full  bg-white">
      
      <div className="border-b border-gray-200 shadow-sm px-8 py-3 ">
        <div className="flex items-center justify-between max-w-7xl mx-auto ">
         
          <button className=" text-gray-700 hover:text-black">
            <Menu size={24} />
          </button>

         
          <nav className="hidden lg:flex items-center gap-8 ">
            <Link
              href="/"
              className="text-gray-700 hover:text-black font-medium text-sm"
            >
              Home
            </Link>
            <div className="flex items-center gap-1 cursor-pointer group">
              <span className="text-gray-700 hover:text-black font-medium text-sm">
                Category
              </span>
              <ChevronDown size={16} className="text-gray-700" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer group">
              <span className="text-gray-700 hover:text-black font-medium text-sm">
                Products
              </span>
              <ChevronDown size={16} className="text-gray-700" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer group">
              <span className="text-gray-700 hover:text-black font-medium text-sm">
                Pages
              </span>
              <ChevronDown size={16} className="text-gray-700" />
            </div>
            <a
              href="#"
              className="text-gray-700 hover:text-black font-medium text-sm"
            >
              Blog
            </a>
            <div className="flex items-center gap-1 cursor-pointer group">
              <span className="text-gray-700 hover:text-black font-medium text-sm">
                Elements
              </span>
              <ChevronDown size={16} className="text-gray-700" />
            </div>
          </nav>

          
          <div className="hidden lg:flex">
            <span>📞</span>
            <span>+123 (456) (7890)</span>
          </div>
        </div>
      </div>

    
      <div className="px-8 py-2">
        <div className="flex items-center justify-between gap-8 max-w-7xl mx-auto">
         
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🍕</span>
            </div>
            <div>
              <div className="font-bold text-black text-lg">Foodzy</div>
              <div className="text-xs text-gray-600">A Treasure of Tastes</div>
            </div>
          </div>

         
          <div className="hidden md:flex items-center flex-1 max-w-md border border-gray-300 rounded bg-white">
            <input
              type="text"
              placeholder="Search for items..."
              className="flex-1 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none"
            />
            <select className="px-3 py-2 text-sm text-gray-700 border-l border-gray-300 bg-white outline-none">
              <option>All Categories</option>
            </select>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-r">
              <Search size={18} />
            </button>
          </div>

          
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-700 hover:text-black text-sm font-medium cursor-pointer">
              <User size={20} />
              <span className="hidden sm:inline">Account</span>
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-black text-sm font-medium cursor-pointer">
              <Heart size={20} />
              <span className="hidden sm:inline">Wishlist</span>
            </button>
            <div className="relative">

              <button
              className="flex items-center gap-2 text-gray-700 hover:text-black text-sm font-medium cursor-pointer"
              onClick={() => router.push("/cart")}
            >
              <ShoppingCart size={20} />
              {items.length > 0 && (
                <span className="absolute -top-3 right-6 bg-[#E7000B] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  {items.length}
                </span>
              )}
              <span className="hidden sm:inline">Cart</span>
            </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
