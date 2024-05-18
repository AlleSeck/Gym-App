'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface FormData {
  firstname: string;
  lastname: string;
  birthdate: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  phone: string;
  termsAccepted: boolean;
}

const Register = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    birthdate: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    phone: '',
    termsAccepted: false
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Envoyer les données au serveur
      const response = await axios.post('http://localhost:3001/api/users', formData);
      console.log('User registered successfully:', response.data);
    } catch (error) {
      console.error('There was an error registering the user:', error);
      //setError(error.response?.data?.message || error.message || 'An error occurred');

    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Inscription</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">Prénom</label>
            <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Nom</label>
            <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">Date de naissance</label>
            <input type="date" id="birthdate" name="birthdate" value={formData.birthdate} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-700">Confirmez l&apos;adresse e-mail</label>
            <input type="email" id="confirmEmail" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirmez le mot de passe</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Téléphone (optionnel)</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-400 w-full" />
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="termsAccepted" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <label htmlFor="termsAccepted" className="ml-2 block text-sm text-gray-900">J&apos;accepte les conditions générales</label>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 w-full">S&apos;inscrire</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
