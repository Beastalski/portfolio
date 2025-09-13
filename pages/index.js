import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-8 bg-gray-50">
        <h1 className="text-4xl font-bold mb-4">Witaj w moim portfolio!</h1>
        <p className="mb-6">Doradztwo dla początkujących przedsiębiorców i osób wchodzących na rynek pracy.</p>
        <h2 className="text-2xl font-semibold mb-4">Przykładowe webinary:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Webinar 1" description="Wprowadzenie do biznesu" />
          <Card title="Webinar 2" description="Jak znaleźć pierwszego klienta" />
          <Card title="Webinar 3" description="Skuteczne CV i rozmowa kwalifikacyjna" />
        </div>
      </main>
      <Footer />
    </div>
  );
}