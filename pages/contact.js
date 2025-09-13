import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-8 bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">Kontakt</h1>
        <p>Skontaktuj się ze mną przez e-mail: kontakt@example.com lub użyj formularza kontaktowego.</p>
      </main>
      <Footer />
    </div>
  );
}