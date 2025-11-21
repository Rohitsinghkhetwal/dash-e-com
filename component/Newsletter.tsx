
"use client"


import React, { useState } from 'react';
import { Mail, DollarSign, Truck, Tag, Package, RotateCcw } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: <DollarSign className="w-8 h-8 text-emerald-600" />,
      title: 'Best prices & offers',
      description: 'Orders $50 or more'
    },
    {
      icon: <Truck className="w-8 h-8 text-emerald-600" />,
      title: 'Free delivery',
      description: '24/7 amazing services'
    },
    {
      icon: <Tag className="w-8 h-8 text-emerald-600" />,
      title: 'Great daily deal',
      description: 'When you sign up'
    },
    {
      icon: <Package className="w-8 h-8 text-emerald-600" />,
      title: 'Wide assortment',
      description: 'Mega Discounts'
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-emerald-600" />,
      title: 'Easy returns',
      description: 'Within 30 days'
    }
  ];

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribing with email:', email);
      setEmail('');
    }
  };

  return (
    <div className="w-full bg-white py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="relative bg-gradient-to-br from-emerald-100 via-emerald-50 to-teal-50 rounded-3xl overflow-hidden mb-8 md:mb-12">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full">
              {/* <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs> */}
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16">
            {/* Left Content */}
            <div className="z-10">
              <h2 className="text-[1rem] md:text-[1rem] lg:text-[2rem] font-bold text-gray-800 mb-4 leading-tight">
                Stay home & get your daily<br className="hidden md:block" />
                needs from our shop
              </h2>
              <p className="text-gray-600 mb-6 md:mb-8">
                Start Your Daily Shopping with{' '}
                <span className="text-emerald-500 font-semibold">Nest Mart</span>
              </p>

              {/* Email Subscription */}
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

            {/* Right Image */}
            <div className="relative z-10 hidden lg:block">
              <div className="relative">
                {/* Main delivery person image placeholder */}
                <div className="relative z-10">
                  <img
                    src="./man.png"
                    alt="Delivery person"
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Floating vegetables - positioned absolutely */}
                {/* <div className="absolute top-10 left-10 animate-float">
                  <div className="bg-white rounded-full p-3 shadow-xl">
                    <div className="w-16 h-16 bg-green-100 rounded-full"></div>
                  </div>
                </div>
                
                <div className="absolute top-20 right-20 animate-float-delayed">
                  <div className="bg-white rounded-full p-3 shadow-xl">
                    <div className="w-20 h-20 bg-red-100 rounded-full"></div>
                  </div>
                </div>

                <div className="absolute bottom-32 left-0 animate-float-slow">
                  <div className="bg-white rounded-full p-2 shadow-xl">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full"></div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-4 md:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-emerald-50 w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                {feature.icon}
              </div>
              <h3 className="text-sm md:text-base font-bold text-gray-800 mb-1 md:mb-2">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div> */}
      </div>

      {/* <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style> */}
    </div>
  );
};

export default Newsletter;