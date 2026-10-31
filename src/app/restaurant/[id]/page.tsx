import { getRestaurantBySlug } from '@/data/mockData';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function RestaurantInfoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const restaurant = getRestaurantBySlug(id);

  if (!restaurant) {
    notFound();
  }

  return (
    <div className="space-y-8 mt-4 pb-12">
      {/* Premium Image Header */}
      <div className="relative h-72 md:h-96 w-full rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100/50 shadow-[0_4px_32px_-8px_rgba(0,0,0,0.06)]">
        <img 
          src={restaurant.coverImage} 
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <Link href="/restaurants" className="inline-flex items-center justify-center w-10 h-10 bg-white/90 backdrop-blur-md rounded-full shadow-sm text-slate-700 hover:bg-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </Link>
        </div>
        
        {/* Floating Logo Profile */}
        <div className="absolute -bottom-8 left-8 border-4 border-white bg-white rounded-[1.5rem] shadow-sm overflow-hidden w-24 h-24">
          <img src={restaurant.logo} alt="logo" className="w-full h-full object-cover bg-slate-50" />
        </div>
      </div>

      <div className="pt-8 px-2 space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-slate-100 px-3 py-1 rounded-full text-xs font-semibold text-slate-600 uppercase tracking-wider">
              {restaurant.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2">{restaurant.name}</h1>
          <p className="text-slate-500 font-light text-lg">{restaurant.address}</p>
        </div>

        <div className="bg-white rounded-[2rem] p-6 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.03)] border border-slate-100/60 break-inside-avoid">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">About</h2>
            <p className="text-slate-700 leading-relaxed font-light">{restaurant.shortDescription}</p>
        </div>

        <div className="pt-4">
          <Link href={`/restaurant/${restaurant.slug}/menu`} className="block w-full bg-slate-900 text-white font-medium py-4 rounded-2xl shadow-sm hover:bg-slate-800 transition-colors text-center text-lg">
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
