'use client'

import { Search, ShoppingCart, Heart, User, ChevronDown, Menu } from 'lucide-react'

 function Navbar() {
  return (
    <div className="w-full bg-white">
      {/* First Row - Navigation Menu */}
      <div className="border-b border-gray-200 shadow-sm px-8 py-3 ">
        <div className="flex items-center justify-between max-w-7xl mx-auto ">
          {/* Left - Hamburger Menu */}
          <button className=" text-gray-700 hover:text-black">
            <Menu size={24} />
          </button>

          {/* Center/Left - Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-8 ">
            <a href="#" className="text-gray-700 hover:text-black font-medium text-sm">Home</a>
            <div className="flex items-center gap-1 cursor-pointer group">
              <span className="text-gray-700 hover:text-black font-medium text-sm">Category</span>
              <ChevronDown size={16} className="text-gray-700" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer group">
              <span className="text-gray-700 hover:text-black font-medium text-sm">Products</span>
              <ChevronDown size={16} className="text-gray-700" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer group">
              <span className="text-gray-700 hover:text-black font-medium text-sm">Pages</span>
              <ChevronDown size={16} className="text-gray-700" />
            </div>
            <a href="#" className="text-gray-700 hover:text-black font-medium text-sm">Blog</a>
            <div className="flex items-center gap-1 cursor-pointer group">
              <span className="text-gray-700 hover:text-black font-medium text-sm">Elements</span>
              <ChevronDown size={16} className="text-gray-700" />
            </div>
          </nav>

          {/* Right - Phone Number */}
          <div className='hidden lg:flex'>
            <span>📞</span>
            <span>+123 (456) (7890)</span>
          </div>
        </div>

         
      </div>

      {/* Second Row - Logo, Search, Account Actions */}
      <div className="px-8">
        <div className="flex items-center justify-between gap-8 max-w-7xl mx-auto">
          {/* Left - Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🍕</span>
            </div>
            <div>
              <div className="font-bold text-black text-lg">Foodzy</div>
              <div className="text-xs text-gray-600">A Treasure of Tastes</div>
            </div>
          </div>

          {/* Center - Search Bar */}
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

          {/* Right - Account Actions */}
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-700 hover:text-black text-sm font-medium">
              <User size={20} />
              <span className="hidden sm:inline">Account</span>
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-black text-sm font-medium">
              <Heart size={20} />
              <span className="hidden sm:inline">Wishlist</span>
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-black text-sm font-medium">
              <ShoppingCart size={20} />
              <span className="hidden sm:inline">Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
