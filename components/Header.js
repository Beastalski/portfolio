import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="font-bold text-xl">Moje Portfolio</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">O mnie</Link>
          <Link href="/services">Oferta</Link>
          <Link href="/webinars">Webinary</Link>
          <Link href="/contact">Kontakt</Link>
        </div>
      </nav>
    </header>
  );
}