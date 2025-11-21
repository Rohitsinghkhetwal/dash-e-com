"use client";

import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { useStore } from "@/store/Store";
import axios from "axios";

function CheckoutPage() {
  const { items, removeFromCart } = useStore();
  // console.log("ITEMS FROM ZUSTAND STORE ", items);
  const [deliveryMethod, setDeliveryMethod] = useState("free");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  // console.log("this is the payment ", paymentMethod)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [address, setAddress] = useState("")
  const [city, setcity] = useState("")
  const [postCode, setPostCode] = useState("")
  const [regien, setRegien] = useState("")
  const [country , setCountry] = useState("")

  const sendOtp = async () => {
    try {
        await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/send-otp`,
        {
          email: email,
        }
      );
      
    } catch (err) {
      console.log("Something went wrong !",err);
    }
  };


  const verifyOtp = async () => {
    try {
       await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/verify`,{
        email:email,
        otp: otp
      })

      localStorage.setItem("mail", email)


    }catch(err) {
      console.log("Something went wrong while verifying ", err)

    }
  }


    const handleVerify = () => {
    if (!email) {
      alert("Please Email first");
      return;
    }

    if(!otp) {
      sendOtp();
      setShowOtp(true);
      alert("Otp Sent , Check your mail")
    }else {
      verifyOtp()
      alert("Otp Verification started .")
    }

  };

  const Total = items.reduce((sum, item) => {
    const price = parseFloat(item.price);
    return sum + price;
  }, 0);


  const placeOrder = async () => {
    try {
      const mail = localStorage.getItem("mail")
      if( !firstName || !lastName || !address || !city || !regien || !postCode) {
        alert("Please fill all the fields");
        return;
      }
        await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/place-order`, {
        email:mail,
        firstName: firstName,
        lastName:lastName,
        address: address,
        city: city,
        country: country,
        paymentMethod:paymentMethod,
        items: items,
        postCode: postCode,
        regionState: regien
      })

      
      // console.log("result", res)
      alert("Order Placed Success !")
      // console.log("This is the result", result)

    }catch(err) {
      console.log("Something went wrong while placing order ", err)
      if(err.response.data.error === "Email not verified") {
        alert("Email Not verified")
      }
      
    }finally {
      localStorage.removeItem("mail")
      localStorage.removeItem("cart-storage")
    }

  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl md:mx-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-gray-700">
                  <span>Sub-Total</span>
                  <span className="font-semibold">${Total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-700">
                  <span>Delivery Charges</span>
                  <span className="font-semibold">$ 0 </span>
                </div>
              </div>

              
              <div className="border-t border-gray-300 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">
                    Total Amount
                  </span>
                  <span className="text-xl font-bold text-gray-900">
                    $ {Total.toFixed(2)}
                  </span>
                </div>
              </div>

             
              {items.length > 0 ? (
                <div className="space-y-4 md:h-[240px] md:overflow-y-scroll">
                  {items.map((product) => (
                    <div key={product.id} className="flex gap-4">
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-16 h-16 rounded object-cover bg-gray-200"
                      />
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900 mb-1">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={
                                i < Math.floor(product.rating)
                                  ? "fill-orange-400 text-orange-400"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                        <button
                          className="bg-[#E7000B] text-[0.8rem] text-white px-1 rounded-md cursor-pointer"
                          onClick={() => {
                            removeFromCart(product.id)
                            alert("Item Removed Success !")
                          }}
                        >
                          Remove
                        </button>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-teal-600">
                            $ {product.price}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            $ {product.old_price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  {" "}
                  <h3 className="text-gray-400 text-[1rem]">
                    Cart is Empty
                  </h3>{" "}
                </div>
              )}
            </div>

           
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Delivery Method
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Please select the preferred shipping method to use on this
                order.
              </p>

              <div className="space-y-3 flex flex-col md:flex-row">
                <div className="">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="delivery"
                      value="free"
                      checked={deliveryMethod === "free"}
                      onChange={(e) => setDeliveryMethod(e.target.value)}
                      className="w-4 h-4 text-red-500"
                    />
                    <span className="text-sm text-gray-700">
                      Free Shipping -{" "}
                      <span className="font-semibold">Rate - $0.00</span>
                    </span>
                  </label>
                </div>

                <div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="delivery"
                      value="flat"
                      checked={deliveryMethod === "flat"}
                      onChange={(e) => setDeliveryMethod(e.target.value)}
                      className="w-4 h-4 text-red-500"
                    />
                    <span className="text-sm text-gray-700">
                      Flat Rate -{" "}
                      <span className="font-semibold">Rate - $3.00</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>

           
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Payment Method
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Please select the preferred payment method to use on this order.
              </p>

              <div className="space-y-3 mb-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-red-500"
                  />
                  <span className="text-sm text-gray-700">
                    Cash On Delivery
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={paymentMethod === "upi"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-red-500"
                  />
                  <span className="text-sm text-gray-700">UPI</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="transfer"
                    checked={paymentMethod === "transfer"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-red-500"
                  />
                  <span className="text-sm text-gray-700">Bank Transfer</span>
                </label>
              </div>

              {/* Payment Method Icons */}
              <div className="pt-6 border-t border-gray-300">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  Payment Method
                </h3>
                <div className="">
                  <img
                    src="./pmt.png"
                    alt="img"
                    className="w-full h-10 rounded object-contain"
                  />
                </div>

              </div>
            </div>
          </div>

         
          <div className="lg:col-span-2 space-y-6">
           
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Customer</h2>

              {/* Checkout Options */}
              <div className="mb-2 pb-2 border-b border-gray-300">
                <p className="text-sm font-semibold text-gray-700 mb-3">
                  Checkout Options
                </p>
              </div>

              {/* Returning Customer */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-4">
                  Returning Customer
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  {showOtp && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        OTP
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  )}

                  <div className="flex justify-center">
                    <button className="w-fit bg-red-500 hover:bg-red-600 text-white text-[0.8rem] font-semibold py-2 px-4 rounded-md " onClick={handleVerify}>
                      {showOtp ? "Submit OTP" : "Verify"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

           
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Billing Details
              </h2>

              <div className="mb-4 pb-4 border-b border-gray-300">
                <p className="text-sm font-semibold text-gray-700">
                  Checkout Options
                </p>
              </div>

              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-2 border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>

              
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Address
                </h3>
                <input
                  type="text"
                  placeholder="Address Line 1"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm mb-3"
                />
              </div>

             
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

                <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  City
                </h3>
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setcity(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm mb-3"
                />
              </div>



                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Post Code
                  </label>
                  <input
                    type="text"
                    placeholder="Post Code"
                    value={postCode}
                    onChange={(e) => setPostCode(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm appearance-none bg-white"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}

                    >
                      <option>India</option>
                      <option>USA</option>
                      <option>China</option>
                      <option>UAE</option>
                      <option>Canada</option>
                      <option>Japan</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-600 pointer-events-none" />
                  </div>
                </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Region/State
                  </label>
                  <input
                    type="text"
                    placeholder="Post Code"
                    value={regien}
                    onChange={(e) => setRegien(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="w-fit bg-red-500 hover:bg-red-600 text-white text-[0.8rem] font-semibold py-3 px-4 rounded-md" onClick={placeOrder}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
