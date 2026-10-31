import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-y-4">
        <Link href="/" className="text-2xl font-black bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent tracking-tight">
          Menu3D
        </Link>
        <div className="flex gap-4 md:gap-6 text-sm md:text-base font-semibold text-gray-700 items-center">
          <Link href="/restaurants" className="hover:text-rose-500 transition-colors">
            Restaurants
          </Link>
          <Link href="/about" className="hover:text-rose-500 transition-colors hidden sm:block">
            About
          </Link>
          <Link href="/partner" className="bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600 shadow-sm transition-all hover:shadow-md">
            Partner
          </Link>
        </div>
      </div>
    </nav>
  );
}
