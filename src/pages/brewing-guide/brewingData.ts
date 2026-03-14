export interface BrewingStep {
  step: number;
  title: string;
  description: string;
  tip?: string;
}

export interface BrewingMethod {
  id: string;
  name: string;
  subtitle: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  time: string;
  temp: string;
  steps: BrewingStep[];
}

export const brewingMethods: BrewingMethod[] = [
  {
    id: "traditional",
    name: "Traditional Usucha",
    subtitle: "Thin Tea — The Classic Way",
    difficulty: "Intermediate",
    time: "3-5 min",
    temp: "70-80°C",
    steps: [
      {
        step: 1,
        title: "Warm the Bowl",
        description: "Pour hot water into your chawan (tea bowl) and let it sit for 30 seconds. Discard the water and dry with a clean cloth.",
        tip: "A warm bowl keeps your matcha at the right temperature longer."
      },
      {
        step: 2,
        title: "Sift the Matcha",
        description: "Sift 1.5 teaspoons (about 2g) of matcha through a fine-mesh sieve into the chawan to eliminate clumps.",
        tip: "Never skip sifting — clumps are the enemy of a smooth bowl."
      },
      {
        step: 3,
        title: "Add Water",
        description: "Add 70ml of water at 70-80°C. Never use boiling water as it scorches the leaves and turns the flavor bitter.",
      },
      {
        step: 4,
        title: "Whisk",
        description: "Using your chasen (bamboo whisk), whisk in a quick W or M motion. Do not stir in circles. Whisk until you see a fine, consistent foam.",
        tip: "The chasen should not scrape the bottom — keep the tips near the surface."
      },
      {
        step: 5,
        title: "Serve Immediately",
        description: "Matcha waits for no one. Drink it within 30 seconds of whisking while the foam is at its peak and the temperature is perfect."
      }
    ]
  },
  {
    id: "latte",
    name: "Matcha Latte",
    subtitle: "Creamy, Comforting, Versatile",
    difficulty: "Beginner",
    time: "5 min",
    temp: "70°C",
    steps: [
      {
        step: 1,
        title: "Make a Paste",
        description: "In a small bowl or cup, combine 1-2 teaspoons of matcha with 2 tablespoons of 70°C water and whisk into a smooth, lump-free paste."
      },
      {
        step: 2,
        title: "Heat Your Milk",
        description: "Warm 250ml of your preferred milk (oat milk gives the best texture) to approximately 65°C. Do not boil.",
        tip: "Oat milk froths beautifully and complements the earthy sweetness of matcha."
      },
      {
        step: 3,
        title: "Sweeten (Optional)",
        description: "Add honey, maple syrup, or a pinch of vanilla to the matcha paste and stir to combine before adding milk."
      },
      {
        step: 4,
        title: "Combine",
        description: "Pour the warm milk over the matcha paste slowly, stirring as you pour. Froth any remaining milk and spoon over the top."
      }
    ]
  },
  {
    id: "cold-brew",
    name: "Cold Brew Matcha",
    subtitle: "Smooth, Sweet, and Refreshing",
    difficulty: "Beginner",
    time: "2 min",
    temp: "Cold",
    steps: [
      {
        step: 1,
        title: "Measure and Sift",
        description: "Sift 1 teaspoon of matcha into a shaker bottle or mason jar."
      },
      {
        step: 2,
        title: "Add Cold Water",
        description: "Pour in 200-250ml of cold, filtered water. Room temperature water also works.",
        tip: "Cold water brings out a naturally sweeter, less bitter flavor from the matcha."
      },
      {
        step: 3,
        title: "Shake or Whisk",
        description: "Close the shaker and shake vigorously for 20-30 seconds until no powder remains and the liquid is evenly green."
      },
      {
        step: 4,
        title: "Pour Over Ice",
        description: "Fill a glass with ice and pour the cold brew matcha over it. Add cold oat milk for a refreshing iced latte."
      }
    ]
  }
];

export const brewingTools = [
  { name: "Chasen (Bamboo Whisk)", description: "100-prong whisks produce the finest foam. Rinse immediately after use and store on a whisk holder.", essential: true },
  { name: "Chawan (Tea Bowl)", description: "Wide mouth allows room to whisk freely. Ceramic retains heat best.", essential: true },
  { name: "Chashaku (Bamboo Scoop)", description: "A traditional bamboo scoop that holds exactly the right amount of matcha per serving.", essential: false },
  { name: "Fine Mesh Sieve", description: "Essential for sifting out clumps before whisking. A small fine sieve works perfectly.", essential: true },
  { name: "Milk Frother", description: "A handheld electric frother works well for lattes if you do not have a chasen.", essential: false }
];
