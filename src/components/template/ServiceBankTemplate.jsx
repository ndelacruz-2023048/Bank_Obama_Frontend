
import React from 'react'

export const ServiceBankTemplate = () => {
  return (
    <div className="min-h-screen min-w-screen bg-[#0e1117] text-white">
      {/* Navbar */}
      <nav className="bg-[#0f141c] px-6 py-4 flex items-center justify-between border-b border-gray-800">
        <div className="text-lg font-semibold">🔒 SecureBank</div>
        <div className="flex space-x-20 text-sm">
          <a href="#" className="hover:text-blue-400">Dashboard</a>
          <a href="#" className="hover:text-blue-400">Customers</a>
          <a href="#" className="hover:text-blue-400">Accounts</a>
          <a href="#" className="hover:text-blue-400">Transactions</a>
          <a href="#" className="hover:text-blue-400">Cards</a>
          <a href="#" className="hover:text-blue-400">Loans</a>
          <div className="w-6 h-6 rounded-full bg-gray-500"></div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto mt-16 px-4">
        <h1 className="text-2xl font-semibold mb-8">Add New Service</h1>

        <form className="space-y-6">
          {/* Service Name */}
          <div>
            <label className="block mb-1 text-sm">Service Name</label>
            <input
              type="text"
              placeholder="Enter"
              className="w-full bg-[#1a1f2b] text-white placeholder-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Service Description */}
          <div>
            <label className="block mb-1 text-sm">Service Description</label>
            <textarea
              rows="4"
              placeholder=""
              className="w-full bg-[#1a1f2b] text-white placeholder-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Service Fee */}
          <div>
            <label className="block mb-1 text-sm">Service Fee</label>
            <input
              type="text"
              placeholder="Enter"
              className="w-full bg-[#1a1f2b] text-white placeholder-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Terms and Conditions */}
          <div>
            <label className="block mb-1 text-sm">Terms and Conditions</label>
            <textarea
              rows="4"
              placeholder=""
              className="w-full bg-[#1a1f2b] text-white placeholder-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow"
            >
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
