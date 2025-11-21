
"use client"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { ShoppingCart, Star } from "lucide-react"


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

// const products: Product[] = [
//   {
//     id: 1,
//     name: "Fresh organic villa farm lemon 500gm pack",
//     category: "Fruits",
//     brand: "NestFood",
//     price: 28.85,
//     originalPrice: 33.8,
//     rating: 4,
//     image: "/fresh-organic-lemon.jpg",
//     badge: "Hot",
//     badgeColor: "bg-pink-500",
//   },
//   {
//     id: 2,
//     name: "Best apples with hazel nut pack 200gm",
//     category: "Fruits",
//     brand: "Snaffler",
//     price: 52.85,
//     originalPrice: 55.8,
//     rating: 4,
//     image: "/best-apples-hazel-nuts.jpg",
//     badge: "Sale",
//     badgeColor: "bg-blue-500",
//   },
//   {
//     id: 3,
//     name: "Organic fresh vanilla farm watermelon 5kg",
//     category: "Fruits",
//     brand: "StartKit",
//     price: 48.85,
//     originalPrice: 52.8,
//     rating: 5,
//     image: "/organic-watermelon-fresh.jpg",
//     badge: "New",
//     badgeColor: "bg-green-500",
//   },
//   {
//     id: 4,
//     name: "Fresh organic apple ikg simla marming",
//     category: "Fruits",
//     brand: "NestFood",
//     price: 17.85,
//     originalPrice: 19.8,
//     rating: 5,
//     image: "/fresh-organic-apples-red.jpg",
//     badge: "Sale",
//     badgeColor: "bg-red-500",
//   },
//   {
//     id: 5,
//     name: "Blue Diamond Almonds Lightly Salted Vegetables",
//     category: "Vegetables",
//     brand: "NestFood",
//     price: 23.85,
//     originalPrice: 25.8,
//     rating: 4,
//     image: "/blue-diamond-almonds.jpg",
//     badge: "Sale",
//     badgeColor: "bg-orange-500",
//   },
//   {
//     id: 6,
//     name: "Chobani Complete Vanilla Greek Yogurt",
//     category: "Milks & Dairies",
//     brand: "NestFood",
//     price: 54.85,
//     originalPrice: 55.8,
//     rating: 5,
//     image: "/yogurt-greek-vanilla-chobani.jpg",
//     badge: "Sale",
//     badgeColor: "bg-red-500",
//   },
//   {
//     id: 7,
//     name: "Canada Dry Ginger Ale - 2 L Bottle - 200ml - 400g",
//     category: "Coffees & Teas",
//     brand: "NestFood",
//     price: 32.85,
//     originalPrice: 33.8,
//     rating: 4,
//     image: "/canada-dry-ginger-ale-bottle.jpg",
//     badge: "Sale",
//     badgeColor: "bg-blue-500",
//   },
//   {
//     id: 8,
//     name: "Encore Seafoods Stuffed Alaskan Salmon",
//     category: "Meats",
//     brand: "NestFood",
//     price: 35.85,
//     originalPrice: 37.8,
//     rating: 4,
//     image: "/salmon-seafood-alaskan.jpg",
//     badge: "Sale",
//     badgeColor: "bg-yellow-400",
//   },
//   {
//     id: 9,
//     name: "Gorton's Beer Battered Fish Fillets with soft paper",
//     category: "Meats",
//     brand: "Old El Paso",
//     price: 23.85,
//     originalPrice: 25.8,
//     rating: 5,
//     image: "/fish-fillets-beer-battered-gorton.jpg",
//     badge: "New",
//     badgeColor: "bg-green-500",
//   },
//   {
//     id: 10,
//     name: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
//     category: "Milks & Dairies",
//     brand: "Tyson",
//     price: 22.85,
//     originalPrice: 24.8,
//     rating: 4,
//     image: "/haagen-dazs-caramel-ice-cream.jpg",
//     badge: "Sale",
//     badgeColor: "bg-yellow-400",
//   },
// ]

export default function PopularProducts({data}: {data: Product[]}) {
  // console.log("Data -----", data)
  const [activeCategory, setActiveCategory] = useState("All")
  const router = useRouter();


  const gotoProductPage = (id: number) => {
    router.push(`/product-details/${id}`)
  }

  // const filteredProducts = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory)

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

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
        {data?.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            onClick={() => gotoProductPage(product.id)}
          >
            {/* Image Container */}
            <div className="flex items-center justify-center">
               <img
                src={product.image_url}
                alt="img"
                className="max-h-full max-w-full object-contain"
              />

            </div>
             

            

            {/* Content */}
            <div className="py-2 px-4 ">
              {/* Category */}
              {/* <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">{product.category}</p> */}

              {/* Product Name */}
              <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1">{product.name}</h3>

              {/* Rating */}
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

              {/* Brand */}
              <p className="text-xs text-teal-600 font-medium mb-2">By {product.brand}</p>

              {/* Price */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div>
                <span className="text-lg font-bold text-gray-900">${product.price}</span>
                <span className="text-sm text-gray-400 line-through">${product.old_price}</span>
                </div>
                <div>
                    <button className="w-full px-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md text-sm font-semibold flex items-center justify-center gap-2 transition-colors">
                <ShoppingCart size={16} />
                Add
              </button>

                </div>
                
              
              </div>

              {/* Add Button */}
              
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
