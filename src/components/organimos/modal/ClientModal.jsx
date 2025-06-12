import React from 'react'

export const ClientModal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="https://via.placeholder.com/64" // Imagen de perfil
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold">Amélie Laurent</h2>
            <p className="text-sm text-gray-500">amelie@untitledui.com</p>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex justify-between mb-4">
          <button className="text-sm text-gray-600 hover:text-gray-900 underline">Copy link</button>
          <button className="text-sm text-blue-600 hover:underline">View profile</button>
        </div>

        {/* Formulario */}
        <form className="space-y-4">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Name"
              defaultValue="Amélie"
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Surname"
              defaultValue="Laurent"
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email address</label>
            <div className="relative">
              <input
                type="email"
                defaultValue="amelie@untitledui.com"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">@</span>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Username</label>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 bg-gray-100 px-3 py-2 rounded-md">untitledui.com/</span>
              <input
                type="text"
                defaultValue="amelie"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
              <span className="text-blue-500 text-xl">✔️</span>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Profile photo</label>
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/48"
                alt="Profile Preview"
                className="w-12 h-12 rounded-full object-cover"
              />
              <button
                type="button"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                Click to replace
              </button>
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6">
          <button className="bg-[#ffe3e3] m-4 p-[5px] text-red-600 hover:text-red-700 text-sm">🗑️ Delete user</button>
          <div className="space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm text-[#000000] hover:bg-gray-100">
              Cancel
            </button>
            <button className="px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}