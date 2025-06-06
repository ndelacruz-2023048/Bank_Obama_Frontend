import React from 'react';

export const TransactionBankForm = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gray-900 text-white p-1">  
      {/* Form */}
      <div className="max-w-md mx-auto mt-12 p-6 bg-gray-900">
        <h2 className="text-2xl font-semibold mb-6">Make a Transfer</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">From Account</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none"
              placeholder="Account name or number"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">To Account</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none"
              placeholder="Recipient account"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Amount</label>
            <input
              type="number"
              step="0.01"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none"
              placeholder="0.00"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Concept</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none"
              placeholder="Enter concept"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-semibold transition"
          >
            Confirm Transfer
          </button>
        </form>
      </div>
    </div>
  );
};
