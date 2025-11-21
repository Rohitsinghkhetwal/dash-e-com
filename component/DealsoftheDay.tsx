"use client"
import React from 'react';
import { ShoppingCart, Star, ChevronRight } from 'lucide-react';

interface Product {
  id: number
  name: string
  image_url: string
  type: string
  brand: number
  rating: number
  price: string
  old_price: string
  weight: string
  diet_type: string
  tag: string
}

const DealsOfTheDay = ({data}:{data: Product[]}) => {


  return (
    <div className="w-full bg-white py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Deals Of The Day
          </h2>
          <button className="flex items-center gap-1 text-sm md:text-base text-gray-600 hover:text-emerald-500 transition-colors group">
            <span className="hidden sm:inline">All Deals</span>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {data?.map((deal) => (
            <div
              key={deal.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image Container */}
              <div className={` relative overflow-hidden group/image`}>
                <div className="aspect-[4/3] w-full">
                  <img
                    src={deal.image_url}
                    alt="image"
                    className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-5 flex flex-col">
                {/* Title */}
                <h3 className="text-sm md:text-base font-medium text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem] md:min-h-[3rem] hover:text-emerald-500 transition-colors cursor-pointer">
                  {deal.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={`${
                        i < Math.floor(deal.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">({deal.rating})</span>
                </div>

                {/* Brand */}
                <p className="text-xs text-gray-500 mb-3">
                  By <span className="text-emerald-500">{deal.brand}</span>
                </p>

                {/* Price and Button */}
                <div className="flex items-center justify-between mt-auto pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg md:text-xl font-bold text-emerald-500">
                      ${deal.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ${deal.old_price}
                    </span>
                  </div>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 md:px-4 py-2 md:py-2.5 rounded-md text-xs md:text-sm font-medium flex items-center gap-1.5 transition-all hover:shadow-lg active:scale-95">
                    <ShoppingCart size={16} />
                    <span className="hidden sm:inline">Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsOfTheDay;