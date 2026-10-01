import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-wash.jpg";
import { Booking } from "@/components/site/Booking";
import { DeepClean } from "@/components/site/DeepClean";
import { Features } from "@/components/site/Features";
import { Footer } from "@/components/site/Footer";
import { Gallery } from "@/components/site/Gallery";
import { Hero } from "@/components/site/Hero";
import { Machines } from "@/components/site/Machines";
import { Menu } from "@/components/site/Menu";
import { Nav } from "@/components/site/Nav";
import { Reviews } from "@/components/site/Reviews";
import { defaultSelection } from "@/components/site/selection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aqua Lux — Premium Car Wash & Detailing" },
      {
        name: "description",
        content:
          "Modern automated car wash with new tunnel & touchless machines, deep interior cleaning, ceramic coating and detailing.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  // package + add-ons chosen in the menu section flow into the booking form
  const [selection, setSelection] = useState(defaultSelection);
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Menu selection={selection} onChange={setSelection} />
        <Machines />
        <DeepClean />
        <Gallery />
        <Reviews />
        <Booking selection={selection} onChange={setSelection} />
      </main>
      <Footer />
    </div>
  );
}
