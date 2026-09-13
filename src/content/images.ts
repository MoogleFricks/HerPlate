export type ImpactImage = {
  src: string;
  alt: string;
  credit: string;
  source: string;
};

export const impactImages = {
  nutrition: {
    src: "https://www.incebatrust.co.za/wp-content/uploads/2024/04/Web-body2.jpg",
    alt: "Children gathered in a bright early learning setting",
    credit: "Image: Inceba Trust",
    source: "https://incebatrust.co.za/",
  },
  learning: {
    src: "https://www.incebatrust.co.za/wp-content/uploads/2024/04/Web-mind.jpg",
    alt: "Children learning together in an early childhood programme",
    credit: "Image: Inceba Trust",
    source: "https://incebatrust.co.za/",
  },
  foodSecurity: {
    src: "https://www.care.org/wp-content/uploads/2025/05/Hunger_home.jpg",
    alt: "Community food support and hunger relief work",
    credit: "Image: CARE",
    source: "https://www.care.org/our-work/food-and-water/",
  },
  maternalNutrition: {
    src: "https://www.care.org/wp-content/uploads/2024/07/RS112115_1710701298218_scr.jpg",
    alt: "A mother and child supported through community care",
    credit: "Image: CARE, nutrition and food security resources informed by UNICEF Data",
    source: "https://data.unicef.org/topic/nutrition/maternal-nutrition/",
  },
} satisfies Record<string, ImpactImage>;