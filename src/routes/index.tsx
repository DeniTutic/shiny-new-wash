import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-wash.jpg";
import { Booking } from "@/components/site/Booking";
import { DeepClean } from "@/components/site/DeepClean";
import { FAQ } from "@/components/site/FAQ";
import { Features } from "@/components/site/Features";
import { Footer } from "@/components/site/Footer";
import { Gallery } from "@/components/site/Gallery";
import { Hero } from "@/components/site/Hero";
import { Machines } from "@/components/site/Machines";
import { Membership } from "@/components/site/Membership";
import { Menu } from "@/components/site/Menu";
import { MobileBookBar } from "@/components/site/MobileBookBar";
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
          "Modern automated car wash with tunnel & touchless machines, unlimited wash memberships, ceramic coating and full detailing.",
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
        <Membership selection={selection} onChange={setSelection} />
        <Machines />
        <DeepClean />
        <Gallery />
        <Reviews />
        <FAQ />
        <Booking selection={selection} onChange={setSelection} />
      </main>
      <Footer />
      <MobileBookBar selection={selection} />
    </div>
  );
}
