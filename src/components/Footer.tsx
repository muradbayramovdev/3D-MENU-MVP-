import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-white pt-8 pb-12">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
            Menu3D
          </Link>
          <p className="text-sm text-gray-500 mt-1">
            Reimagining dining experiences with 3D models.
          </p>
        </div>
        
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/restaurants" className="hover:text-rose-500 transition-colors">Restaurants</Link>
          <Link href="/about" className="hover:text-rose-500 transition-colors">About Us</Link>
          <Link href="/partner" className="hover:text-rose-500 transition-colors">Partner with Us</Link>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 mt-8 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Menu3D MVP. All rights reserved.
      </div>
    </footer>
  );
}
