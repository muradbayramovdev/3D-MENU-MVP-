import Link from 'next/link';
import { Dish } from '../types';

interface Props {
  dish: Dish;
}

export default function DishCard({ dish }: Props) {
  return (
    <Link href={`/dish/${dish.slug}`} className="block outline-none">
      <div className="flex bg-white rounded-[1.5rem] p-3 gap-4 border border-slate-100/60 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_24px_-6px_rgba(0,0,0,0.06)] transition-shadow">
        <div className="relative h-28 w-28 shrink-0 rounded-2xl overflow-hidden bg-slate-50">
          <img 
            src={dish.image} 
            alt={dish.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0 py-1 flex flex-col justify-center">
          <div className="flex justify-between items-start gap-3 mb-1">
            <h3 className="font-semibold text-slate-900 text-base truncate">{dish.name}</h3>
            <span className="font-medium text-slate-900 shrink-0">${dish.price.toFixed(2)}</span>
          </div>
          <p className="text-slate-500 text-[13px] leading-relaxed line-clamp-2 font-light">
            {dish.description}
          </p>
          {dish.model3dUrl && (
            <div className="mt-2.5">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 bg-slate-100/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                3D View
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
