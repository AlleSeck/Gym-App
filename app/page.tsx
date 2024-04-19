'use client'
import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté
    const userLoggedIn = true; // À remplacer par votre logique d'authentification

    // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
    if (!userLoggedIn) {
      router.push('/login'); // Rediriger vers la page de connexion
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Head />

      <div className="flex-grow">
        <main className="container mx-auto py-8">
          <Nav />
          <h2 className="text-2xl font-bold">Contenu principal</h2>
        </main>
      </div>

      <Footer />
    </div>
  );
}
