'use client';

import React from 'react';
import Header from '../components/Head';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex-grow container mx-auto py-8 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Tableau de bord</h1>
          <p className="text-gray-700">Bienvenue dans votre tableau de bord.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
