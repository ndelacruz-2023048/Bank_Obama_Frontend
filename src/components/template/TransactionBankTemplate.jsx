import React from 'react';

export const TransactionBankTemplate = () => {
  return (
    <div className="min-h-screen min-w-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Transactions</h1>
      <p className="text-gray-400 mb-6">Vee y maneja tus transacciones recientes.</p>

      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search transactions"
          className="w-full md:w-1/2 p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none"
        />
      </div>
    
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        <select className="bg-gray-800 px-4 py-2 text-white rounded-md border border-gray-700 text-sm"> <option value="value1" selected>Fecha</option></select>
        <select className="bg-gray-800 px-4 py-2 rounded-md border border-gray-700 text-sm"><option value="value1" selected>Tipo de Trensacción</option></select>
        <select className="bg-gray-800 px-4 py-2 rounded-md border border-gray-700 text-sm"><option value="value1" selected>Monto</option></select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-3 text-sm text-gray-400">Date</th>
              <th className="p-3 text-sm text-gray-400">Description</th>
              <th className="p-3 text-sm text-gray-400">Amount</th>
              <th className="p-3 text-sm text-gray-400">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-800 hover:bg-gray-800 transition">
              <td className="p-3 text-sm">2024-07-26</td>
              <td className="p-3 text-sm">Grocery shopping at SuperMart</td>
              <td className="p-3 text-sm text-red-400">-$75.50</td>
              <td className="p-3 text-sm">
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Debit</span>
              </td>
            </tr>
            {/* Puedes agregar más filas aquí según sea necesario */}
          </tbody>
        </table>
      </div>
    </div>
  );
};
