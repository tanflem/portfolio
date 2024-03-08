import HeroSection from "../app/components/HeroSection";
import React from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">

      <Navbar />
      <div className="container mx-auto py-4 px-12 mt-24">
        <HeroSection />
      </div>
    </main>
  );
}
