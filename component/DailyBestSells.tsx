
"use client"

import React, { useState } from 'react';
import { ChevronRight, Star } from 'lucide-react';
import { useRouter } from  "next/navigation"
import { useStore } from '@/store/Store';



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



const DailyBestSells = ({data}: {data:Product[]}) => {
  const router = useRouter()
  console.log("this is the data ", data);
  const [activeTab, setActiveTab] = useState('featured');

  const { addToCart } = useStore()

  const gotoProductPage = (id: number) => {
    router.push(`/product-details/${id}`)
  }


 
  return (
    <div className="w-full bg-white py-8 px-4 md:px-8">
      <div className="max-w-full mx-auto">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Daily Best Sells</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('featured')}
              className={`text-sm md:text-base font-medium transition-colors ${
                activeTab === 'featured' ? 'text-emerald-500' : 'text-gray-600'
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setActiveTab('popular')}
              className={`text-sm md:text-base font-medium transition-colors ${
                activeTab === 'popular' ? 'text-emerald-500' : 'text-gray-600'
              }`}
            >
              Popular
            </button>
            <button
              onClick={() => setActiveTab('new')}
              className={`text-sm md:text-base font-medium transition-colors ${
                activeTab === 'new' ? 'text-emerald-500' : 'text-gray-600'
              }`}
            >
              New added
            </button>
          </div>
        </div>

        
        <div className="relative">
          <div className="flex gap-6">
            
            <div className="hidden lg:block w-80 shrink-0">
              <div 
                className="rounded-2xl overflow-hidden h-full relative"
                style={{
                  backgroundImage: 'url(./bgimg.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0" />
                <div className="relative h-full p-8 flex flex-col justify-center">
                  <h3 className="text-white text-4xl font-bold leading-tight mb-6">
                    Bring nature<br />into your<br />home
                  </h3>
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md font-medium inline-flex items-center gap-2 w-fit transition-colors">
                    Shop Now
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            
            <div 
              id="products-container"
              className="flex-1 overflow-x-auto scrollbar-hide scroll-smooth"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 min-w-min">
                {data?.map((product) => (
                  <div
                    key={product?.id}
                    className="bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-2xl flex flex-col w-full"
                    onClick={() => gotoProductPage(product?.id)}
                  >
                   
                    <div className="relative mb-4">
                     
                      <div className="w-full flex items-center justify-center">
                        <img
                          src={product?.image_url}
                          alt="image"
                          className="w-full h-full object-contain p-4"
                        />
                      </div>
                    </div>

                
                    <div className="flex-1 flex flex-col">
                      <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                      <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 min-h-[40px]">
                        {product.name}
                      </h3>

                      
                      <div className="flex items-center gap-1 mb-3">
                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-gray-600">({product.rating})</span>
                      </div>

                      
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg font-bold text-emerald-500">
                          ${product.price}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                          ${product?.old_price}
                        </span>
                      </div>

                    
                      <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                        alert("Added to Cart !")


                      }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default DailyBestSells;