'use client'
import Head from './components/Head';
import Footer from './components/Footer';
import LoginPage from './login/page';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Récupérer le token JWT du cookie
    const token = Cookies.get('token');

    // Vérifier si le token existe et est valide
    if (!token) {
      // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="flex flex-col min-h-screen">
      <Head />

      <div className="flex-grow">
        <main className="container mx-auto py-8">
          <LoginPage/>
        </main>
      </div>

      <Footer />
    </div>
  );
}
