import tunnelImg from "@/assets/machine-tunnel.jpg";
import touchlessImg from "@/assets/machine-touchless.jpg";
import deepCleanImg from "@/assets/deep-clean.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

/** The wash tunnel, as a scroll map. Each stage lights up while its section is on screen. */
export const stages = [
  { id: "top", label: "Pre-soak" },
  { id: "menu", label: "Foam" },
  { id: "machines", label: "Brush" },
  { id: "detail", label: "Rinse" },
  { id: "gallery", label: "Wax" },
  { id: "contact", label: "Dry" },
] as const;

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

export const galleryImgs = [
  { src: gallery1, alt: "Freshly waxed car with water beading on the hood" },
  { src: gallery2, alt: "Glossy paint reflecting the wash bay lights" },
  { src: gallery3, alt: "Wheel and tire after a rim clean" },
  { src: deepCleanImg, alt: "Detailed car interior" },
  { src: tunnelImg, alt: "Car passing through the foam tunnel" },
  { src: touchlessImg, alt: "Touchless wash arch spraying a truck" },
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

export const locations = [
  { title: "Downtown Flagship", detail: "412 Marina Blvd · Open 24/7" },
  { title: "Westside Detail Shop", detail: "89 Industrial Way · 8a–8p daily" },
];
