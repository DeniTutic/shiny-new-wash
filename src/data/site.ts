import tunnelImg from "@/assets/machine-tunnel.jpg";
import touchlessImg from "@/assets/machine-touchless.jpg";
import beadingImg from "@/assets/gallery-1.jpg";
import wheelImg from "@/assets/gallery-wheel.jpg";
import rinseImg from "@/assets/gallery-rinse.jpg";
import beforeImg from "@/assets/before-dirty.jpg";
import afterImg from "@/assets/after-clean.jpg";

/**
 * The wash tunnel, as a scroll map. Each stage lights up while its section (or one of the
 * sections it `covers`) is on screen.
 */
export const stages: { id: string; label: string; section: string; covers?: string[] }[] = [
  { id: "top", label: "Pre-soak", section: "Home" },
  { id: "menu", label: "Foam", section: "Packages", covers: ["membership"] },
  { id: "machines", label: "Brush", section: "Machines" },
  { id: "detail", label: "Rinse", section: "Detailing" },
  { id: "gallery", label: "Wax", section: "Results", covers: ["reviews", "faq"] },
  { id: "contact", label: "Dry", section: "Book" },
];

export type PackageId = "express" | "shine" | "ceramic" | "detail";

export const packages: {
  id: PackageId;
  name: string;
  price: number;
  time: string;
  blurb: string;
  accent: "cyan" | "magenta" | "lemon";
  popular?: boolean;
}[] = [
  {
    id: "express",
    name: "Express",
    price: 12,
    time: "5 min",
    blurb: "Foam, rinse, dry. In and out.",
    accent: "cyan",
  },
  {
    id: "shine",
    name: "Premium Shine",
    price: 24,
    time: "12 min",
    blurb: "Hot wax and tire shine finish.",
    accent: "magenta",
  },
  {
    id: "ceramic",
    name: "Ceramic Shield",
    price: 59,
    time: "20 min",
    blurb: "9H coating, months of beading.",
    accent: "lemon",
    popular: true,
  },
  {
    id: "detail",
    name: "Full Detail",
    price: 149,
    time: "2 hrs",
    blurb: "Inside and out, restored.",
    accent: "cyan",
  },
];

/** What each package runs through. */
export const matrix: { step: string; in: PackageId[] }[] = [
  { step: "Triple foam", in: ["express", "shine", "ceramic", "detail"] },
  { step: "Spot-free rinse", in: ["express", "shine", "ceramic", "detail"] },
  { step: "Power dry", in: ["express", "shine", "ceramic", "detail"] },
  { step: "Hot carnauba wax", in: ["shine", "ceramic", "detail"] },
  { step: "Tire & rim cleaner", in: ["shine", "ceramic", "detail"] },
  { step: "Underbody rinse", in: ["shine", "ceramic", "detail"] },
  { step: "9H ceramic spray", in: ["ceramic", "detail"] },
  { step: "Clay bar treatment", in: ["detail"] },
  { step: "Steam & leather care", in: ["detail"] },
  { step: "Engine bay clean", in: ["detail"] },
];

export type PlanId = "express-unl" | "shine-unl" | "ceramic-unl";

/** Monthly unlimited plans. Each one covers unlimited washes of its base package. */
export const plans: {
  id: PlanId;
  name: string;
  price: number;
  pkg: PackageId;
  accent: "cyan" | "magenta" | "lemon";
  popular?: boolean;
}[] = [
  { id: "express-unl", name: "Express Unlimited", price: 39, pkg: "express", accent: "cyan" },
  {
    id: "shine-unl",
    name: "Shine Unlimited",
    price: 79,
    pkg: "shine",
    accent: "magenta",
    popular: true,
  },
  { id: "ceramic-unl", name: "Ceramic Unlimited", price: 159, pkg: "ceramic", accent: "lemon" },
];

export const planPerks = [
  "Drive up, the gate reads your plate",
  "One car per plan, swap anytime",
  "Cancel online, no fees",
];

export const addons = [
  { id: "tire", label: "Tire shine", price: 5 },
  { id: "vac", label: "Interior vacuum", price: 8 },
  { id: "pet", label: "Pet-hair removal", price: 12 },
  { id: "topup", label: "Ceramic top-up", price: 15 },
] as const;

export const features = [
  { title: "Open 24/7", desc: "Self-serve bays around the clock." },
  { title: "Eco-conscious", desc: "Reclaimed water, biodegradable soaps." },
  { title: "Under 5 minutes", desc: "Drive-through tunnels keep lines moving." },
  { title: "Touch-free dry", desc: "High-velocity dryers, zero water spots." },
];

export const machines = [
  {
    img: tunnelImg,
    alt: "Car passing between rotating soft-touch brushes in the wash tunnel",
    name: "AquaTunnel Pro X9",
    tag: "New 2026",
    desc: "Soft-touch foam brush tunnel with AI-guided pressure control. Safe on every paint finish, ceramic-coat friendly.",
    specs: [
      ["Length", "72 ft"],
      ["Water", "Recycled"],
      ["Scan", "AI paint"],
      ["Arch", "Triple-foam"],
    ],
  },
  {
    img: touchlessImg,
    alt: "Car under a touchless arch of high-pressure water jets",
    name: "JetCloud Touchless",
    tag: "Flagship",
    desc: "1,200 PSI touchless wash for sensitive finishes, wraps and lifted trucks. Zero bristle contact.",
    specs: [
      ["Pressure", "1,200 PSI"],
      ["Soap", "pH-balanced"],
      ["Scan", "Auto profile"],
      ["Rinse", "Eco cycle"],
    ],
  },
];

export const detailSteps = [
  "Vacuum every crevice — seats, mats, trunk, headliner",
  "Steam sanitize fabrics and high-touch surfaces",
  "Hand-condition leather and trim, UV protectant",
  "Streak-free glass inside and out",
  "Odor neutralization & ozone treatment",
];

/** Same car, same angle, for the wipe slider. */
export const beforeAfter = {
  before: { src: beforeImg, label: "Before", alt: "White SUV coupe covered in mud and road grime" },
  after: { src: afterImg, label: "After", alt: "The same SUV coupe washed clean and glossy" },
};

export const galleryImgs = [
  { src: beadingImg, alt: "Water beading on a freshly coated red hood" },
  { src: wheelImg, alt: "Foamed alloy wheel reflected in a wet floor" },
  { src: rinseImg, alt: "High-pressure rinse on the rear of a black sports car" },
];

/** Unsplash photo credits, shown in the footer. */
export const photoCredits = [
  {
    name: "Quilia",
    url: "https://unsplash.com/photos/white-ford-vehicle-on-car-wash-shop-_YU2u99cwPk",
  },
  {
    name: "Zulfahmi Khani",
    url: "https://unsplash.com/photos/water-fountain-in-the-middle-of-the-road-9gvFjMVS9A0",
  },
  {
    name: "Zac Nielson",
    url: "https://unsplash.com/photos/a-close-up-of-a-car-tire-on-a-wet-surface-m5g2IFRouCs",
  },
  {
    name: "Lorenzo Hamers",
    url: "https://unsplash.com/photos/a-car-being-washed-with-a-high-pressure-washer-OjToDRA8StA",
  },
];

export const testimonials = [
  {
    name: "Marcus T.",
    car: "Tesla Model S",
    text: "The ceramic coat is unreal. Water just slides off — best car wash I've ever used.",
  },
  {
    name: "Priya S.",
    car: "Range Rover",
    text: "Deep interior clean made my 5-year-old SUV smell brand new. Worth every penny.",
  },
  {
    name: "Diego R.",
    car: "Ford F-150",
    text: "Touchless bay handled my lifted truck no problem. Quick, careful, spotless.",
  },
];

/** `hours` is [open, close] in 24h local time; null means always open. */
export const locations: {
  id: string;
  title: string;
  address: string;
  hoursLabel: string;
  hours: [number, number] | null;
}[] = [
  {
    id: "downtown",
    title: "Downtown Flagship",
    address: "412 Marina Blvd",
    hoursLabel: "Open 24/7",
    hours: null,
  },
  {
    id: "westside",
    title: "Westside Detail Shop",
    address: "89 Industrial Way",
    hoursLabel: "8am–8pm daily",
    hours: [8, 20],
  },
];

export const directionsUrl = (address: string) =>
  `https://maps.google.com/?q=${encodeURIComponent(address)}`;

export const timeSlots = ["Morning · 8–11", "Midday · 11–2", "Afternoon · 2–5", "Evening · 5–8"];

export const faqs = [
  {
    q: "Is the tunnel safe for ceramic coatings and wraps?",
    a: "Yes. The soft-touch tunnel uses closed-cell foam and pH-balanced soaps that won't strip coatings. For matte wraps or fresh paint, choose the JetCloud touchless bay and nothing touches the car but water.",
  },
  {
    q: "Will my lifted truck or roof rack fit?",
    a: "The touchless bay clears vehicles up to 8 ft tall and handles roof racks and bike mounts. The soft-touch tunnel fits up to 7 ft; our attendant will wave you to the right lane.",
  },
  {
    q: "How long does a wash take?",
    a: "Express runs about 5 minutes, Premium Shine 12, Ceramic Shield 20. Full Details are booked by appointment and take around 2 hours.",
  },
  {
    q: "How do I pay?",
    a: "Card, Apple Pay and Google Pay at the pay station. Members skip it entirely: the gate reads your plate and opens.",
  },
  {
    q: "How does the unlimited membership work?",
    a: "Pick a plan, register one car, and wash as often as you like at either location. You're billed monthly and can cancel online any time with no fees.",
  },
  {
    q: "What if it rains right after my wash?",
    a: "Come back within 48 hours and we'll rewash it for free. Just show your receipt.",
  },
];
