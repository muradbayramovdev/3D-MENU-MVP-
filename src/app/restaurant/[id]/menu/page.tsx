import { getRestaurantBySlug, getDishesByRestaurantId } from '@/data/mockData';
import { notFound } from 'next/navigation';
import DishCard from '@/components/DishCard';
import Link from 'next/link';

export default async function RestaurantMenuPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const restaurant = getRestaurantBySlug(id);

  if (!restaurant) {
    notFound();
  }

  const dishes = getDishesByRestaurantId(restaurant.id);
  const categories = Array.from(new Set(dishes.map(d => d.category)));

  return (
    <div className="mt-4 pb-12">
      <div className="sticky top-16 z-40 bg-slate-50/90 backdrop-blur-xl pt-4 pb-4 border-b border-slate-100 mb-6">
        <div className="flex items-center gap-4 px-2 mb-4">
          <Link href={`/restaurant/${restaurant.slug}`} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100/60 text-slate-600 hover:text-slate-900 transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </Link>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">{restaurant.name}</h1>
            <p className="text-xs text-slate-500 font-medium">Menu</p>
          </div>
        </div>

        {/* Category Pills (Horizontal scrolling) */}
        <div className="flex gap-2 overflow-x-auto hidden-scrollbar px-2 pb-1">
          {categories.map(category => (
            <div key={category} className="whitespace-nowrap px-4 py-1.5 bg-white border border-slate-100 rounded-full text-sm font-medium text-slate-700 shadow-sm">
              {category}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-10 px-2">
        {categories.map(category => {
          const categoryDishes = dishes.filter(d => d.category === category);
          return (
            <div key={category} id={category}>
              <h2 className="text-lg font-bold text-slate-900 mb-4">{category}</h2>
              <div className="flex flex-col gap-3">
                {categoryDishes.map((dish) => (
                  <DishCard key={dish.id} dish={dish} />
                ))}
              </div>
            </div>
          );
        })}
        
        {dishes.length === 0 && (
           <div className="text-center py-12 px-4 bg-white rounded-3xl border border-slate-100/60 shadow-sm text-slate-400 font-light">
             Menu is currently empty.
           </div>
        )}
      </div>
    </div>
  );
}
