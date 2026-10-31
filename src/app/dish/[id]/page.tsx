import { getDishBySlug } from '@/data/mockData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Dish3DViewer from '@/components/Dish3DViewer';

export default async function DishPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const result = getDishBySlug(id);

  if (!result) {
    notFound();
  }

  const { dish, restaurant } = result;

  return (
    <div className="pb-12 mt-2">
      <div className="px-2 mb-4">
        <Link href={`/restaurant/${restaurant.slug}/menu`} className="inline-flex items-center gap-2 text-slate-500 font-medium hover:text-slate-900 transition-colors text-sm">
          <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100/60">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </span>
          Back
        </Link>
      </div>

      <div className="bg-white rounded-[2rem] shadow-[0_4px_32px_-8px_rgba(0,0,0,0.04)] border border-slate-100/60 overflow-hidden mx-2">
        {/* Responsive Media Area */}
        {dish.model3dUrl ? (
          <Dish3DViewer 
            modelUrl={dish.model3dUrl} 
            posterUrl={dish.image} 
            altText={dish.name} 
          />
        ) : (
          <div className="relative h-[400px] md:h-[500px] w-full bg-slate-50">
            <img 
              src={dish.image} 
              alt={dish.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Dish Info Area */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 mb-4">
             <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full uppercase tracking-wider">
              {dish.category}
            </span>
          </div>
          
          <div className="flex justify-between items-start gap-4 mb-2">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">{dish.name}</h1>
            <div className="text-xl font-medium text-slate-900">${dish.price.toFixed(2)}</div>
          </div>
          
          <p className="text-slate-500 text-base leading-relaxed font-light mb-8 pt-2">
            {dish.description}
          </p>

          {/* Action Area */}
          <button className="w-full bg-slate-900 text-white font-medium py-4 rounded-2xl shadow-sm hover:bg-slate-800 transition-colors active:scale-[0.98] text-lg mt-4">
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
}
