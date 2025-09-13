import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <main className="flex-1 p-8 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-center">Przykładowe webinary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Webinar 1" description="Wprowadzenie do biznesu" image="/webinar1.jpg" />
          <Card title="Webinar 2" description="Jak znaleźć pierwszego klienta" image="/webinar1.jpg" />
          <Card title="Webinar 3" description="Skuteczne CV i rozmowa kwalifikacyjna" image="/webinar1.jpg" />
        </div>
      </main>
      <Footer />
    </div>
  );
}