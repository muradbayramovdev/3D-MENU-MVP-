export type RestaurantCategory = 'cafe' | 'fast food' | 'restaurant' | 'dessert';

export interface Restaurant {
  id: string;
  slug: string;
  name: string;
  category: RestaurantCategory;
  shortDescription: string;
  address: string;
  coverImage: string;
  logo: string;
}

export interface Dish {
  id: string;
  slug: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string; // e.g., 'Main Course', 'Dessert', 'Beverage'
  model3dUrl?: string; // Optional 3D model URL
}
