import React from 'react'

export const ProfileTemplate = () => {
  return (
    <div className="min-h-screen w-[80vw] bg-[#121721] text-white flex justify-center items-start p-6">
      <div className="w-full max-w-2xl p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Información personal</h2>

        <div className="mb-6">
          <h3 className="font-semibold mb-4">Información de contacto</h3>
          <div className="space-y-4">
            <input type="text" placeholder="Nombre" className="w-full px-4 py-2 bg-[#192633] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[15px]" />
            <input type="text" placeholder="Dirección" className="w-full px-4 py-2 bg-[#192633] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[15px]" />
            <input type="text" placeholder="Nombre de Trabajo" className="w-full px-4 py-2 bg-[#192633] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[15px]" />
            <input type="number" placeholder="Ingresos Mensauales" className="w-full px-4 py-2 bg-[#192633] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[15px]" />
          </div>
        </div>

        <div className="text-right">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  )
}