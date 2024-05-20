'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const LogoutPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // delete the cookies JWT
    Cookies.remove('jwt');

    // Redirige to the login page
    router.push('/login');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-lg rounded-lg">
        <p className="text-center text-xl font-semibold text-gray-800">Vous êtes déconnecté. Redirection en cours...</p>
      </div>
    </div>
  );
};

export default LogoutPage;
