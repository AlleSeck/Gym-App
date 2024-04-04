import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';

export default function Home() {
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
