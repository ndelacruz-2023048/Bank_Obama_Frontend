import React, { useState } from 'react'

export const RegisterForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        username: '',
        accountNumber: '',
        DPI: '',
        address: '',
        mobilePhone: '',
        country: '',
        email: '',
        password: '',
        profilePicture: '',
        workName: '',
        monthlyIncome: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit?.(formData); // solo si se provee la función
    };
    return (
        <div className="min-h-screen bg-gray-950 text-white p-1 w-[100vw]">
        <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow"
        >
            <h2 className="text-2xl font-bold mb-6 text-white">Registrar Usuario</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
                { name: 'name', label: 'Nombre' },
                { name: 'surname', label: 'Apellido' },
                { name: 'username', label: 'Nombre de usuario' },
                { name: 'accountNumber', label: 'Número de cuenta', type: 'number' },
                { name: 'DPI', label: 'DPI', type: 'number' },
                { name: 'address', label: 'Dirección' },
                { name: 'mobilePhone', label: 'Teléfono' },
                { name: 'country', label: 'País' },
                { name: 'email', label: 'Correo', type: 'email' },
                { name: 'password', label: 'Contraseña', type: 'password' },
                { name: 'profilePicture', label: 'URL de foto' },
                { name: 'workName', label: 'Nombre del trabajo' },
                { name: 'monthlyIncome', label: 'Ingresos mensuales', type: 'number' },
            ].map(({ name, label, type = 'text' }) => (
                <div key={name}>
                <label htmlFor={name} className="block text-sm mb-1">{label}</label>
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={formData[name]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none"
                    placeholder={label}
                />
                </div>
            ))}
            </div>
            <button
                
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-semibold transition"
            >
            Registrar
            </button>
        </form>
        </div>
    );
};
