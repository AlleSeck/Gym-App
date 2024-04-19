'use client'
import { useState } from 'react';
import Link from 'next/link';

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e :any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e :any) => {
    e.preventDefault();
    // Ajoutez ici la logique de soumission du formulaire
    console.log(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Mot de passe oublié</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Adresse e-mail</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Adresse e-mail" value={email} onChange={handleChange} />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Retour à la connexion
              </Link>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M2 5a3 3 0 013-3h10a3 3 0 013 3v7a3 3 0 01-3 3H5a3 3 0 01-3-3V5zm3-2a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M4 10V8a1 1 0 011-1h10a1 1 0 011 1v2h1a1 1 0 011 1v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a1 1 0 011-1hzm3 0a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </span>
              Envoyer la demande de réinitialisation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
