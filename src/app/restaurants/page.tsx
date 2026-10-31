import { mockRestaurants } from '@/data/mockData';
import RestaurantCard from '@/components/RestaurantCard';

export default function RestaurantsListingPage() {
  return (
    <div className="space-y-8 mt-4">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">All Restaurants</h1>
        <p className="text-slate-500">Find the perfect dining spot.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}
