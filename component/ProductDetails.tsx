"use client"

import React, { useState } from 'react';
import { Star, ShoppingCart, ChevronUp } from 'lucide-react';

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('50g');
  const [priceRange, setPriceRange] = useState([30, 280]);
  const [activeTab, setActiveTab] = useState('description');

  const sizes = [
    { label: '50g', active: true },
    { label: '80g', active: false },
    { label: '100g', active: false },
    { label: '200g', active: false }
  ];

  const categories = [
    { name: 'Juice & Drinks', count: 26 },
    { name: 'Dairy & Milk', count: 18 },
    { name: 'Snack & Spice', count: 64 }
  ];

  const tags = ['Vegetables', 'Juice', 'Food', 'Dry Fruits'];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-red-500 h-1 w-full"></div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Product Category</h3>
              <ul className="space-y-3">
                {categories.map((cat, idx) => (
                  <li key={idx} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 hover:text-red-500 cursor-pointer transition">{cat.name}</span>
                    <span className="text-gray-400 text-xs">[{cat.count}]</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Filter By Price</h3>
              <div className="mb-4">
                <input 
                  type="range" 
                  min="0" 
                  max="500" 
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Price: <span className="font-semibold">${priceRange[0]} - ${priceRange[1]}</span>
              </p>
              <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition">
                Filter
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Products Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-red-50 hover:text-red-500 cursor-pointer transition">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Product Image */}
                <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=500&h=500&fit=crop" 
                    alt="Product" 
                    className="w-full h-auto max-w-sm object-contain"
                  />
                </div>

                {/* Product Details */}
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                    Seeds Of Change Organic Quinoa, Brown
                  </h1>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure nam error adipisci excepte molisiti?
                  </p>

                  <div className="flex items-center mb-6">
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">( 75 Review )</span>
                  </div>

                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex">
                      <span className="text-gray-500 w-28">Brand</span>
                      <span className="text-gray-400 mr-2">:</span>
                      <span className="text-gray-700 font-medium">ESTA BETTERU CO</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-28">Flavour</span>
                      <span className="text-gray-400 mr-2">:</span>
                      <span className="text-gray-700 font-medium">Super Saver Pack</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-28">Diet Type</span>
                      <span className="text-gray-400 mr-2">:</span>
                      <span className="text-gray-700 font-medium">Vegetarian</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-28">Weight</span>
                      <span className="text-gray-400 mr-2">:</span>
                      <span className="text-gray-700 font-medium">200 Grams</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-28">Speciality</span>
                      <span className="text-gray-400 mr-2">:</span>
                      <span className="text-gray-700 font-medium">Gluten Free, Sugar Free</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-28">Info</span>
                      <span className="text-gray-400 mr-2">:</span>
                      <span className="text-gray-700 font-medium">Egg Free, Allergen-Free</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-28">Items</span>
                      <span className="text-gray-400 mr-2">:</span>
                      <span className="text-gray-700 font-medium">1</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold text-red-500">$120.25</span>
                      <span className="text-lg text-gray-400 line-through">$123.25</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Size/Weight:</label>
                    <div className="flex gap-2">
                      {sizes.map((size, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedSize(size.label)}
                          className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                            selectedSize === size.label
                              ? 'bg-red-500 text-white'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {size.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition"
                      >
                        -
                      </button>
                      <input 
                        type="text" 
                        value={quantity}
                        readOnly
                        className="w-12 text-center border-x border-gray-300 py-2 focus:outline-none"
                      />
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition"
                      >
                        +
                      </button>
                    </div>
                    <button className="flex-1 bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600 transition flex items-center justify-center gap-2 font-medium">
                      <ShoppingCart size={20} />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>

              {/* Tabs Section */}
              <div className="border-t pt-6">
                <div className="flex gap-6 mb-6 border-b">
                  {['description', 'information', 'review'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 text-sm font-medium capitalize transition ${
                        activeTab === tab
                          ? 'text-red-500 border-b-2 border-red-500'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="text-gray-600 text-sm leading-relaxed">
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit sapiente odio, amet dolore sunt temporibus consequuntur. Nobis voluptatem auot dignissimos consectetur quasi in parturients ducibusauctis corporis, integer dictum neque ormet, rutrum adipicsi aget pertinentia dolor! Quis vel consequetur repttrit desinctio sem. Congugi nislione alisao sodio, error aliquet tempicibus consequenter, nobis veniami adit ulbcorem dignisimos concocetur quam lorem in parturient praesent quis.
                  </p>
                  
                  <h3 className="font-semibold text-gray-800 mt-6 mb-3">Packaging & Delivery</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in velit sapiente odio, aumet dolore sunt temporibus consequuntur Quis vel consequatur reputtrit desinctio ulam. Congue ratione neque, error sodare temporibus consequatter, nobis veniami adit ulbcorem dignissimos concocetur quam in parturient praesent quis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
}