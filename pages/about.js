import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-8 bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">O mnie</h1>
        <p>Jestem doradcą dla początkujących przedsiębiorców i osób wchodzących na rynek pracy. Pomagam w zakładaniu działalności, zdobywaniu pierwszych klientów oraz rozwijaniu kariery.</p>
      </main>
      <Footer />
    </div>
  );
}