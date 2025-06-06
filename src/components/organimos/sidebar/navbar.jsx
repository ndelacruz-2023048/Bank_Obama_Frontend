import React from "react";

export const NavBar =()=>{
    return(
        <dir>
            {/* Navbar */}
        <nav className="bg-gray-950 px-6 py-4 flex justify-between items-center border-b border-gray-800">
            <div className="text-white font-semibold text-lg">MoneyWise</div>
            <ul className="flex space-x-6 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">Overview</li>
            <li className="hover:text-white cursor-pointer">Accounts</li>
            <li className="hover:text-white cursor-pointer">Transfers</li>
            <li className="hover:text-white cursor-pointer">Payments</li>
            <li className="hover:text-white cursor-pointer">Cards</li>
            <li className="hover:text-white cursor-pointer">Investments</li>
            </ul>
            <div className="flex items-center space-x-4">
            <button className="w-8 h-8 rounded-full bg-gray-800 grid place-content-center text-gray-400">
                🔔
            </button>
            <img
                src="https://i.pravatar.cc/30"
                alt="Profile"
                className="w-8 h-8 rounded-full"
            />
            </div>
        </nav>
            </dir>
        )
}