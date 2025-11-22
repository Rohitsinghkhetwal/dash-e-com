
"use client"


import  { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');


  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribing with email:', email);
      setEmail('');
    }
  };

  return (
    <div className="w-full bg-white py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
       
        <div className="relative bg-gradient-to-br from-emerald-100 via-emerald-50 to-teal-50 rounded-3xl overflow-hidden mb-8 md:mb-12">
          
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full">
              
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center p-6 md:p-12 lg:p-16">
           
            <div className="z-10">
              <h2 className="text-[1rem] md:text-[1rem] lg:text-[2rem] font-bold text-gray-800 mb-4 leading-tight">
                Stay home & get your daily<br className="hidden md:block" />
                needs from our shop
              </h2>
              <p className="text-gray-600 mb-6 md:mb-8">
                Start Your Daily Shopping with{' '}
                <span className="text-emerald-500 font-semibold">Nest Mart</span>
              </p>

             
              <div className="relative max-w-md">
                <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
                  <div className="pl-5 pr-3 py-4">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                    placeholder="Your email address"
                    className="flex-1 py-4 pr-3 outline-none text-gray-700 placeholder-gray-400"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 md:px-8 py-4 rounded-full font-semibold  whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            
            <div className="relative z-10 hidden lg:block">
              <div className="relative">
                
                <div className="relative z-10">
                  <img
                    src="./man.png"
                    alt="Delivery person"
                    className="w-full h-auto"
                  />
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;