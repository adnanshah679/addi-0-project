import React from 'react'
import Navbar from "@/app/Components/SharedComponents/Navbar"
import Header2 from "@/app/Components/SharedComponents/Header2"
import FreeDelieveryComponents from '@/app/Components/SharedComponents/FreeDelieveryComponents'
import Footer from '@/app/components/SharedComponents/Footer'
const page = () => {
    return (

        <>
            <Navbar />/
            <Header2 heading="Chekout" text="Chekout" />

            <div className="flex flex-col lg:flex-row mx-10 gap-6 mt-8">
                <div className="w-full lg:w-1/2 md:mx-20">
                    <h3 className="font-semibold text-2xl mt-10 mb-8">Billing Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block my-4">First Name</label>
                            <input type="text" id="firstName" className="w-full border border-gray-500 rounded p-3" />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block my-4">Last Name</label>
                            <input type="text" id="lastName" className="w-full border border-gray-500 rounded p-3" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="companyName" className="block my-4 mt-6">Company Name (Optional)</label>
                        <input type="text" id="companyName" className="w-full border-gray-500 rounded border p-3" />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="country" className="block my-4 mt-6">Country / Region</label>
                        <input type="text" id="country" className="w-full border-gray-500 rounded border p-3" />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="address" className="block my-4 mt-6">Street Address</label>
                        <input type="text" id="address" className="w-full border-gray-500 rounded border p-3" />
                    </div>

                    <div className="gap-4 mt-4">
                        <div>
                            <label htmlFor="town" className="block my-4 mt-6">Town / City</label>
                            <input type="text" id="town" className="w-full border-gray-500 rounded border p-3" />
                        </div>
                        <div>
                            <label htmlFor="province" className="block my-4 mt-6">Province</label>
                            <input type="text" id="province" className="w-full border-gray-500 rounded border p-3" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="zip" className="block my-4 mt-6">ZIP Code</label>
                        <input type="text" id="zip" className="w-full border-gray-500 rounded border p-3" />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="phone" className="block my-4 mt-6">Phone</label>
                        <input type="text" id="phone" className="w-full border-gray-500 rounded border p-3" />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="email" className="block my-4 mt-6">Email Address</label>
                        <input type="text" id="email" className="w-full border-gray-500 rounded border p-3" />
                    </div>

                    <div className="mt-4">
                        <input type="text" id="additionalInfo" placeholder="Additional Information" className="w-full border-gray-500 my-4 mt-6 rounded border p-3" />
                    </div>
                </div>

                {/* Order Summary */}
                <div className="w-full lg:w-1/2 md:mx-20 mt-4 lg:mt-0">
                    <div className="mt-4">
                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    <th className="py-2 text-left text-xl">Product</th>
                                    <th className="py-2 text-right text-xl">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 text-gray-500">Asgaard Sofa x 1</td>
                                    <td className="py-2 text-right">Rs: 250,000.00</td>
                                </tr>
                                <tr>
                                    <td className="py-2 font-semibold">Subtotal</td>
                                    <td className="py-2 text-right">Rs: 250,000.00</td>
                                </tr>
                                <tr className="border-b font-semibold">
                                    <td className="py-2">Total</td>
                                    <td className="py-2 text-yellow-700 text-right text-xl">Rs: 250,000.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Payment Method */}
                    <div className="flex items-center mt-4">
                        <input type="radio" id="bankTransfer" name="payment" className="mr-2" />
                        <label htmlFor="bankTransfer" className="text-md">Direct Bank Transfer</label>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at arcu at eros malesuada facilisis.</p>

                    <div className="flex items-center mt-4 text-gray-400">
                        <input type="radio" id="cod" name="payment" className="mr-2" />
                        <label htmlFor="cod" className="text-md">Cash On Delivery</label>
                    </div>
                    <p className="text-sm text-gray-600 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at arcu at eros malesuada facilisis.</p>

                    <button className="mt-6 border border-black py-3 px-14 rounded-xl">Place Order</button>
                </div>
            </div>


            <FreeDelieveryComponents />
            <Footer />

        </>
    )
}

export default page