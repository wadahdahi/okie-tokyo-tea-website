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
    image: "/assets/images/articles/matcha_powder_001.webp",
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
    image: "/assets/images/articles/man_in_office_holds_matcha_global_001.webp",
    localizedImages: {
      gulf: "/assets/images/articles/man_in_office_holds_matcha_arabic_gulf_001.webp",
      middleEast: "/assets/images/articles/man_in_office_holds_matcha_middle_east_001.webp",
      global: "/assets/images/articles/man_in_office_holds_matcha_global_001.webp"
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
    image: "/assets/images/articles/brewing_matcha_001.webp",
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
    image: "/assets/images/articles/woman_holds_matcha_mug_closeup_face.webp",
    localizedImages: {
      gulf: "/assets/images/articles/woman_in_office_holds_matcha_middle_east_hijab_001.webp",
      middleEast: "/assets/images/articles/woman_in_office_holds_matcha_middle_east_hijab_001.webp",
      global: "/assets/images/articles/woman_in_office_holds_matcha_001.webp"
    },
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
    image: "/assets/images/articles/matcha_fields_with_misty_mountains_001.webp",
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
    image: "/assets/images/articles/matcha_wave_001.webp",
    author: "Okie Tea Masters"
  },
  {
    id: "7",
    slug: "matcha-latte-art-beginners-guide",
    title: "Matcha Latte Art: Beginners Guide",
    excerpt: "Transform your morning cup into a masterpiece. Learn the basics of pouring hearts and rosettas with matcha.",
    content: "Creating latte art with matcha is slightly different than with coffee due to the texture of the tea. The key is a perfectly whisked, clump-free matcha base and properly micro-foamed milk. Start with a slow pour into the center of the bowl to create a foundation, then bring the pitcher closer to the surface to draw your design. Patience and a steady hand are your best tools. Even if the art isn't perfect, the taste remains divine.",
    category: "Brewing",
    readTime: 5,
    date: "2026-03-15",
    image: "/assets/images/articles/hot_green_glass_with_cream_topped_with_green_decorated_with_green_powder_001.webp",
    author: "Okie Tea Masters"
  },
  {
    id: "8",
    slug: "role-of-l-theanine-in-focus",
    title: "The Role of L-Theanine in Focus",
    excerpt: "Explore the science behind the 'calm alertness' that only high-quality matcha can provide.",
    content: "L-Theanine is a unique amino acid that crosses the blood-brain barrier to promote relaxation without drowsiness. When combined with the caffeine in matcha, it creates a synergistic effect that enhances cognitive function and mood. Unlike the jittery energy of energy drinks, matcha provides a steady, laser-like focus. This is why matcha has been favored by monks and creative thinkers for centuries.",
    category: "Health",
    readTime: 6,
    date: "2026-03-20",
    image: "/assets/images/articles/man_in_office_holds_matcha_global_002.webp",
    localizedImages: {
      gulf: "/assets/images/articles/man_in_office_holds_matcha_arabic_gulf_002.webp",
      middleEast: "/assets/images/articles/man_in_office_holds_matcha_middle_east_002.webp",
      global: "/assets/images/articles/man_in_office_holds_matcha_global_002.webp"
    },
    author: "Okie Tea Masters"
  },
  {
    id: "9",
    slug: "understanding-harvest-seasons",
    title: "Understanding Harvest Seasons (First Flush)",
    excerpt: "Why the 'First Flush' or Shincha is the most prized harvest of the year in the tea world.",
    content: "The first harvest of the year, occurring in late spring, is known as Ichibancha or the 'First Flush.' These leaves have hibernated all winter, accumulating the highest levels of nutrients and sweetness. Shincha, the very first of this harvest, is incredibly limited and sought after for its intense aroma and vibrant color. At Okie, we prioritize these early harvests to ensure our ceremonial grade matcha meets the highest standards of excellence.",
    category: "Origin",
    readTime: 4,
    date: "2026-03-25",
    image: "/assets/images/articles/japanese_man_with_matcha_fields_001.webp",
    author: "Okie Tea Masters"
  },
  {
    id: "10",
    slug: "traditional-tea-ceremony-etiquette",
    title: "Traditional Tea Ceremony Etiquette",
    excerpt: "Respecting the ritual. A guide to the mindfulness and manners expected in a Japanese tea house.",
    content: "The Japanese tea ceremony, or Chado, is built on four principles: Harmony, Respect, Purity, and Tranquility. As a guest, simple actions like bowing and admiring the bowl (Chawan) show your appreciation for the host's effort. It's not just about drinking tea; it's about the shared moment of silence and beauty. Learning these basics can deepen your personal daily ritual at home.",
    category: "Education",
    readTime: 7,
    date: "2026-04-01",
    image: "/assets/images/articles/brewing_matcha_002.webp",
    author: "Okie Tea Masters"
  },
  {
    id: "11",
    slug: "matcha-vs-sencha-difference",
    title: "Matcha vs Sencha: What's the Difference?",
    excerpt: "Both are green teas, but their cultivation and preparation couldn't be more different.",
    content: "While both come from the Camellia sinensis plant, matcha is shade-grown and ground into a fine powder, meaning you consume the entire leaf. Sencha, however, is grown in full sunlight and prepared by steeping the leaves in water. This leads to very different nutritional profiles and flavor palettes. Matcha is creamy and 'umami' rich, while Sencha is often described as grassy, fresh, and slightly astringent.",
    category: "Education",
    readTime: 5,
    date: "2026-04-05",
    image: "/assets/images/articles/matcha_general_picture_001.webp",
    author: "Okie Tea Masters"
  },
  {
    id: "12",
    slug: "vegan-matcha-mousse-recipe",
    title: "Creating the Perfect Vegan Matcha Mousse",
    excerpt: "A light, airy, and healthy dessert that brings out the best of ceremonial grade matcha.",
    content: "Using aquafaba or coconut cream as a base, you can create a decadent matcha mousse that is entirely plant-based. The bitterness of the tea balances perfectly with a touch of agave or maple syrup. Top it with fresh raspberries for a visually stunning and delicious treat. It's the perfect way to share the joy of matcha with friends who have a sweet tooth.",
    category: "Brewing",
    readTime: 4,
    date: "2026-04-10",
    image: "/assets/images/articles/hot_green_glass_with_cream_topped_with_green_decorated_with_green_powder_002.webp",
    author: "Okie Tea Masters"
  },
  {
    id: "13",
    slug: "historical-origins-dynasty-to-zen",
    title: "Historical Origins: From Dynasty to Zen",
    excerpt: "Tracing the 800-year journey of matcha from the Tang Dynasty to the Zen temples of Kyoto.",
    content: "Matcha's story began in China, where tea was compressed into bricks for easy transport. However, it was the Japanese Buddhist monk Eisai who brought the seeds and the whisking method to Japan in 1191. Over centuries, the Japanese refined the process, developing the shade-growing technique that gives matcha its unique properties today. Understanding its history makes every sip feel like a connection to the past.",
    category: "Origin",
    readTime: 8,
    date: "2026-04-15",
    image: "/assets/images/articles/matcha_treasure_cheast_001.webp",
    author: "Okie Tea Masters"
  },
  {
    id: "14",
    slug: "sustainable-matcha-farming",
    title: "Sustainable Matcha: Our Commitment to Earth",
    excerpt: "How Okie Tokyo Tea works with farmers to ensure soil health and biodiversity in Uji.",
    content: "Sustainability is at the core of our sourcing philosophy. By working with small, family-owned farms that use organic fertilizers and pesticide-free methods, we help protect the delicate ecosystem of Uji. Healthy soil leads to healthier tea plants and a more flavorful cup. We believe that respecting nature is the only way to produce truly premium matcha.",
    category: "Origin",
    readTime: 5,
    date: "2026-04-20",
    image: "/assets/images/articles/matcha_fields_with_misty_mountains_002.webp",
    author: "Okie Tea Masters"
  },
  {
    id: "15",
    slug: "morning-matcha-ritual-design",
    title: "Designing Your Morning Matcha Ritual",
    excerpt: "Steps to create a calm, focused start to your day using the power of mindful preparation.",
    content: "A morning ritual is a sanctuary of peace before the world wakes up. Start by clearing your space, sifting your tea with intention, and feeling the warmth of the bowl in your hands. This small investment of time (just 5-10 minutes) can reprogram your brain for a more productive and balanced day. It's not just a drink; it's a boundary between rest and action.",
    category: "Education",
    readTime: 4,
    date: "2026-04-25",
    image: "/assets/images/articles/a_girl_floating_on_cloud.webp",
    author: "Okie Tea Masters"
  },
  {
    id: "16",
    slug: "matcha-for-cognitive-focus",
    title: "Matcha for Energy: Beyond the Caffeine",
    excerpt: "Why matcha is the ultimate biohack for students, developers, and creative professionals.",
    content: "Unlike the spiked energy of synthetic stimulants, the energy from matcha is bioavailable and sustained. The combination of antioxidants and amino acids supports long-term brain health while providing immediate clarity. Whether you're studying for an exam or writing code, matcha helps you stay in the 'flow state' longer. It is truly nature's most sophisticated energy source.",
    category: "Health",
    readTime: 5,
    date: "2026-05-01",
    image: "/assets/images/articles/man_in_office_holds_matcha_global_003.webp",
    localizedImages: {
      gulf: "/assets/images/articles/man_in_office_holds_matcha_arabic_gulf_003.webp",
      middleEast: "/assets/images/articles/man_in_office_holds_matcha_middle_east_003.webp",
      global: "/assets/images/articles/man_in_office_holds_matcha_global_003.webp"
    },
    author: "Okie Tea Masters"
  }
];

export const blogCategories = ["All", "Education", "Health", "Brewing", "Origin"];
