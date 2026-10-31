import { Restaurant, Dish } from '../types';

export const mockRestaurants: Restaurant[] = [
  {
    id: 'r1',
    slug: 'bistro-zenith',
    name: 'Bistro Zenith',
    category: 'restaurant',
    shortDescription: 'Modern European cuisine with a delightful ambiance.',
    address: '123 Culinary Avenue, Food City',
    coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=BZ&backgroundColor=0f172a'
  },
  {
    id: 'r2',
    slug: 'cafe-lumiere',
    name: 'Café Lumière',
    category: 'cafe',
    shortDescription: 'Cozy spot for artisan coffee, pastries, and brunch classics.',
    address: '45 Artisan Boulevard, Bakery District',
    coverImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=CL&backgroundColor=0f172a'
  },
  {
    id: 'r3',
    slug: 'burger-forge',
    name: 'Burger Forge',
    category: 'fast food',
    shortDescription: 'Premium handcrafted burgers and loaded fries.',
    address: '99 Grill Street, Downtown',
    coverImage: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=BF&backgroundColor=0f172a'
  }
];

export const mockDishes: Dish[] = [
  {
    id: 'd1',
    slug: 'truffle-pasta',
    restaurantId: 'r1',
    name: 'Truffle Pasta',
    description: 'Fresh homemade pasta tossed in a rich truffle cream sauce with parmesan.',
    price: 24,
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=600',
    category: 'Main Course',
    model3dUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF-Binary/Avocado.glb'
  },
  {
    id: 'd2',
    slug: 'grilled-salmon',
    restaurantId: 'r1',
    name: 'Grilled Salmon',
    description: 'Perfectly grilled salmon with a side of asparagus and lemon butter.',
    price: 28,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=600',
    category: 'Main Course'
  },
  {
    id: 'd3',
    slug: 'avocado-toast',
    restaurantId: 'r2',
    name: 'Avocado Toast',
    description: 'Smashed avocado on sourdough with poached eggs and chili flakes.',
    price: 14,
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&q=80&w=600',
    category: 'Brunch',
    model3dUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF-Binary/Avocado.glb'
  },
  {
    id: 'd4',
    slug: 'matcha-latte',
    restaurantId: 'r2',
    name: 'Matcha Latte',
    description: 'Premium ceremonial grade matcha whisked with oat milk.',
    price: 6,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600',
    category: 'Beverage'
  },
  {
    id: 'd5',
    slug: 'forge-classic-burger',
    restaurantId: 'r3',
    name: 'Forge Classic Burger',
    description: 'Double beef patty, cheddar, forge sauce, lettuce, and tomato on a brioche bun.',
    price: 16,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600',
    category: 'Burger',
    model3dUrl: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF-Binary/Avocado.glb'
  },
  {
    id: 'd6',
    slug: 'loaded-truffle-fries',
    restaurantId: 'r3',
    name: 'Loaded Truffle Fries',
    description: 'Crispy shoestring fries topped with truffle oil, parmesan, and parsley.',
    price: 9,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&q=80&w=600',
    category: 'Sides'
  }
];

export const getRestaurantBySlug = (slug: string) => mockRestaurants.find(r => r.slug === slug);

export const getDishesByRestaurantId = (restaurantId: string) => mockDishes.filter(d => d.restaurantId === restaurantId);

export const getDishBySlug = (slug: string) => {
  const dish = mockDishes.find(d => d.slug === slug);
  if (!dish) return null;
  const restaurant = mockRestaurants.find(r => r.id === dish.restaurantId);
  return restaurant ? { dish, restaurant } : null;
};
