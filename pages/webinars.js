import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function Webinars() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-8 bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">Webinary</h1>
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