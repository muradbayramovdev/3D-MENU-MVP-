import Link from 'next/link';
import { Restaurant } from '../types';

interface Props {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <Link href={`/restaurant/${restaurant.slug}`} className="block w-full outline-none">
      <div className="bg-white rounded-[2rem] p-3 border border-slate-100/60 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_32px_-8px_rgba(0,0,0,0.08)] transition-shadow">
        <div className="relative h-56 w-full rounded-[1.5rem] overflow-hidden bg-slate-50">
          <img 
            src={restaurant.coverImage} 
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[11px] font-semibold text-slate-800 uppercase tracking-wider">
            {restaurant.category}
          </div>
        </div>
        <div className="flex items-start gap-4 pt-4 px-2 pb-2">
          <div className="w-12 h-12 shrink-0 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm">
            <img src={restaurant.logo} alt={`${restaurant.name} logo`} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0 pt-0.5">
            <h2 className="text-lg font-semibold text-slate-900 truncate">{restaurant.name}</h2>
            <p className="text-slate-500 text-sm font-light truncate mt-0.5">{restaurant.shortDescription}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
