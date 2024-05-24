'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Head';
import Footer from '../components/Footer';

const Dashboard = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow bg-gray-100 p-4">
        <main className="container mx-auto py-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
            <p className="text-gray-700 mb-4">Welcome to the admin dashboard. Here you can manage clients and monitor their subscription and QR code status.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Members Management */}
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Members</h2>
                <p className="text-gray-700 mb-4">View and manage gym members.</p>
                <button
                  onClick={() => router.push('/members')}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  View Members
                </button>
              </div>

              {/* Subscriptions Management */}
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Subscriptions</h2>
                <p className="text-gray-700 mb-4">Manage membership subscriptions.</p>
                <button
                  onClick={() => router.push('/subscriptions')}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  Manage Subscriptions
                </button>
              </div>

              {/* Classes and Instructors Management */}
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Classes & Instructors</h2>
                <p className="text-gray-700 mb-4">View and manage gym classes and instructors.</p>
                <button
                  onClick={() => router.push('/classes')}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  View Classes
                </button>
              </div>

              {/* Financial Reports */}
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Financial Reports</h2>
                <p className="text-gray-700 mb-4">Generate and view financial reports.</p>
                <button
                  onClick={() => router.push('/reports')}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  View Reports
                </button>
              </div>

              {/* Notifications */}
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Communication</h2>
                <p className="text-gray-700 mb-4">Notifications(Email/SMS).</p>
                <button
                  onClick={() => router.push('/notifications')}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                  View Notifications
                </button>
              </div>

              {/* Security and Access */}
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Security and Access</h2>
                <p className="text-gray-700 mb-4">Access control/Video surveillance/Emergency Management.</p>
                <button
                  onClick={() => router.push('/security')}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                 Security 
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
