
"use client"
import axios from "axios";
import { useParams } from "next/navigation";
import { Star, ChevronUp, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react";
import { useStore } from "@/store/Store";


export default function ProductDetailPage() {

  const [data, setData] = useState<any>([]);
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("250g")
  const [priceRange, setPriceRange] = useState([30, 250])

 

  const {addToCart } = useStore()


  const params = useParams()
  const id = params.id

   const sizes = ["100g", "150g", "200g"]


    const handleQuantityChange = (delta) => {
    setQuantity(Math.max(1, quantity + delta))
  }



  useEffect(() => {

    const fetchProducts = async (productId: number) => {
    try {
      const result = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/product/${productId}`)
      const data = result.data;

      setData(data?.product)

    }catch(err) {
      console.log("this is the error ", err)
    }

  }


    fetchProducts(id)

  },[id])


  return (
   <div className="min-h-screen bg-white">
     
      <div className=" bg-red-500"></div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
         
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg space-y-6">
             
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Product Category</h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-gray-600 text-sm">Juice & Drinks</span>
                    <span className="text-gray-400 text-sm">[26]</span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-gray-600 text-sm">Dairy & Milk</span>
                    <span className="text-gray-400 text-sm">[14]</span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-gray-600 text-sm">Snack & Spice</span>
                    <span className="text-gray-400 text-sm">[44]</span>
                  </label>
                </div>
              </div>

            
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Filter By Price</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    defaultValue="30"
                    className="w-full accent-red-500"
                    onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                  />
                  <div className="text-sm font-semibold text-gray-800">Price: ${priceRange[0]} - $250</div>
                  <button className="w-fit px-4 rounded-md py-2 bg-red-500 hover:bg-red-600 text-white text-sm">Filter</button>
                </div>
              </div>

              
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Products Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {["Vegetables", "Juice", "Food", "Dry Fruits"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-gray-600 hover:bg-gray-100 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          
          <div className="md:col-span-1 flex items-center justify-center bg-gray-50 rounded-lg p-8">
            <img
              src={data?.image_url}
              alt="Seeds Of Change Organic Quinoa"
              className="max-w-full h-auto object-contain"
            />
          </div>

          
          <div className="md:col-span-2 space-y-6">
            
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-3">{data?.name}</h1>
              <p className="text-gray-600 text-sm leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum sunt rerum, unde aspernatur eius voluptates doloremque quo voluptatum alias eligendi. Est voluptatum blanditiis adipisci quasi facilis deleniti in soluta!
              </p>
            </div>

         
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                ))}
              </div>
              <span className="text-red-500 text-sm font-medium">{data?.rating} Reviews</span>
            </div>

            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-600">Brand</span>
                <span className="text-gray-800">{data?.brand}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-600">Type</span>
                <span className="text-gray-800">{data?.type}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-600">Diet Type</span>
                <span className="text-gray-800">{data?.diet_type}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-600">Weight</span>
                <span className="text-gray-800">{data?.weight}</span>
              </div>
            </div>

            
            <div className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-red-500">${data?.price}</span>
                <span className="text-lg text-gray-400 line-through">${data?.old_price}</span>
              </div>

              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Size/Weight:</label>
                <div className="flex gap-2 flex-wrap">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        selectedSize === size ? "bg-red-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                  <button className="px-3 py-2 text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-md transition-colors">
                    250g
                  </button>
                </div>
              </div>

              
              <div className="flex gap-3 pt-4">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button onClick={() => handleQuantityChange(-1)} className="p-2 hover:bg-gray-100">
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  </button>
                  <span className="px-4 py-2 font-medium text-gray-800">{quantity}</span>
                  <button onClick={() => handleQuantityChange(1)} className="p-2 hover:bg-gray-100">
                    <ChevronUp className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <button className="rounded-md px-4 bg-red-500 hover:bg-red-600 text-white font-medium py-2" onClick={() =>{ 
                  addToCart({...data, quantity});
                  alert("Added to the Cart !")
                }}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

       
        <div className="flex justify-end">

          <div className="mt-16 md:w-3/4 md:border border-solid border-gray-200 p-2">
          <div className="flex gap-8 border-b border-gray-200 mb-8 overflow-x-auto">
            <button className="text-red-500 font-medium pb-3 border-b-2 border-red-500 whitespace-nowrap">
              Description
            </button>
            <button className="text-gray-600 font-medium pb-3 hover:text-gray-800 whitespace-nowrap">
              Information
            </button>
            <button className="text-gray-600 font-medium pb-3 hover:text-gray-800 whitespace-nowrap">Review</button>
          </div>

          
          <div className="space-y-6">
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Error in vero sapiente odio, error dolore vero
              temporibus consequatur. Nobis veniam odio laboriossum consequatur, nobis veniam odio laborissum
              distinctio. Consequatur repellat distinctio rem. Consequi ratione odia odio. Error dolore temporibus
              consequatur. Nobis veniam odio laborissum distinctio. Consequatur repellat distinctio rem. Consequi
              ratione odia odio error dolore temporibus consequatur. Nobis veniam odio laborissum distinctio odio.
            </p>

            <div>
              <h3 className="font-bold text-gray-800 mb-3">Packing & Delivery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Error in vero sapiente odio. Quis sit
                consequuntur repellat distinctio rem. Consequi ratione odia odio. Consequatur repellat distinctio rem
                temporibus consequatur. Nobis veniam odio laborissum distinctio odia distinctio odio error dolore
                temporibus consequatur. Nobis veniam odio laborissum distinctio.
              </p>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}






