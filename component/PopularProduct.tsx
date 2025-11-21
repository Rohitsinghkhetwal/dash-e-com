
"use client"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { ShoppingCart, Star } from "lucide-react"
import { useStore } from "../store/Store"


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

const categories = ["All", "Milks & Dairies", "Coffees & Teas", "Pet Foods", "Meats", "Vegetables", "Fruits"]



export default function PopularProducts({data}: {data: Product[]}) {
  
  const [activeCategory, setActiveCategory] = useState("All")
  const router = useRouter();

  const { addToCart } = useStore()


  const gotoProductPage = (id: number) => {
    router.push(`/product-details/${id}`)
  }

  

  return (
    <div className="w-full bg-white py-8 md:py-6 px-4 md:px-8">
      {/* Header */}
      <div className="mb-8 flex flex-row justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Popular Products</h2>

        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 md:flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 whitespace-nowrap text-sm font-medium ${
                activeCategory === cat ? "text-teal-500" : "text-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
        {data?.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            onClick={() => gotoProductPage(product.id)}
          >
            
            <div className="flex items-center justify-center">
               <img
                src={product.image_url}
                alt="img"
                className="max-h-full max-w-full object-contain"
              />

            </div>
             

            

          
            <div className="py-2 px-4 ">
             
              <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1">{product.name}</h3>

              
              <div className="flex items-center gap-1 ">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                  />
                ))}
                <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
              </div>

           
              <p className="text-xs text-teal-600 font-medium mb-2">By {product.brand}</p>

             
              <div className="flex items-center justify-between gap-2 mb-4">
                <div>
                <span className="text-lg font-bold text-gray-900">${product.price}</span>
                <span className="text-sm text-gray-400 line-through">${product.old_price}</span>
                </div>
                <div>
                    <button className="w-full px-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md text-sm font-semibold flex items-center justify-center gap-2 transition-colors" onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product)
                      alert("Added to Cart !")
                    }}>
                <ShoppingCart size={16} />
                Add
              </button>

                </div>
                
              
              </div>

             
              
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
