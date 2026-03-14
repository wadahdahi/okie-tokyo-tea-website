import { Product } from './types';
import { IMAGES } from '../../shared/constants/images';

export const productsData: Product[] = Array.from({ length: 40 }).map((_, i) => {
  const categories: Product['category'][] = ['ceremonial', 'culinary', 'premium'];
  const category = categories[i % 3];
  
  const accessoryNames = [
    'Traditional Bamboo Whisk (Chasen)',
    'Ceramic Matcha Bowl (Chawan)',
    'Bamboo Tea Scoop (Chashaku)',
    'Stainless Steel Sifter',
    'Matcha Whisk Holder',
    'Travel Matcha Set',
    'Electric Milk Frother',
    'Glass Tea Cup Set',
    'Japanese Tea Tin',
    'Electric Matcha Whisk',
    'Matcha Sifter Brush',
    'Ceramic Spoon Rest',
    'Matcha Storage Jar',
    'Bamboo Tray',
    'Matcha Whisk Stand (Pink)',
    'Digital Tea Scale',
    'Matcha Tea Towel',
    'Cold Brew Bottle',
    'Glass Matcha Whisking Bowl',
    'Matcha Frother (Rose Gold)'
  ];

  const matchaNames = [
    'Okie Uji Reserve',
    'Tokyo Morning Mist',
    'Zen Garden Blend',
    'Imperial Grade Matcha',
    'Kyoto Heritage Matcha',
    'Golden Leaf Ceremonial',
    'Spring Harvest Matcha',
    'Silky Smooth Culinary',
    'Organic Uji Delight',
    'Warrior Spirit Matcha'
  ];

  const isAccessory = i >= 20;
  const name = isAccessory 
    ? (accessoryNames[i - 20] || `${accessoryNames[i % 20]} II`) 
    : `${matchaNames[i % 10]} No. ${Math.floor(i / 10) + 1}`;

  return {
    id: (i + 1).toString(),
    name,
    description: isAccessory 
      ? 'An essential tool for the perfect matcha preparation. Handcrafted with precision.' 
      : 'Premium granite-ground matcha tea leaves, shade-grown for 20 days and harvested in spring for maximum L-theanine content.',
    price: isAccessory ? (15 + (i % 5) * 5) : (25 + (i % 10) * 3),
    image: IMAGES.PRODUCTS.DEFAULT_POUCH,
    category: category,
    rating: 4.5 + (i % 5) * 0.1,
    reviewsCount: 10 + i * 5,
    inStock: true
  };
});

