import React from 'react'
import Image from 'next/image'
import { RiDeleteBin6Line } from 'react-icons/ri';

import Footer from '@/app/components/SharedComponents/Footer'
import Navbar from "@/app/Components/SharedComponents/Navbar"
import Header2 from "@/app/Components/SharedComponents/Header2"


function CartView() {
    return (

        <>
            <Navbar />
            <Header2 heading="Chekout" text="Chekout" />

            <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
              
                {/* Cart Table Section */}
                <div className="mt-8 flex flex-col lg:flex-row justify-between md:gap-8">
                    {/* Cart Items */}
                    <div className="w-full lg:w-3/4 bg-white rounded-lg p-4 sm:p-6">
                        <table className="w-full text-xs md:text-lg table-auto border-collapse">
                            <thead className="bg-[#FFF9E5] text-gray-800">
                                <tr>
                                    <th className="py-3 text-left">Product</th>
                                    <th className="py-3 text-left hidden lg:table-cell">Price</th> {/* Hidden on small devices, visible on large */}
                                    <th className="py-3 text-left">Quantity</th>
                                    <th className="py-3 text-left">Subtotal</th>
                                    <th className="py-3 text-left"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="flex flex-col md:flex-row items-center py-4">
                                        <Image
                                            src='/product.png'
                                            height={120}
                                            width={120}
                                            alt="Asgaard Sofa"
                                        />
                                        <p className="ml-4 text-gray-700 text-sm sm:text-base">Asgaard Sofa <br /> x 1</p>
                                    </td>
                                    <td className="py-4 text-xs md:text-lg text-gray-500 hidden lg:table-cell">Rs: 250,000.00</td> {/* Hidden on small devices, visible on large */}
                                    <td className="py-4 text-xs md:text-lg text-gray-500">
                                        <input type="number" value="1" className="w-12 text-xs md:text-lg text-center border md:p-2 rounded-md" />
                                    </td>
                                    <td className="py-4 text-right text-gray-700 text-xs md:text-sm sm:text-base">Rs: 250,000.00</td>
                                    <td className="py-4 text-center">
                                        <RiDeleteBin6Line className="hidden lg:table-cell text-red-600 ml-4 cursor-pointer hover:text-red-800" size={20} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>



                    {/* Cart Totals Section */}
                    <div className="w-full lg:w-2/6 bg-[#FFF9E5] rounded-md p-10 mt-8 lg:mt-0">
                        <h2 className="text-2xl font-semibold mb-4 text-center">Cart Totals</h2>
                        <table className="w-full table-auto border-collapse">
                            <thead>
                                <tr>
                                    <th className="py-3 text-left">Subtotal</th>
                                    <th className="py-3 text-right text-gray-400">Rs: 250,000.00</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-3 text-left font-bold">Total</td>
                                    <td className="py-3 text-right text-lg font-bold text-yellow-700">Rs: 250,000.00</td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="py-4">
                                        <button className="w-full px-6 py-3 border border-black rounded-xl">
                                            Checkout
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='my-10'>
                    <Footer />
                </div>
            </div>

        </>)
}

export default CartView;