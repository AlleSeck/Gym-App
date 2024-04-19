'use client'
import { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de soumission du formulaire
    console.log(formData);
  };


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Inscription</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nom d'utilisateur</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400" />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirmez le mot de passe</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400" />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">S'inscrire</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
