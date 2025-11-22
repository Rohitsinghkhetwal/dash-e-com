import Link from "next/link"
import { Mail, MapPin, Phone, Facebook, Twitter, Tornado as Threads, Instagram, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
         
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🍕</span>
                
              </div>
              <h3 className="text-lg font-bold text-gray-900">Foodzy</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">A Treasure of Tastes</p>
            <p className="text-sm text-gray-600 mb-6">
              FoodTrove is the biggest market of grocery products. Get your daily needs from our store.
            </p>

            
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-xs text-gray-600">
                  51 Green St Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <a href="mailto:example@email.com" className="text-xs text-gray-600 hover:text-orange-500">
                  example@email.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <a href="tel:+911234567890" className="text-xs text-gray-600 hover:text-orange-500">
                  +91 123 4567890
                </a>
              </div>
            </div>
          </div>

          
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Company</h4>
            <nav className="space-y-3">
              <div>
                <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </div>
              <div>
                <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  Delivery Information
                </Link>
              </div>
              <div>
                <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  Privacy Policy
                </Link>
              </div>
              <div>
                <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  Terms & Conditions
                </Link>
              </div>
              <div>
                <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  contact Us
                </Link>
              </div>
              <div>
                <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  Support Center
                </Link>
              </div>
            </nav>
          </div>

         
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Category</h4>
            <nav className="space-y-3">
              <div>
                <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  Dairy & Bakery
                </Link>
              </div>
              <div>
                <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  Fruits & Vegetable
                </Link>
              </div>
              <div>
                <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  Snack & Spice
                </Link>
              </div>
              <div>
                <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  Juice & Drinks
                </Link>
              </div>
              <div>
                <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  Chicken & Meat
                </Link>
              </div>
              <div>
                <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                  Fast Food
                </Link>
              </div>
            </nav>
          </div>

          
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Subscribe Our Newsletter</h4>
            <div className="space-y-4">
            
              <div className="relative">
                <input
                  type="email"
                  placeholder="Search here..."
                  className="w-full px-4 py-2 pr-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-orange-500 hover:text-orange-600">
                  <Send className="w-4 h-4" />
                </button>
              </div>

              
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                  <Threads className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>

             
              <div className="grid grid-cols-5 gap-2">
                <img
                  src="/1.jpg"
                  alt="Food 1"
                  className="w-full aspect-square object-cover rounded"
                />
                <img
                  src="/2.jpg"
                  alt="Food 2"
                  className="w-full aspect-square object-cover rounded"
                />
                <img
                  src="/3.jpg"
                  alt="Food 3"
                  className="w-full aspect-square object-cover rounded"
                />
                <img
                  src="./4.jpg"
                  alt="Food 4"
                  className="w-full aspect-square object-cover rounded"
                />
               
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-600">
            © 2025 <span className="font-bold text-orange-500">foodzy</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
