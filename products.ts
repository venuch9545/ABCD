export interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  origin: string;
  finish: string;
  slabSize: string;
  thickness: string;
  color: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Star Galaxy",
    slug: "star-galaxy",
    image: "/products/star-galaxy.jpg",
    description: "A luxurious black granite with golden specks that shimmer like stars in the night sky. Highly sought after for premium countertops and flooring.",
    origin: "Chimakurthy, Andhra Pradesh",
    finish: "Polished, Honed, Leathered",
    slabSize: "260 x 160 cm (up to 300 x 190 cm)",
    thickness: "18mm, 20mm, 30mm",
    color: "Black with golden flecks",
  },
  {
    id: 2,
    name: "Absolute Black",
    slug: "absolute-black",
    image: "/products/absolute-black.jpg",
    description: "The purest jet-black granite available. Uniform color and fine grain make it the top choice for sleek, modern architectural applications.",
    origin: "Prakasam, Andhra Pradesh",
    finish: "Polished, Honed, Flamed, Leathered",
    slabSize: "260 x 160 cm (up to 300 x 190 cm)",
    thickness: "18mm, 20mm, 30mm",
    color: "Pure black",
  },
  {
    id: 3,
    name: "Steel Grey",
    slug: "steel-grey",
    image: "/products/steel-grey.jpg",
    description: "An elegant grey granite with subtle silvery-blue tones. Its flowing veins and industrial aesthetic make it perfect for contemporary spaces.",
    origin: "Kurnool, Andhra Pradesh",
    finish: "Polished, Honed, Leathered, Brushed",
    slabSize: "260 x 160 cm (up to 310 x 180 cm)",
    thickness: "18mm, 20mm, 30mm",
    color: "Grey with silvery veins",
  },
  {
    id: 4,
    name: "Black Pearl",
    slug: "black-pearl",
    image: "/products/black-pearl.jpg",
    description: "A striking granite featuring silver and golden mineral deposits on a dark base. Creates dramatic visual impact in any interior setting.",
    origin: "Prakasam, Andhra Pradesh",
    finish: "Polished, Honed, Leathered",
    slabSize: "260 x 160 cm (up to 300 x 190 cm)",
    thickness: "18mm, 20mm, 30mm",
    color: "Black with silver-gold minerals",
  },
  {
    id: 5,
    name: "Tan Brown",
    slug: "tan-brown",
    image: "/products/tan-brown.jpg",
    description: "A warm, earthy granite with rich brown tones interspersed with black and grey crystals. A bestseller for kitchen countertops worldwide.",
    origin: "Karimnagar, Telangana",
    finish: "Polished, Honed, Leathered",
    slabSize: "260 x 160 cm (up to 300 x 190 cm)",
    thickness: "18mm, 20mm, 30mm",
    color: "Brown with black crystals",
  },
  {
    id: 6,
    name: "Kashmir White",
    slug: "kashmir-white",
    image: "/products/kashmir-white.jpg",
    description: "A timeless white granite with soft grey and garnet-red mineral inclusions. The most popular white granite for elegant, bright interiors.",
    origin: "Tamil Nadu",
    finish: "Polished, Honed",
    slabSize: "260 x 160 cm (up to 300 x 180 cm)",
    thickness: "18mm, 20mm, 30mm",
    color: "White with grey and red flecks",
  },
  {
    id: 7,
    name: "River White",
    slug: "river-white",
    image: "/products/river-white.jpg",
    description: "A sophisticated white granite with flowing grey veins reminiscent of river currents. Perfect for creating a marble-like look with granite durability.",
    origin: "Andhra Pradesh",
    finish: "Polished, Honed",
    slabSize: "260 x 160 cm (up to 300 x 180 cm)",
    thickness: "18mm, 20mm, 30mm",
    color: "White with grey veining",
  },
  {
    id: 8,
    name: "Colonial White",
    slug: "colonial-white",
    image: "/products/colonial-white.jpg",
    description: "A light, elegant granite with subtle grey and rose undertones. Ideal for creating warm, inviting spaces with a touch of sophistication.",
    origin: "Tamil Nadu",
    finish: "Polished, Honed",
    slabSize: "260 x 160 cm (up to 300 x 180 cm)",
    thickness: "18mm, 20mm, 30mm",
    color: "Off-white with grey and rose",
  },
  {
    id: 9,
    name: "Vizag Blue",
    slug: "vizag-blue",
    image: "/products/vizag-blue.jpg",
    description: "A rare, exotic blue-grey granite with distinctive wavy patterns. Highly prized for luxury countertops and statement architectural pieces.",
    origin: "Visakhapatnam, Andhra Pradesh",
    finish: "Polished, Honed, Leathered",
    slabSize: "260 x 160 cm (up to 280 x 180 cm)",
    thickness: "18mm, 20mm, 30mm",
    color: "Blue-grey with wavy patterns",
  },
  {
    id: 10,
    name: "Red Multicolour",
    slug: "red-multicolour",
    image: "/products/red-multicolour.jpg",
    description: "A vibrant granite featuring a rich blend of red, grey, and black minerals. Creates bold, eye-catching surfaces for distinctive interiors.",
    origin: "Karnataka",
    finish: "Polished, Honed, Flamed",
    slabSize: "260 x 160 cm (up to 300 x 180 cm)",
    thickness: "18mm, 20mm, 30mm",
    color: "Red, grey, and black blend",
  },
];

export const WHATSAPP_NUMBER = "919014409545";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const EMAIL = "info@southstoneexports.in";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61585611921716";
export const INSTAGRAM_URL = "https://www.instagram.com/southstoneexport/?__pwa=1";

export function getWhatsAppUrl(productName?: string): string {
  const message = productName
    ? `Hello South Stone Exports, I am interested in ${productName} granite. Please share pricing and availability details.`
    : `Hello South Stone Exports, I am interested in your granite products. Please share more details.`;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
