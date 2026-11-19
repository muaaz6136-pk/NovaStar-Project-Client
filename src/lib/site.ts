import eagle from "@/assets/work-eagle.jpg";
import bulldog from "@/assets/work-bulldog.jpg";
import tiger from "@/assets/work-tiger.jpg";
import adventure from "@/assets/work-adventure.jpg";
import fire from "@/assets/work-fire.jpg";
import usa from "@/assets/work-usa.jpg";
import cap from "@/assets/navy-cap.jpg";

export const contact = {
  email: "info@novastardigitizing.com",
  phone: "+1 (555) 123-4567",
  phoneHref: "tel:+15551234567",
  regions: "USA, Canada, UK",
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services", hasMenu: true },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const services = [
  {
    id: "embroidery",
    title: "Embroidery Digitizing",
    short: "Clean, production-ready DST, PES, EMB & more for caps, chest logos and jacket backs.",
    points: ["Left chest & cap logos", "Jacket backs & 3D puff", "All machine formats"],
  },
  {
    id: "vector",
    title: "Vector Art",
    short: "Pixel images converted into crisp, scalable vector files for print and screen.",
    points: ["AI, EPS, PDF, SVG", "Screen-print color separation", "Hand-traced, no auto-trace"],
  },
  {
    id: "patches",
    title: "Custom Patches",
    short: "Embroidered, woven and PVC patch designs with sharp borders and true colors.",
    points: ["Embroidered & woven", "Merrow & hot-cut borders", "Any shape or size"],
  },
] as const;

export const portfolio = [
  { src: eagle, title: "Eagle Mascot", type: "Embroidery" },
  { src: tiger, title: "Roaring Tiger", type: "Embroidery" },
  { src: bulldog, title: "Bulldog Team Logo", type: "Embroidery" },
  { src: adventure, title: "Adventure Badge", type: "Custom Patch" },
  { src: fire, title: "Fire Rescue Crest", type: "Custom Patch" },
  { src: usa, title: "USA Shield", type: "Custom Patch" },
  { src: cap, title: "Star Cap Logo", type: "Embroidery" },
];

export const reviews = [
  { name: "John Miller", country: "USA", text: "Amazing quality and super fast service. Highly recommended!" },
  { name: "Sarah Johnson", country: "UK", text: "Professional work and great communication. Will order again!" },
  { name: "David Smith", country: "Canada", text: "Perfect digitizing. Exactly what we needed. Thank you!" },
  { name: "Emily Carter", country: "USA", text: "Our cap logos sew out perfectly every single time." },
  { name: "Lucas Martin", country: "France", text: "Quick replies, fair prices and flawless vector files." },
];

export const pricing = [
  {
    name: "Left Chest / Cap",
    price: "$10",
    unit: "starting",
    features: ["Up to 4 inches", "All machine formats", "Free edits", "12–24 hour delivery"],
  },
  {
    name: "Jacket Back",
    price: "$25",
    unit: "starting",
    featured: true,
    features: ["Up to 12 inches", "Complex designs", "Free edits", "24 hour delivery"],
  },
  {
    name: "Vector Art",
    price: "$8",
    unit: "starting",
    features: ["AI, EPS, PDF, SVG", "Color separation", "Free edits", "12–24 hour delivery"],
  },
];

export const faqs = [
  {
    q: "What file formats do you deliver?",
    a: "We deliver all major embroidery formats including DST, PES, EMB, EXP, JEF, VP3 and more. Vector art is delivered as AI, EPS, PDF and SVG.",
  },
  {
    q: "How fast is your turnaround?",
    a: "Most orders are delivered within 12–24 hours. Rush orders can be completed in 3–4 hours.",
  },
  {
    q: "Do you offer free edits?",
    a: "Yes. Minor edits are always free until you're fully happy with the result.",
  },
  {
    q: "How do I send my artwork?",
    a: "Email your artwork to us or use the quote form. JPG, PNG, PDF or even a phone photo works.",
  },
  {
    q: "Which countries do you serve?",
    a: "We work with clients across the USA, Canada, UK and France — and anywhere else online.",
  },
];
