export default function HeroSection() {
  return (
    <section className="relative bg-gray-800 text-white">
      <img src="/hero.jpg" alt="Hero" className="w-full h-96 object-cover opacity-70" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Rozwijaj swój biznes z nami!</h1>
        <p className="text-lg md:text-xl mb-6 text-center max-w-xl">Profesjonalne doradztwo dla początkujących przedsiębiorców i osób wchodzących na rynek pracy.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Dowiedz się więcej</button>
      </div>
    </section>
  );
}