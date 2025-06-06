import React from 'react'

export const DepositsBankTemplate = () => {
  return (
    <div className="flex flex-col h-screen w-4/5 bg-[#121721] p-6 absolute">
      <h1 className="text-[#FFFFFF] text-2xl font-bold mb-10">Deposits Bank</h1>
      <p className="text-[#FFFFFF] text-[18px] font-bold mb-6">Informacion de deposito.</p>

      <div className="flex flex-col">
        <form action="">
          <div className="grid grid-cols-2 gap-4 mb-4">
            
            <div>
              <label className="block text-[#FFFFFF] text-sm font-bold mb-2" htmlFor="name">
                De la cuenta
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border-2 rounded-[24px] border-[#334A66] w-full py-2 px-5 text-[#ffffff] leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Nombre del Deposito"
              />
            </div>

            <div>
              <label className="block text-[#FFFFFF] text-sm font-bold mb-2" htmlFor="name">
                A la cuenta
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border-2 rounded-[24px] border-[#334A66] w-full py-2 px-5 text-[#ffffff] leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Nombre del Deposito"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[#FFFFFF] text-sm font-bold mb-2" htmlFor="name">
                Nombre del Deposito
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border-2 rounded-[24px] border-[#334A66] w-full py-2 px-5 text-[#ffffff] leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Nombre del Deposito"
              />
            </div>

            <div>
              <label className="block text-[#FFFFFF] text-sm font-bold mb-2" htmlFor="description">
                Descripción del Deposito
              </label>
              <input
                type="text"
                id="description"
                name="description"
                className="shadow appearance-none border-2 rounded-[24px] border-[#334A66] w-full py-2 px-5 text-[#ffffff] leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Ingrese una descripción"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[#FFFFFF] text-sm font-bold mb-2" htmlFor="amount">
                Monto a Depositar
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                className="shadow appearance-none border-2 rounded-[24px] border-[#334A66] w-full py-2 px-5 text-[#ffffff] leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Ingrese el monto"
              />
            </div>

            <div>
              <label className="block text-[#FFFFFF] text-sm font-bold mb-2" htmlFor="date">
                Fecha del Deposito
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="shadow appearance-none border-2 rounded-[24px] border-[#334A66] w-full py-2 px-5 text-[#ffffff] leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Ingrese la fecha"
              />
            </div>
          </div>
          
          <div className="mb-4 w-2/5 mx-auto">
            <label className="block text-[#FFFFFF] text-sm font-bold mb-2" htmlFor="type">
              Tipo de Deposito
            </label>
            <select
              id="type"
              name="type"
              className="shadow appearance-none border-2 rounded-[24px] border-[#334A66] w-full py-2 px-5 text-[#ffffff] leading-tight focus:outline-none focus:shadow-outline"
              defaultValue="Seleccione un tipo"
            >
              <option className='text-black' value="Seleccione un tipo" disabled>Seleccione un tipo</option>
              <option className='text-black' value="efectivo">Efectivo</option>
              <option className='text-black' value="transferencia">Transferencia</option>
              <option className='text-black' value="cheque">Cheque</option>
            </select>
          </div>


          <div className="grid grid-cols-2 ">
          <button
            type="submit"
            className="bg-[#1270EB] hover:bg-[#1270ebea] text-[#ffffff] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  mx-auto mt-6"
          >
            Depositar
          </button>
          <button
            type="submit"
            className="bg-[#eb1212] hover:bg-[#eb122fd5] text-[#ffffff] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline   mx-auto mt-6"
          >
            Cancelar
          </button>
          </div>
          
        </form>
      </div>
    </div>
  )
}