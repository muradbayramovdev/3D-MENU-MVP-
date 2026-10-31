import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-12 py-12 px-4">
      {/* Premium Hero Section */}
      <section className="text-center max-w-2xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-widest mb-4">
          Experience the Future
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          Menu3D
        </h1>
        <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
          The premium standard for digital dining. See exactly what you&apos;ll be served with our photorealistic visual menus.
        </p>
        <div className="pt-6">
          <Link href="/restaurants" className="inline-block bg-slate-900 text-white font-medium px-8 py-3.5 rounded-2xl shadow-sm hover:bg-slate-800 transition-colors text-base w-full sm:w-auto">
            Explore Restaurants
          </Link>
        </div>
      </section>
    </div>
  );
}
