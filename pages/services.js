import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-8 bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">Oferta doradztwa</h1>
        <ul className="list-disc pl-6">
          <li>Wsparcie w zakładaniu działalności</li>
          <li>Strategie pozyskiwania pierwszych klientów</li>
          <li>Porady zawodowe dla osób wchodzących na rynek pracy</li>
          <li>Szkolenia i webinary edukacyjne</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}