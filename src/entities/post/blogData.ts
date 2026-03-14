export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: number;
  date: string;
  image: string;
  localizedImages?: {
    gulf?: string;
    middleEast?: string;
    europe?: string;
    global?: string;
  };
  author: string;
}

export const blogData: BlogPost[] = [
  {
    id: "1",
    slug: "what-is-ceremonial-grade-matcha",
    title: "What Is Ceremonial Grade Matcha?",
    excerpt: "Not all matcha is created equal. Discover what sets ceremonial grade apart and why it matters for both taste and ritual.",
    content: "Ceremonial grade matcha is the highest quality matcha available, made from the youngest tea leaves at the tip of the tea plant. These leaves are shade-grown for 21 days before harvest, which forces the plant to produce more chlorophyll and L-theanine. The result is a vibrant, emerald-green powder with a naturally sweet, umami-rich flavor. Unlike culinary grade matcha — which is used for baking and lattes — ceremonial grade is meant to be whisked with hot water and enjoyed on its own, allowing you to appreciate its full, nuanced character.",
    category: "Education",
    readTime: 4,
    date: "2025-11-12",
    image: "/assets/images/matcha-cup-01.webp",
    author: "Okie Tea Masters"
  },
  {
    id: "2",
    slug: "matcha-vs-coffee-the-energy-difference",
    title: "Matcha vs Coffee: The Energy Difference",
    excerpt: "Both provide a morning boost, but the experience is fundamentally different. Here is what the science says.",
    content: "Coffee delivers a rapid spike in alertness followed by a crash. Matcha, on the other hand, provides a calm, sustained energy that lasts 4-6 hours. The secret lies in L-theanine, an amino acid found almost exclusively in green tea. L-theanine binds to caffeine and modulates its release, promoting what researchers call 'alert calmness' — focused energy without anxiety or the dreaded afternoon slump. For creative and cognitive work, this makes matcha a superior choice.",
    category: "Health",
    readTime: 5,
    date: "2025-12-01",
    image: "/assets/images/20250115_024606.jpg",
    localizedImages: {
      gulf: "/assets/images/matcha-cup-02.webp",
      middleEast: "/assets/images/mockup.webp",
      europe: "/assets/images/o (19).webp"
    },
    author: "Okie Tea Masters"
  },
  {
    id: "3",
    slug: "the-art-of-whisking-matcha",
    title: "The Art of Whisking Matcha",
    excerpt: "A bamboo chasen, a ceramic chawan, and a practiced wrist. Learn how to whisk matcha the traditional way.",
    content: "Whisking matcha is a mindful practice that rewards patience. Begin by sifting 1.5-2 teaspoons of matcha into your chawan (bowl) to break up any clumps. Add a small amount of 70-80°C water — never boiling — and use your chasen (bamboo whisk) in a quick W or zigzag motion, not a circular one. The goal is to create a smooth, frothy surface with no dry powder remaining. The ritual itself is considered meditative — a momentary pause in an otherwise busy day.",
    category: "Brewing",
    readTime: 3,
    date: "2026-01-08",
    image: "/assets/images/matcha-cup-circle.webp",
    author: "Okie Tea Masters"
  },
  {
    id: "4",
    slug: "matcha-for-skin-the-antioxidant-advantage",
    title: "Matcha for Skin: The Antioxidant Advantage",
    excerpt: "Matcha contains EGCG, one of the most potent antioxidants on earth. Here is what it can do for your skin from the inside out.",
    content: "EGCG (Epigallocatechin Gallate) is a catechin found in high concentrations in quality matcha. Studies show EGCG can help reduce inflammation, protect against UV damage, and promote collagen production. Drinking one to two servings of ceremonial grade matcha daily delivers a concentrated dose of these antioxidants — far more than any single cup of green tea. Your skin, like your mind, responds to consistency. Make it a ritual.",
    category: "Health",
    readTime: 4,
    date: "2026-02-14",
    image: "/assets/images/matcha-leave.webp",
    author: "Okie Tea Masters"
  },
  {
    id: "5",
    slug: "uji-kyoto-the-birthplace-of-matcha",
    title: "Uji, Kyoto: The Birthplace of Matcha",
    excerpt: "Nestled between Kyoto and Nara, Uji is considered the epicenter of Japan's tea culture. We explore why.",
    content: "Uji's unique geography — rich soil, plentiful water, and a climate that alternates between warm days and cool nights — creates ideal conditions for shade-grown tea. The region has been producing green tea for over 800 years, and its farmers have refined cultivation methods across generations. Okie Tokyo Tea sources exclusively from award-winning Uji farms, where the relationships between our team and the farmers are built on trust, tradition, and a shared love of authentic matcha.",
    category: "Origin",
    readTime: 6,
    date: "2026-03-01",
    image: "/assets/images/matcha-leave-02.webp",
    author: "Okie Tea Masters"
  },
  {
    id: "6",
    slug: "cold-brew-matcha-a-summer-ritual",
    title: "Cold Brew Matcha: A Summer Ritual",
    excerpt: "When the heat arrives, your matcha ritual doesn't have to stop. Cold brew method delivers a sweeter, smoother cup.",
    content: "Cold brewing matcha bypasses the heat entirely, producing a naturally sweeter, less astringent drink. Simply add 1 teaspoon of ceremonial grade matcha to 250ml of cold or room-temperature water. Whisk or shake vigorously, then pour over ice. Because no heat is involved, the L-theanine stays intact and the flavor is noticeably smoother. Experiment with adding a splash of oat milk for a refreshing iced matcha latte. It is the perfect upgrade to your warm-weather morning.",
    category: "Brewing",
    readTime: 3,
    date: "2026-03-10",
    image: "/assets/images/okietokyotea-pouch-mockup.webp",
    localizedImages: {
      gulf: "/assets/images/matcha-leave.webp",
      middleEast: "/assets/images/20250115_022351.jpg",
      europe: "/assets/images/matcha-cup-circle.webp"
    },
    author: "Okie Tea Masters"
  }
];

export const blogCategories = ["All", "Education", "Health", "Brewing", "Origin"];

